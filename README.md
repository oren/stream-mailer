# stream-mailer
Send an email when a regex pattern appear in a stream

## Install

    npm install stream-mailer

## Configure pattern to search for and Email credentials

    cp config.example.js config.example

## Usage

    tail .weechat/logs/* | node server.js

## Run as daemon

    forever start -c sh bin/start-production.sh
