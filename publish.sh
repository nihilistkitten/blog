#!/bin/bash

today=$(date +%Y-%m-%d)
mv "_posts/$1" "_posts/$today-$1"
