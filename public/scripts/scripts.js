const recipes = document.querySelectorAll('.recipe');
const list__ingredients = document.querySelector('.list-ingredients');
const list__preparation = document.querySelector('.list-preparation');
const description = document.querySelector('.description');
const admin__recipe = document.querySelectorAll('#show-recipe');

const btn_edit = document.querySelector('#btn-edit');

// Admin

for (let i = 0; i < admin__recipe.length; i++) {

    admin__recipe[i].addEventListener('click', function () {

        window.location.href = `/admin/recipes/${i + 1}`;

    });
}

if(btn_edit) {

    btn_edit.addEventListener("click", function() {

        const url = window.location.href.split("/");
    
        window.location.href = `/admin/recipes/${url[url.length - 1]}/edit`;
    
    });

}

document.querySelector(".add-ingredient").addEventListener("click", function () {

    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
    
});

document.querySelector(".add-preparation-mode").addEventListener("click", function () {

    const preparation = document.querySelector("#preparation");
    const fieldContainer = document.querySelectorAll(".preparation-mode");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparation.appendChild(newField);
    
});


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



  


