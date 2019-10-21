function readmoreBtn() {
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("readBtn");
  
    if (moreText.style.display === "inline") {
      btnText.innerHTML = "More";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "Less";
      moreText.style.display = "inline";
    }
  }


