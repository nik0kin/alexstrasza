#!/bin/bash

rm -rf dist/
mkdir dist/

mkdir dist/vendor
mkdir dist/vendor/css
mkdir dist/vendor/js
cp ../../bower_components/foundation-sites/dist/css/foundation.css dist/vendor/css
cp ../../bower_components/foundation-sites/dist/js/foundation.js dist/vendor/js
cp ../../bower_components/jquery/dist/jquery.js dist/vendor/js
cp ../../bower_components/what-input/dist/what-input.js dist/vendor/js

mkdir dist/css
mkdir dist/js
cp -r app/css/* dist/css
cp -r app/js/* dist/js
cp app/index.html dist/
