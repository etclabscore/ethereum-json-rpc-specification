#!/bin/bash

npm run build
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/ethereum-json-rpc-specification/build/typescript/.npmrc
npm run publish