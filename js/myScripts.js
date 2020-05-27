function navFunction() {
  var x = document.getElementById("mainTopNav");
  if (x.className === "nav") {
    x.className += " responsive";
  }
  else {
    x.className = "nav";
  }
}
