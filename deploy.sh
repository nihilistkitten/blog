#!/bin/bash

JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config_production.yml
rsync -avr --rsh='ssh' --delete-after --delete-excluded ./ rileyshahar@blog.nihilistkitten.me:blog
