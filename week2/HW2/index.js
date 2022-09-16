const displayTitle = document.querySelector(".js-title");
const displayResult = document.getElementById("js-result");
const max = document.getElementById("js-range");
const guessForm = document.getElementById("js-guess");
const guess = document.getElementById("guess-number");

// 타이틀에 maxNumber 표시
const handleTitle = (e) => {
  const displaySpan = displayTitle.querySelector("span");
  displaySpan.innerHTML = `${max.value}`;
};
max.addEventListener("input", handleTitle);

// // guess-number 입력 받고 같은지 비교
const handleResult = (e) => {
  e.preventDefault(); // 창이 이동하는 것을 막아줌
  const guessNumber = guess.value;
  const randomNumber = Math.floor(
    Math.random() * (parseInt(max.value) + parseInt(1)) //0부터 max값 사이의 난수 생성
  );
  if (guessNumber == randomNumber) {
    const displayTrue = displayResult.querySelector("span");
    displayTrue.innerHTML = `You choose: ${guessNumber}, the machine choose: ${randomNumber} <br/>
    <b>You Win!</b>`;
  } else if (guessNumber != randomNumber) {
    const displayFalse = displayResult.querySelector("span");
    displayFalse.innerHTML = `You choose: ${guessNumber}, the machine choose: ${randomNumber} <br>
    <b>You Lost!</b>`;
  }
};
guessForm.addEventListener("submit", handleResult);
