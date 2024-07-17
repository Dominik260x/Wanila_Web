function renderSnowContainer() {
    const snowContainer = document.createElement('div');
    snowContainer.id = "snow-container";

    document.body.appendChild(snowContainer)

    return snowContainer;
}

    const flakeimages = [
        'images/flake.png','images/flake2.png','images/flake3.png'
    ]

    function addAudioElement(snowContainer) {
        const audioElement = document.createElement('audio');
        audioElement.src = 'sounds/jinglebells.mp3';
        audioElement.play();
      
        snowContainer.appendChild(audioElement);
      }
      
    
function renderFlake(snowContainer) {
    const flakeContainer = document.createElement('div');
    flakeContainer.classList.add('flake-container')

    flakeContainer.style.left = `${Math.random() * 100}%` 

    const img = document.createElement('img');
    img.src = flakeimages[Math.floor(Math.random() * flakeimages.length)];
    flakeContainer.style.transform = `scale(${Math.random()})`;

    flakeContainer.appendChild(img)

    snowContainer.appendChild(flakeContainer);

    setTimeout(renderFlake, 500, snowContainer)
}

const snowContainer = renderSnowContainer();
renderFlake(snowContainer);
addAudioElement(snowContainer);

