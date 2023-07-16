function checkEligibleTrack(faculty) {
  switch (faculty) {
    case "FCI":
      document.write("You're eligible to Programing tracks");
      break;
    case "Engineering":
      document.write("You're eligible to Network and Embedded tracks");
      break;
    case "Commerce":
      document.write("You're eligible to ERP and Social media tracks");
      break;
    default:
      document.write("You're eligible to SW fundamentals track");
      break;
  }
}

const faculty = prompt("Enter Your Faculty : ");
checkEligibleTrack(faculty);
