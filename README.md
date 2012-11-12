# stream-mailer
Send an email when a regex pattern appear in a stream

### Install

    npm install stream-mailer

### Configure pattern to search for and Email credentials (config.js)

    cp config.example.js config.js

### Usage

According to config.js, we will find all "hello kitty" strings in any logs files in .weechat folder and send email to kitty@gmail.com

    tail .weechat/logs/* | node server.js

### Run as daemon

    forever start -c sh bin/start-production.sh
