# AWS-auto-ami-backup-across-all-region using node js

Simple Easy to AWS auto AMI backup across all region or cross region using lambda (node js)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software

```
AWS Lambda 

AWS Sdk
```

### Installing

A step by step series of examples that tell you how to get a development env running

Make Policy Using File

```
iam-policy.json
```

Make Role Using File

```
role-trust-policy.json
```

Assign or attach policy to Role

Create Two 2 New Lambda Function And Assign Role That you made

Use Code From File for Lambda Functions
```
1. Create_AMI.js

2. Delete_AMI.js
```


## Running the tests

Run Lambda Function And Check For Snap Shot and AMI

### Full Automation Using Cloud Watch 

Use Cloud Watch Event as Trigger To Make Full Automation of Backup System

```
From Lambda Trigger Choose Cloud Watch Event
```

### Cron Job Cloud Watch 

Cloud Watch Cron Job Expression

```
Cron Expression :-
cron(fields)

Example:
The first example creates a rule that is triggered every day at 12:00pm UTC.
cron(0 12 * * ? *)

The next example creates a rule that is triggered every day, at 5 and 35 minutes past 2:00pm UTC.

cron(5,35 14 * * ? *)


Rate Expression :-
rate(value unit)

Example :
The first example creates a rule that is triggered every 5 minutes.
rate(5 minutes)

The next example creates a rule that is triggered every 1 hour.
rate(1 hour)

```

## Deployment

Deployment On AWS Lambda Or Locally 

## Built With

* [AWS](https://aws.amazon.com) - Cloud
* [Node Js](https://nodejs.org/en/) - Dependency Management

## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Harsh Manvar** - *Web Developer* - [harsh4870](https://github.com/harsh4870)


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

