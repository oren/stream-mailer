#!/bin/bash

LOGS=/home/oren/.weechat/logs/*

tail -f $LOGS | node /home/oren/misc/projects/stream-mailer/server.js
