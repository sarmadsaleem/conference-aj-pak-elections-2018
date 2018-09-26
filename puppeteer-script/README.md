# Getting started

```
# install dependecies
npm i

# run the script as process in background
pm2 start index.js --name scheduler_json_screenshot

# see all running processes
pm2 list

# managing a process
$ pm2 stop     <app_name|id|'all'>
$ pm2 restart  <app_name|id|'all'>
$ pm2 delete   <app_name|id|'all'>

# monitor a process
pm2 monit

# kill all running processes
pm2 kill
```
