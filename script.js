/*
Matthew 7:7 Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:

8 For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.
*/
const testPhraseInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checker = (string) => {
  if(string === "") {
    alert("Please input a value");
    return;
  }
  

  let invalidInput = /[^a-zA-Z0-9]/g;
  let testablePhrase = string.toLowerCase()
                             .replace(invalidInput, "");
  console.log(testablePhrase)
  let reversedPhrase = string.split('')
                             .reverse()
                             .join('')
                             .replace(invalidInput, "")
                             .toLowerCase();
  
  let results = `${string} ${testablePhrase === reversedPhrase? "is" : "is not"} a palindrome`;

  result.style.display = "block";
  result.innerHTML = results;
  

}

checkBtn.addEventListener('click', function() {
  checker(testPhraseInput.value);
})

testPhraseInput.addEventListener('keydown', function(e) {
  if(e.key ==="Enter") {
    checker(testPhraseInput.value);
  }
})