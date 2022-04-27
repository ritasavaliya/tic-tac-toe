let currentPlayer = "";
let statusDisplay = document.querySelector(".player-status");
let currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
let lastGameWinner = "";
let boxValue = document.querySelectorAll(".box");
const possibleWinning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function selectPlayer(name) {
  if (currentPlayer === "") {
    currentPlayer = name;
    // document.getElementById("p1").disabled = true;
    document.getElementsByClassName("user-botton").disabled = true;
  }
  statusDisplay.innerHTML = currentPlayerTurn();
}
let boxnumber = [];
boxValue.forEach(function (box, index) {
  boxnumber[index] = box;
});

function boxClickedFunction(event) {
  if (currentPlayer === "") {
    document.getElementsByClassName("box").disabled = true;
    statusDisplay.innerHTML = "please select player&#129337;&#127995";
    return;
  } else {
    document.getElementsByClassName("box").disabled = false;
  }
  if (event.target.innerHTML === "") {
    event.target.innerHTML = currentPlayer;
    statusDisplay.innerHTML = currentPlayerTurn();
    event.target.style.pointerEvents = "none";
  }
  possibleWinning.forEach((pattern) => {
    if (
      boxnumber[pattern[0]].innerHTML === boxnumber[pattern[1]].innerHTML &&
      boxnumber[pattern[1]].innerHTML === boxnumber[pattern[2]].innerHTML &&
      boxnumber[pattern[0]].innerHTML === currentPlayer
    ) {
      statusDisplay.innerHTML = `player ${currentPlayer} Win!&#128526`;
      disableBox();
      lastGameWinner = currentPlayer;
    }
  });
  if (statusDisplay.innerHTML.includes("Win")) {
    return;
  }
  statusDisplay.innerHTML = `It's ${currentPlayer} turn`;
  if (
    boxnumber[0].innerHTML !== "" &&
    boxnumber[1].innerHTML !== "" &&
    boxnumber[2].innerHTML !== "" &&
    boxnumber[3].innerHTML !== "" &&
    boxnumber[4].innerHTML !== "" &&
    boxnumber[5].innerHTML !== "" &&
    boxnumber[6].innerHTML !== "" &&
    boxnumber[7].innerHTML !== "" &&
    boxnumber[8].innerHTML !== ""
  ) {
    window.setTimeout(function () {
      pointerEventFunction();
      statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    }, 2000);
    statusDisplay.innerHTML = "It's a Draw&#128520";
    return;
  }
  if (currentPlayer === "X") {
    currentPlayer = "O";
    statusDisplay.innerHTML = currentPlayerTurn();
  } else {
    currentPlayer = "X";
    statusDisplay.innerHTML = currentPlayerTurn();
  }
}

function disableBox() {
  let playerWin = statusDisplay.innerHTML;
  if (playerWin !== "") {
    boxValue.forEach((box) => {
      box.style.pointerEvents = "none";
    });
  }
}

function pointerEventFunction() {
  boxValue.forEach((box) => {
    box.innerHTML = "";
    box.style.pointerEvents = "auto";
  });
}

function resetFunction() {
  pointerEventFunction();
  statusDisplay.innerHTML = "";
  // document.getElementById("p1").disabled = false;
  document.getElementsByClassName("user-botton").disabled = false;
  if (lastGameWinner === "X" || lastGameWinner === "O") {
    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
  } else {
    currentPlayer = "";
    statusDisplay.innerHTML = "please select player&#129337;&#127995";
  }
}
