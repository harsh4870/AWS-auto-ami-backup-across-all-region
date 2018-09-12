# AWS-auto-ami-backup-across-all-region using node js
AWS auto AMI backup across all region or cross region using lambda node js

# I have used Lambda Function To take auto AMI backup across all region

iam-policy.json (Policy File)
role-trust-policy.json (Role file)

Create Police assign it to Role Assign Role to lambda Function

Create.js (Backup AMI + Snapshot Using node js)
Delete js (Delete AMI + Snapshot Using node js)

# For automation you can use Cloud Watch Event Trigger 

Assign Cloud watch Event Trigger To Lambda To Run Function on Particular Time

Cron Expression for Cloud Watch : 

<html><tbody><tr>
                                 
                                 <th><b>Field</b></th>
                                 
                                 <th><b>Values</b></th>
                                 
                                 <th><b>Wildcards</b></th>
                                 
                              </tr>
                              
                              
                              <tr>
                                 
                                 <td>
                                    
                                    <p>Minutes</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>0-59</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>, - * /</p>
                                    
                                 </td>
                                 
                              </tr>
                              
                              <tr>
                                 
                                 <td>
                                    
                                    <p>Hours</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>0-23</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>, - * /</p>
                                    
                                 </td>
                                 
                              </tr>
                              
                              <tr>
                                 
                                 <td>
                                    
                                    <p>Day-of-month</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>1-31</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>, - * ? / L W</p>
                                    
                                 </td>
                                 
                              </tr>
                              
                              <tr>
                                 
                                 <td>
                                    
                                    <p>Month</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>1-12 or JAN-DEC</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>, - * /</p>
                                    
                                 </td>
                                 
                              </tr>
                              
                              <tr>
                                 
                                 <td>
                                    
                                    <p>Day-of-week</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>1-7 or SUN-SAT</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>, - * ? L #</p>
                                    
                                 </td>
                                 
                              </tr>
                              
                              <tr>
                                 
                                 <td>
                                    
                                    <p>Year</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>1970-2199</p>
                                    
                                 </td>
                                 
                                 <td>
                                    
                                    <p>, - * /</p>
                                    
                                 </td>
                                 
                              </tr>
                              
                           </tbody></html>
