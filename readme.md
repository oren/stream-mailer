# stream-mailer
Send an email when a regex pattern appear in a stream

[![NPM](http://nodei.co/npm/stream-mailer.png)](http://nodei.co/npm/stream-mailer/) 

## Index

* [Example](#example)
* [Install](#install)
* [Run](#run)

### Example

According to config.js, we will find all "hello kitty" strings in any logs files in .weechat folder and send email to kitty@gmail.com

    tail ~/.weechat/logs/* | CONFIG_PATH='absolute/path/to/config.js' stream-mailer

### Install

    npm install stream-mailer -g

### Run
    
    CONFIG_PATH='absolute/path/to/config.js' forever start -c sh bin/start-production.sh

### TODO

Separate into 2 modules
