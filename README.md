# stream-mailer

Send an email when a regex pattern appear in a stream

    cp config.example.js config.example
    tail .weechat/logs/* | node server.js

## in production

    forever start -c sh bin/start-production.sh
