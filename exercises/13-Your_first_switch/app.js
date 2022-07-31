function getColor(selection) {
  switch (selection) {
    // Add more options here
    case "blue":
      return true;
      break;
    case "red":
      return true;
      break;
    case "green":
      return true;
      break;
    default: //returns false because the user picked an unavailable color
      return false;
      break;
  }
}

var colorname = prompt("What color do you want?").trim();
var isAvailable = getColor(colorname);

if (isAvailable) console.log("Good news! That color is available");
else console.log("We are sorry, that color is not available");
