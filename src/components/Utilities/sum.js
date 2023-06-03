
let breakTime = 0;
console.log(breakTime);
const getBreakTime = (bTime) => {
    breakTime = breakTime + bTime ;
    // return breakTime;
}


const getActivityTime = (activityTime) => {

   return activityTime;
}

const getTotalNeededTime = () => {
    const breakTime = getBreakTime();
    const activityTime = getActivityTime();
    const totalNeededTime = breakTime + activityTime ;
    return totalNeededTime ;
}


export {getBreakTime, getActivityTime, getTotalNeededTime}