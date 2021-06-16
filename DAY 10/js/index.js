function myFunction() {
    var x = document.getElementById("nav-tabs");
    if (x.classList.length === 4) {
      x.className += " responsive";
    } else {
      x.classList.remove("responsive");
    }
  }