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
