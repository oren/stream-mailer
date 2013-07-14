# stream-mailer
Send an email when a regex pattern appear in a stream

[![NPM](http://nodei.co/npm/stream-mailer.png)](http://nodei.co/npm/stream-mailer/) 

## Index

* [Example](#example)
* [Install](#install)

### Example

According to config.js, we will find all "hello kitty" strings in any logs files in .weechat folder and send email to kitty@gmail.com

    tail .weechat/logs/* | stream-mailer

### Install

    npm install stream-mailer -g

### Configure pattern to search for and Email credentials (config.js)

    cp config.example.js config.js

### Run as daemon

    forever start -c sh bin/start-production.sh

### TODO

separate into 2 modules
