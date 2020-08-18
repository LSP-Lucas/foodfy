const recipes = document.querySelectorAll('.recipe');
const admin__recipe = document.querySelectorAll('#show-recipe');
const list__ingredients = document.querySelector('.list-ingredients');
const list__preparation = document.querySelector('.list-preparation');
const description = document.querySelector('.description');

// Admin

for (let i = 0; i < admin__recipe.length; i++) {

    admin__recipe[i].addEventListener('click', function () {

        window.location.href = `/admin/recipes/${i + 1}`;
    });
}



// User

for (let i = 0; i < recipes.length; i++) {

    recipes[i].addEventListener('click', function () {

        window.location.href = `/receitas/${i + 1}`;
    });
}

document.querySelector('#btn-ingredients').addEventListener("click", function () {

    if (list__ingredients.classList.contains('active')) {

        list__ingredients.classList.remove('active');
        document.getElementById('btn-ingredients').innerHTML = "ESCONDER";

    } else {

        list__ingredients.classList.add('active');
        document.getElementById('btn-ingredients').innerHTML = "MOSTRAR";
    }
});

document.querySelector('#btn-preparation').addEventListener("click", function () {

    if (list__preparation.classList.contains('active')) {

        list__preparation.classList.remove('active');
        document.getElementById('btn-preparation').innerHTML = "ESCONDER";

    } else {

        list__preparation.classList.add('active');
        document.getElementById('btn-preparation').innerHTML = "MOSTRAR";
    }
});

document.querySelector('#btn-information').addEventListener("click", function () {

    if (description.classList.contains('active')) {

        description.classList.remove('active');
        document.getElementById('btn-information').innerHTML = "ESCONDER";

    } else {
        
        description.classList.add('active');
        document.getElementById('btn-information').innerHTML = "MOSTRAR";
    }
});


