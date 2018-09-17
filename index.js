// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
 return drivers.filter(function (driver) {
   return driver.revenue > Number(revenue);
 });
}


function driverNamesWithRevenueOver(drivers, revenue) {
  arr = drivers.filter(driver => driver.revenue > Number(revenue))
  return arr.map(driver => driver.name)
}

function exactMatch (drivers, condition) {
  return drivers.filter(function (driver) {
    let matches = false;

    for(const key in condition){
      matches = driver[key] === condition[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, condition) {
  return exactMatch(drivers, condition).map(driver => driver.name);
}
