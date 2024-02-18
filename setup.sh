#!/bin/bash

crontab -l > /tmp/crontab_backup.txt

current_dir=$(pwd)
cron_command="0 7 * * * ${current_dir}/venv/bin/python3 ${current_dir}/crontab/nse_crontask.py"

echo "$cron_command"

echo "$cron_command" >> /tmp/crontab_backup.txt
crontab /tmp/crontab_backup.txt
rm /tmp/crontab_backup.txt
echo "New crontask added successfully."
