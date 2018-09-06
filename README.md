#Assignment_one

This repository is for 3813ICT assigment one.

It is a server and front end for a chat system. 

The repository is used as version control after significant changes made to the project or milestones that are met.

After changes are successfully implemented they are pushed to the master branch. This means if an error comes up that is difficult to identify there is something to rollback to. 

Components

The components created in this solution were the menu, login, groups and channels. 

The user must login, where they can then access their groups and channels. 

For testing purposes, the current logins for testing different kinds of user are: 

generic user
login: correctusername
password: password

group admin
login: group
password: 123

super admin
login: super
password 123

Data Structures 

On the server side there are users that have a username, password, login type
When a user logs in, their username and login type are stored locally on the client side. 

Users can also belong to many groups. 
They can access a group when their name is stored under a group

Channels belong to one group. 
They can be accessed, viewed and posted to by any users that belong to the same group the channel does.
