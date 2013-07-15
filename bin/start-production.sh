#!/bin/bash

LOGS=/home/oren/.weechat/logs/*

tail -f $LOGS | stream-mailer
