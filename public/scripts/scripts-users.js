const recipes = document.querySelectorAll(".recipe");
const list__ingredients = document.querySelector(".list-ingredients");
const list__preparation = document.querySelector(".list-preparation");
const description = document.querySelector(".description");
const btn_igredients = document.querySelector("#btn-ingredients");
const btn_preparation = document.querySelector("#btn-preparation");
const btn_information = document.querySelector("#btn-information");


for (let i = 0; i < recipes.length; i++) {

    recipes[i].addEventListener("click", function () {

        window.location.href = `/receitas/${i + 1}`;
    });
}

if (btn_igredients) {

    btn_igredients.addEventListener("click", function () {

        if (list__ingredients.classList.contains('active')) {
    
            list__ingredients.classList.remove('active');
            document.getElementById('btn-ingredients').innerHTML = "ESCONDER";
    
        } else {
    
            list__ingredients.classList.add('active');
            document.getElementById('btn-ingredients').innerHTML = "MOSTRAR";
        }
    });
}

if (btn_preparation) {

    btn_preparation.addEventListener("click", function () {

        if (list__preparation.classList.contains('active')) {
    
            list__preparation.classList.remove('active');
            document.getElementById('btn-preparation').innerHTML = "ESCONDER";
    
        } else {
    
            list__preparation.classList.add('active');
            document.getElementById('btn-preparation').innerHTML = "MOSTRAR";
        }
    });
}

if (btn_information) {

    btn_information.addEventListener("click", function () {

        if (description.classList.contains('active')) {
    
            description.classList.remove('active');
            document.getElementById('btn-information').innerHTML = "ESCONDER";
    
        } else {
            
            description.classList.add('active');
            document.getElementById('btn-information').innerHTML = "MOSTRAR";
        }
    });
}





  


