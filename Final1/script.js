
const correctPasscodes = ["QXJV", "ZWLP", "GRKC", "HTFM", "VXND", "BYZH", "DJPQ", "MWFK", "CTLS", "KRQX"]; 

function checkPasscode() {
  const userPasscode = document.getElementById("passcode").value;
  const resultDiv = document.getElementById("result");

  if (correctPasscodes.includes(userPasscode)) {
    resultDiv.innerHTML = "Correct! Redirecting to the next page...";
    resultDiv.style.color = "#90EE90";
    resultDiv.style.fontWeight = "900";
    resultDiv.style.fontSize = "24px";


    const time = Date.now();

    setTimeout(() => {
      window.location.href = `room.html?time=${time}`;
    }, 2000);
  } else {
    resultDiv.innerHTML = "Incorrect passcode, try again!";
    resultDiv.style.color = "#FF9999";
    resultDiv.style.fontWeight = "900";
    resultDiv.style.fontSize = "24px";
  }
}
