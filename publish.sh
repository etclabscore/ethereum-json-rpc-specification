#!/bin/bash

npm run build
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/project/build/typescript/.npmrc
npm run publish