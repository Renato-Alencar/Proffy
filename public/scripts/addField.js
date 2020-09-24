//Procurar o botao
document.querySelector('#add-time')
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    //Duplicar os campos
            //Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Pegar os campos
            //Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //Para cada campos, limpar

    fields.forEach(function(field){
        //Pegar o campo do momento e limpe-o
        field.value =""
    })

    //Colocar na página
        //Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
