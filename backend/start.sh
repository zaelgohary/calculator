#!/bin/sh
mkdir -p /var/run/sshd
mkdir -p /root/.ssh/ 
chmod 600 ~/.ssh
chmod 600 /etc/ssh/*
echo $SSH_KEY > /root/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
/usr/sbin/sshd
echo root:hamada | chpasswd

cd /backend
nodemon app.js
