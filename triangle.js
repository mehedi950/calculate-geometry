function calculateTriangle() {
  let base = getValueById("triangleBase");
  let height = getValueById("triangleHeight");
  let area = 0.5 * base * height;
  setValueById("triangleAreaShow", area);
  //   empty input field
  emptyInputField("triangleBase");
  emptyInputField("triangleHeight");
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
