const recipes = document.querySelectorAll('.recipe');

for(let i = 0; i < recipes.length; i++) {

    recipes[i].addEventListener('click', function() {
        
        window.location.href = `/receitas/${i+1}`;

    });
}



// document.querySelector('.close').addEventListener('click', function() {

//     const fadeOut = modalOverlay.classList.contains('fadeOut');

//     if(!fadeOut){
//         modalOverlay.classList.add('fadeOut');
//     }

//     modalOverlay.classList.remove('active');

// });

