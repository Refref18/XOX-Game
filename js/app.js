document.querySelector(".box").setAttribute("clk", "0");
let finishedGame = 0;

function put(boxIndex) {
  if (document.getElementById(boxIndex).clk == undefined && finishedGame == 0) {
    document.getElementById(boxIndex).innerHTML = "X";
    document.getElementById(boxIndex).clk = "NO";
    result();
    if (finishedGame == 0) {
      setTimeout(function () {
        compRandom();
      }, 100);
    }
  }
}

function compRandom() {
  let boxIndex = Math.ceil(Math.random() * 9);
  while (document.getElementById(`item-${boxIndex}`).innerHTML !== "") {
    boxIndex = Math.round(Math.random() * 9);
  }
  document.getElementById(`item-${boxIndex}`).innerHTML = "O";
  document.getElementById(`item-${boxIndex}`).clk = "NO";
  result();
}

function result() {
  if (
    document.getElementById("item-1").innerHTML !== "" &&
    document.getElementById("item-1").innerHTML == document.getElementById("item-2").innerHTML &&
    document.getElementById("item-2").innerHTML == document.getElementById("item-3").innerHTML
  ) {
    if (document.getElementById("item-1").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
  if (
    document.getElementById("item-4").innerHTML !== "" &&
    document.getElementById("item-4").innerHTML == document.getElementById("item-5").innerHTML &&
    document.getElementById("item-5").innerHTML == document.getElementById("item-6").innerHTML
  ) {
    if (document.getElementById("item-5").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
  if (
    document.getElementById("item-7").innerHTML !== "" &&
    document.getElementById("item-7").innerHTML == document.getElementById("item-8").innerHTML &&
    document.getElementById("item-8").innerHTML == document.getElementById("item-9").innerHTML
  ) {
    if (document.getElementById("item-9").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
  if (
    document.getElementById("item-1").innerHTML !== "" &&
    document.getElementById("item-1").innerHTML == document.getElementById("item-5").innerHTML &&
    document.getElementById("item-5").innerHTML == document.getElementById("item-9").innerHTML
  ) {
    if (document.getElementById("item-1").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
  if (
    document.getElementById("item-3").innerHTML !== "" &&
    document.getElementById("item-3").innerHTML == document.getElementById("item-5").innerHTML &&
    document.getElementById("item-3").innerHTML == document.getElementById("item-7").innerHTML
  ) {
    if (document.getElementById("item-1").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
  if (
    document.getElementById("item-1").innerHTML !== "" &&
    document.getElementById("item-1").innerHTML == document.getElementById("item-4").innerHTML &&
    document.getElementById("item-4").innerHTML == document.getElementById("item-7").innerHTML
  ) {
    if (document.getElementById("item-1").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
  if (
    document.getElementById("item-2").innerHTML !== "" &&
    document.getElementById("item-2").innerHTML == document.getElementById("item-5").innerHTML &&
    document.getElementById("item-5").innerHTML == document.getElementById("item-8").innerHTML
  ) {
    if (document.getElementById("item-2").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
  if (
    document.getElementById("item-3").innerHTML !== "" &&
    document.getElementById("item-3").innerHTML == document.getElementById("item-6").innerHTML &&
    document.getElementById("item-6").innerHTML == document.getElementById("item-9").innerHTML
  ) {
    if (document.getElementById("item-3").innerHTML == "O") {
      setTimeout(function () {
        alert("YOU LOST");
      }, 100);
    } else {
      setTimeout(function () {
        alert("YOU WON");
      }, 100);
    }
    finishedGame = 1;
  }
}
function restart() {
  var x = document.getElementsByClassName("box");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
    x[i].clk = undefined;
  }
  finishedGame = 0;
}
