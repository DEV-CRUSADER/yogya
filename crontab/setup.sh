#!/bin/bash

crontab -l > /tmp/crontab_backup.txt

cron_command="0 7 * * * /home/sauraj/Documents/yogya/core/venv/bin/python3 /home/sauraj/Documents/yogya/core/crontab/nse_crontask.py"

echo "$cron_command" >> /tmp/crontab_backup.txt
crontab /tmp/crontab_backup.txt
rm /tmp/crontab_backup.txt
echo "New crontask added successfully."
