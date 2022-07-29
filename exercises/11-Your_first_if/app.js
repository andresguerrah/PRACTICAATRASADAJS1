var total = prompt("How many km are left to go?");

// Your code below:
function timeToGo(km) {
  if (km > 100) {
    return "We still have a bit of driving left to go";
  } else if (km > 50) {
    return "We'll be there in 5 minutes";
  } else {
    return "I'm parking. I'll see you right now";
  }
}

console.log(timeToGo(parseInt(total)));
