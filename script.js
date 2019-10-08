function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");
  
    if (moreText.style.display === "inline") {
      btnText.innerHTML = "More";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "Less";
      moreText.style.display = "inline";
    }
  }