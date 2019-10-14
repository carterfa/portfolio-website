function readmoreBtn() {
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

 function DropDown() {
    var x = document.getElementById("PortfolioNav");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("DropBtn").style.backgroundColor = "#006666";
    } else {
      x.style.display = "none";
      document.getElementById("DropBtn").style.backgroundColor = "#999999";
    }
  } 
