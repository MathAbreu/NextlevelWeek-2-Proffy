//Procurar o botão
//Quando clicar no botão
//Executar uma ação

    //Duplicar os campos

    //Colocar na página
//

document.querySelector("#add-times")
.addEventListener('click', cloneField)

function cloneField(){
    //Que campo vou duplicar ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // Boolean
    
    //Limpar que campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field){
        //Pegar o Field atual e limpe o campo
        field.value = ""
    })

    //Colocar onde na página ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}