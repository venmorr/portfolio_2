const autoTextElement = document.querySelector('.auto-text');
const slideIn = document.querySelector('.slide-in')

window.addEventListener('scroll', function() {
  navAnimation()
})



const descriptions = [
  'Software Engineer',
  'Fullstack Developer',
  'Creative Designer',
  'Problem Solver',
  'Web Wizard',
  'Frontend Ninja',
  'Behavioral Analyst',
  'D&D Enjoyer',
];

let outputText = ''
let currentIndex = 0

const textAutomation = () => {
  const currentText = descriptions[currentIndex]
  const brokenText = currentText.split('')

  let intervalId = setInterval(() => {
    if (brokenText.length > 0) {
      outputText += brokenText.shift()
      autoTextElement.innerText = outputText
    } else {
      clearInterval(intervalId)

      // Wait for a moment, then erase the text
      setTimeout(() => {
        eraseText()
      }, 1000) 
    }
  }, 150)
}

const eraseText = () => {
  let intervalId = setInterval(() => {
    if (outputText.length > 0) {
      outputText = outputText.slice(0, -1)
      autoTextElement.innerText = outputText
      
    } else {
      clearInterval(intervalId)

      // Move to the next text in the array
      currentIndex = (currentIndex + 1) % descriptions.length

      // Wait for a moment, then start typing again
      setTimeout(() => {
        textAutomation()
      }, 500)
    }
  }, 50)
}

// Start the animation
textAutomation()

const navAnimation = () => {
  console.log(document.documentElement.scrollTop) 
  if (document.documentElement.scrollTop > 400) {
    slideIn.style.top="-10px"
  } else {
    slideIn.style.top="-190px"
  }
}

navAnimation()