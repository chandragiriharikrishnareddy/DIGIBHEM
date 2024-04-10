let Value = '0';

function update() {
  document.getElementById('display').innerText = Value;
}

function Display(value1) {
  if (Value === '0') {
    Value = value1;
  } else {
    Value += value1;
  }
  update();
}

function Display9() {
  Value = '0';
  update();
}

function Result() {
  try {
    Value = eval(Value).toString();
    update();
  } catch (error) {
    Value = 'Error';
    update();
  }
}