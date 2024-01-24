const autoTextElement = document.querySelector('.auto-text');

const descriptions = [
  'rats',
  'Fullstack Engineer',
  'D&D Enjoyer',
];

let outputText = '';
let currentIndex = 0;

const textAutomation = () => {
  const currentText = descriptions[currentIndex];
  const brokenText = currentText.split('');

  let intervalId = setInterval(() => {
    if (brokenText.length > 0) {
      outputText += brokenText.shift();
      autoTextElement.innerText = outputText;
      console.log(outputText);
    } else {
      clearInterval(intervalId);

      // Wait for a moment, then erase the text
      setTimeout(() => {
        eraseText();
      }, 1000); 
    }
  }, 200);
};

const eraseText = () => {
  let intervalId = setInterval(() => {
    if (outputText.length > 0) {
      outputText = outputText.slice(0, -1);
      autoTextElement.innerText = outputText;
      console.log(outputText);
    } else {
      clearInterval(intervalId);

      // Move to the next text in the array
      currentIndex = (currentIndex + 1) % descriptions.length;

      // Wait for a moment, then start typing again
      setTimeout(() => {
        textAutomation();
      }, 1000);
    }
  }, 50);
};

// Start the animation
textAutomation();

