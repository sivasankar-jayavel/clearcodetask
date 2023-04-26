//node-schedule module
const schedule = require('node-schedule');
//Cron expressions
  schedule.scheduleJob('/2 * * * * *', ()=>{
    console.log(`Scheduler running with date and time: ${new Date()}`);
  });
