document.getElementById('applyButton').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColorInput').value;
    const fontColor = document.getElementById('fontColorInput').value;
    const fontSize = document.getElementById('fontSizeInput').value;
    const fontWeight = document.getElementById('fontWeightInput').value;
    const padding = document.getElementById('paddingInput').value;
    const borderRadius = document.getElementById('borderRadiusInput').value;
  
    const button = document.getElementById('customButton');
  
    button.style.backgroundColor = bgColor;
    button.style.color = fontColor;
    button.style.fontSize = fontSize + 'px';
    button.style.fontWeight = fontWeight;
    button.style.padding = padding + 'px';
    button.style.borderRadius = borderRadius + 'px';
  });