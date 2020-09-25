#!/bin/bash

echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > build/client/typescript/.npmrc
npm run publish