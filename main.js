function openWindow(divID) {
    document.getElementById(divID).style.display = "block";
  }
  
function closeWindow(divID) {
    document.getElementById(divID).style.display = "none";
}
  
window.onclick = function(event) {
    var modal = document.getElementById(divID);
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*****************/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}