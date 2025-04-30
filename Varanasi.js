const aboutButton = document.getElementById('aboutButton');
const timeToVisitButton = document.getElementById('timeToVisitButton');
const attractionsButton = document.getElementById('attractionsButton');

const aboutTab = document.getElementById('aboutTab');
const timeToVisitTab = document.getElementById('timeToVisitTab');
const attractionsTab = document.getElementById('attractionsTab');

aboutButton.addEventListener('click', () => {
  aboutTab.style.display = 'block';
  timeToVisitTab.style.display = 'none';
  attractionsTab.style.display = 'none';
});

timeToVisitButton.addEventListener('click', () => {
  aboutTab.style.display = 'none';
  timeToVisitTab.style.display = 'block';
  attractionsTab.style.display = 'none';
});

attractionsButton.addEventListener('click', () => {
  aboutTab.style.display = 'none';
  timeToVisitTab.style.display = 'none';
  attractionsTab.style.display = 'block';
});