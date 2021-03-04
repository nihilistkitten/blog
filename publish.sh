#!/bin/bash


today=$(date +%Y-%m-%d)
new_filename="_posts/$today-$1"
mv "_posts/$1" $new_filename

echo "Enter a title: "
read title

echo "Enter a space-separated list of tags: "
read tags

FRONTMATTER="---
layout: post
title: ${title}
tags: ${tags}
---"

echo -e "${FRONTMATTER}\n$(cat $new_filename)" > $new_filename
