const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');

for(let recipe of recipes) {

    recipe.addEventListener('click', function() {
        
        const recipeId = recipe.getAttribute('id');
        const title = recipe.querySelector('h2').innerText;
        const author = recipe.querySelector('p').innerText;

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `../assets/${recipeId}.png`;

        modalOverlay.querySelector('h2').innerText = title;

        modalOverlay.querySelector('p').innerText = author

    });
}

document.querySelector('.close').addEventListener('click', function() {

    const fadeOut = modalOverlay.classList.contains('fadeOut');

    if(!fadeOut){
        modalOverlay.classList.add('fadeOut');
    }

    modalOverlay.classList.remove('active');

});

