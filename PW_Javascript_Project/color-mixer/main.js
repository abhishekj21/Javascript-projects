function mixColors(firstColor, secondColor) {
  switch (firstColor) {
    case "red":
      switch (secondColor) {
        case "blue":
          console.log("purple");
          break;
        case "yellow":
          console.log("orange");
          break;
      }
      break;
    case "blue":
      switch (secondColor) {
        case "red":
          console.log("purple");
          break;
        case "yellow":
          console.log("green");
          break;
      }
    case "yellow":
      switch (secondColor) {
        case "red":
          console.log("orange");
          break;
        case "blue":
          console.log("green");
          break;
      }
      break;
  }
}

mixColors("red", "blue");
