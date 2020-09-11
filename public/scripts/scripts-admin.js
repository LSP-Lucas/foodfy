document.querySelector(".add-preparation-mode").addEventListener("click", add_preparation_mode);
document.querySelector(".add-ingredient").addEventListener("click", add_ingredient);

function add_ingredient() {

    const ingredients = document.querySelector("#ingredients");
        const fieldContainer = document.querySelectorAll(".ingredient input");
    
        // Realiza um clone do último ingrediente adicionado
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    
        // Não adiciona um novo input se o último tem um valor vazio
        if (newField.value == "") return false;
    
        // Deixa o valor do input vazio
        newField.value = "";
        ingredients.appendChild(newField);
}


function add_preparation_mode() {

        const preparation = document.querySelector("#preparation");
        const fieldContainer = document.querySelectorAll(".preparation-mode input");
    
        // Realiza um clone do último ingrediente adicionado
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    
        // Não adiciona um novo input se o último tem um valor vazio
        if (newField.value == "") return false;
    
        // Deixa o valor do input vazio
        newField.value = "";
        preparation.appendChild(newField);
        
}
