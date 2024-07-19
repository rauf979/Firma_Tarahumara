const animatedText = document.getElementById('animated-text');
const inputText = document.getElementById('input-text');

inputText.addEventListener('input', () => {
  const inputString = inputText.value;
  animatedText.textContent = inputString;

  const containerWidth = animatedText.parentElement.offsetWidth;
  const textWidth = animatedText.offsetWidth;
  const animationDuration = 2; // seconds

  const fontSize = Math.min(24, 24 * (textWidth / containerWidth)); // Max font size: 24px
  animatedText.style.fontSize = `${fontSize}px`;

  animatedText.style.animation = `typing ${animationDuration}s steps(${inputString.length}), resize-text ${animationDuration}s`;
  setTimeout(() => {
    animatedText.style.animation = '';
  }, animationDuration * 1000);
});
