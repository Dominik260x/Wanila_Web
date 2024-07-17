function renderFireContainer() {
    const fireworkContainer = document.createElement('div');
    fireworkContainer.id = "firework-container";

    document.body.appendChild(fireworkContainer)

    return fireworkContainer;
}

    const fireimages = [
        'images/fireworks.png'
    ]
      
    
function renderfire(fireworkContainer) {
    const fireContainer = document.createElement('div');
    fireContainer.classList.add('fire-container')

    fireContainer.style.left = `${Math.random() * 100}%` 

    const img = document.createElement('img');
    img.src = fireimages[Math.floor(Math.random() * fireimages.length)];
    fireContainer.style.transform = `scale(${Math.random() * 1.2})`;

    fireContainer.appendChild(img)

    fireworkContainer.appendChild(fireContainer);

    setTimeout(renderfire, 500, fireworkContainer)
}

const fireworkContainer = renderFireContainer();
renderfire(fireworkContainer);

