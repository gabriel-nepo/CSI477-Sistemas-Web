function validar(campo,alerta,label) {

  let n = campo.value;
  if ( n.length == 0 ||  isNaN( parseFloat(n) ) ) {
    // Erro
    document.getElementById(alerta).style.display = "block";
    campo.value = "";
    campo.focus();
    document.dados.resultado.value = '';
    campo.classList.add("is-invalid");
    document.getElementById(label).classList.add("text-danger");
    return false;

  }

  // Correto
  document.getElementById(alerta).style.display = "none";
  document.getElementById(label).classList.remove("text-danger");
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");

  return true;


}



function calcular() {

  // for( let p in document.dados.valor1 ) {
  //   console.log(p);
  // }

  let n1 = document.dados.valor1;
  let n2 = document.dados.valor2;
  

  if ( validar(n1,"alerta1","label1") && validar(n2,"alerta2","label2") ) {
    let res = parseFloat(n1.value) + parseFloat(n2.value);
    document.dados.resultado.value = res;
  }












}
