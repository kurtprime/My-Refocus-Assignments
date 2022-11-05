// Task 1

// Sam decides to do cycling 30 minutes everyday for 15 days. Cycling for 30 minutes
//burns 225 calories on average. Use console.log to tell Sam how much calories
//he would lose:

let ColoriesPerHalfHour = 225; // cycling for 30 mins burns 225 colories per hour.
let mins = 30 // total time spend for running everyday
let NumDays = 15 // nuber of days he will be cycling to lose weight

let TotalTimeSpend = mins * NumDays // minutes spend after cycling for 15 days
let TotalBurnCal = NumDays * ColoriesPerHalfHour // total burned colories for the whole 15 days.

console.log(`After spending ${TotalTimeSpend} minutes of cycling for 15 days, he may loss ${TotalBurnCal} of total colories in 15 days`)



//"Great work, Sam! After 0.5 hours of running every day for a week,
// you may lose a total of 3375 calories.”"









// Task 2 Saving app

//You are now working on a finance app that helps users save money. 
//To encourage users to continue saving, you are adding a feature to show how much money they have already saved.

//Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500. 
//Use console.log and variables to output the following in JavaScript:

let GoalToSave = 10000
let HaveSave = 7500
let Percent = 100

let x = HaveSave / GoalToSave
let PercentageOfReachingHisGoal = x * Percent

console.log(`Sam has already reached his ${PercentageOfReachingHisGoal}% of his goal from saving up to ₱${GoalToSave}`)
// “Thank you for your discipline and hardwork, Sam! You are now 25% away from your goal of saving ₱10,000.