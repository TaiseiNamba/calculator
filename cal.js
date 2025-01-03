let display = document.getElementById('display');

// ボタンを押したとき
function press(value) {
  display.value += value;
}

// 計算を実行
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'エラー';
  }
}

// ディスプレイをクリア
function clearDisplay() {
  display.value = '';
}
