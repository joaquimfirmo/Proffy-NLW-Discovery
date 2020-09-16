document.querySelector("#add-time")
.addEventListener('click', cloneField)


function cloneField() {


   let itDiaSemana = document.getElementById("schedule-items").children;
   //console.log(itDiaSemana.length)

   //captura sempre o  valor ultimo select existente e dos valores selecionados nos campos de horas
   let selectAtivo = itDiaSemana[itDiaSemana.length - 1].children[0];
   let timeFor = itDiaSemana[itDiaSemana.length - 1].children[1];
   let timeTo = itDiaSemana[itDiaSemana.length - 1].children[2];
   let timeDas = timeFor.children[1].value;
   let timeAte = timeTo.children[1].value;





   
   if (selectAtivo.children[1].selectedIndex != 0 && (timeDas != '' && timeAte != '')) {

      if (itDiaSemana.length == 2) {
         document.getElementById("remove").style.display = 'inline-block';
      }
      const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

      const fields = newFieldContainer.querySelectorAll('input')

      fields.forEach(function (field) {

         field.value = ""
      })
      document.querySelector('#schedule-items').appendChild(newFieldContainer).innerHTML;


   } else {

      alert("Selecione um dia na semana")

   }


}















     
  
 