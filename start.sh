#!/bin/sh
mkdir -p /var/run/sshd
mkdir -p /root/.ssh/ 
chmod 600 ~/.ssh
chmod 600 /etc/ssh/*
echo $SSH_KEY > /root/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
/usr/sbin/sshd
echo root:hamada | chpasswd


npm run serve -- --port 8080
# sleep 1000000