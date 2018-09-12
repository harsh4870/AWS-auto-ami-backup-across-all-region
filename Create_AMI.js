var aws = require('aws-sdk');  
Region = ['ap-south-1','eu-central-1','us-east-1'];
var now = new Date();   
date = now.toISOString().substring(0, 10)  
hours = now.getHours()  
minutes = now.getMinutes()  

exports.handler =  function (event, context) 
{  
    var instanceparams = {
        Filters: [{
            Name: 'tag:Backup',
            Values: [
                'yes'
            ]
        }]
    }
    region(0);
  async function region(h){
        
    if(h>=Region.length)
    return;
    console.log("H Value Test",h);
    aws.config.region = Region[h];
    var ec2 = new aws.EC2(); 
    console.log("SELECTED REGION",Region[h])
   return await ec2.describeInstances(instanceparams, function(err, data) {
        if (err) console.log(err, err.stack);
        else {
            for (var i in data.Reservations) {
                var ec1 = new aws.EC2(); 
                for (var j in data.Reservations[i].Instances) {
                    console.log("instance is ",data.Reservations[i].Instances[j].InstanceId);
                    instanceid = data.Reservations[i].Instances[j].InstanceId;
                    nametag = data.Reservations[i].Instances[j].Tags
                    for (var k in data.Reservations[i].Instances[j].Tags) {
                        if (data.Reservations[i].Instances[j].Tags[k].Key == 'Name') {
                            name = data.Reservations[i].Instances[j].Tags[k].Value;
                        }
                    }
                    console.log("Creating AMIs of the Instance: ", name);
                    var imageparams = {
                        InstanceId: instanceid,
                        Name: name + "_" + date + "_" + hours + "-" + minutes,
                        NoReboot: true
                    }
                 ec1.createImage(imageparams, function(err, data) {
                        if (err) console.log(err, err.stack);
                        else {
                            image = data.ImageId;
                            console.log("image",image);
                            var tagparams = {
                                Resources: [image],
                                Tags: [{
                                    Key: 'DeleteOn',
                                    Value: 'yes'
                                }]
                            };
                            ec1.createTags(tagparams, function(err, data) {
                                console.log("Tags added to the created AMIs");
                            });
                           }ec1=null;
                    });
                 
                }
            }
        }
        aws.config.region = null;
        ec2 = null; 
        h+=1
        region(h)
    });
    }   
}
