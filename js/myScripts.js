function navFunction() {
  var x = document.getElementById("mainTopNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  }
  else {
    x.className = "topNav";
  }
}


//When the user scolls the page, execute stickyFunction
//window.onscroll = function() {stickyFunction()};

//Get the topNav
//var topNav = document.getElementById("topNav");

//Get the offset position of topNav
//var sticky = topNav.offsetTop;

//Add the sticky class to the topNav when you reach its scroll position.
//Remove "sticky" when you leave the scroll position
//function stickyFunction() {
  //if (window.pageYOffset >= sticky) {
    //topNav.classList.add("sticky")
  //}
  //else {
    //topNav.classList.remove("sticky");
  //}
//}
