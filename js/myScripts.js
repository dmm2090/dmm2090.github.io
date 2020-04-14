function navFunction() {
  var x = document.getElementById("mainTopNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  }
  else {
    x.className = "topNav";
  }
}
