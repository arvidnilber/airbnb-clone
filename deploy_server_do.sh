#! /bin/bash
cd ./packages/controller
./build.sh
cd ..
cd ..
yarn build:server
heroku container:push web
heroku container:release web