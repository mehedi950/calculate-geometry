function calculateTriangle() {
  let base = getValueById("triangleBase");
  let height = getValueById("triangleHeight");
  if (typeof base === "number" && typeof height === "number") {
    let area = 0.5 * base * height;
    setValueById("triangleAreaShow", area);
    //   empty input field
    emptyInputField("triangleBase");
    emptyInputField("triangleHeight");
  } else {
    setValueById("triangleError", "write a number for result");
  }
}

function getValueById(inputId) {
  let inputValue = parseFloat(document.getElementById(inputId).value);
  return inputValue;
}

function setValueById(placeId, value) {
  document.getElementById(placeId).innerText = value;
}

function emptyInputField(inputFieldId) {
  document.getElementById(inputFieldId).value = "";
}
