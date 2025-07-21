function timeConversion(s) {
  // Write your code here
  let [hh, mm, ssPP] = s.split(":");
  let pos = ssPP.slice(2);
  let sec = ssPP.slice(0, 2);

  if (pos == "PM" && hh !== "12") {
    hh = parseInt(hh);
    hh += 12;
  } else if (pos == "AM" && hh === "12") {
    hh = "00";
  }
  console.log(hh + ":" + mm + ":" + sec);
}

timeConversion("07:05:45PM");
