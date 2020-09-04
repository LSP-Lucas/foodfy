const admin_recipe = document.querySelectorAll("#show-recipe");
const add_ingredient = document.querySelector(".add-ingredient");
const add_preparation_mode = document.querySelector(".add-preparation-mode");


if (add_ingredient){

    add_ingredient.addEventListener("click", function () {

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
}

if (add_preparation_mode) {
    
    add_preparation_mode.addEventListener("click", function () {

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
}
