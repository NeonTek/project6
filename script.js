const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const palindromeChecker = (input) => {
  //check valid input
  if (input === '') {
    alert('Please input a value');
    return;
  }

  result.replaceChildren()
  //initialize input string

  const cleanStr = input.replace(/[^A-Z0-9a-z]/gi, '').toLowerCase();

  //palindrome check

  const resultMsg =`<strong>${input}</strong> ${
    cleanStr === [...cleanStr].reverse().join('') ? 'is' : 'is not'} a palindrome`

  //results

  const rTag = document.createElement('p');
  rTag.innerHTML = resultMsg;
  result.appendChild(rTag);
  result.classList.remove('hidden');
};

checkButton.addEventListener("click", () => {
  palindromeChecker(textInput.value);
  textInput = "";
});

textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    palindromeChecker(textInput.value);
    textInput.value = '';
  }
});
