#! /bin/bash
cd ./packages/controller
./build.sh
cd ..
cd ..
yarn build:web
netlifyctl deploy
