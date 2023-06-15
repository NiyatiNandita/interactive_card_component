var totalTip;
for (var i = 0; i < document.querySelectorAll(".tips").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    this;
    totalTip = this.innerHTML;
    this.style.backgroundColor = "yellow";
    console.log(totalTip);
  });
}
var ratingDone;

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    ratingDone = this.innerHTML;
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
    this.style.color = "white";
    // alert("ratingDone");
  });
}

document.getElementById("submit").addEventListener("click", function () {
  document.getElementById("center-1").style.display = "none";
  document.getElementById("center-2").style.display = "flex";
  document.getElementById("center-2").style.flexDirection = "column";
  document.getElementById("new").innerHTML =
    "You selected " + ratingDone + " out of 5";
});
