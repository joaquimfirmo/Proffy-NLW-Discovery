const newLocal = document.getElementById("remove");
newLocal.addEventListener('click', remove)


function remove(){

    let timeField = document.getElementById("schedule-items").children;

    if(timeField.length > 2){
        timeField[timeField.length - 1].remove()

    } else {
        //obtem o element com o select e os input time
        const fieldRemove = document.querySelector('.schedule-item')
        //obtem o primeiro select
        let fieldSelect = timeField[1].children[0];
        //colocar o select com seu inicial
        fieldSelect.children[1].selectedIndex = 0
        //obtem e limpa todos os input time
        const fields = fieldRemove.querySelectorAll('input')
        fields.forEach(function (field) {
  
           field.value = ""
        })

    }
   
   
}