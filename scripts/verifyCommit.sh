#!/bin/bash
# Author : Vasanth

echo "checking if schema.json is staged"

if [ "$(git diff --name-only --staged | grep -i beffe/schema.json)" != "" ]; then
    echo "schema.json file is staged"
else
    echo "Please generate schema and stage the schema.json file"
    exit 2
fi