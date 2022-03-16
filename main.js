function calcular() {

let n1 = parseFloat(document.getElementById("n1").value);
let n2 = parseFloat(document.getElementById("n2").value);
let n3 = parseFloat(document.getElementById("n3").value);
let n4 = parseFloat(document.getElementById("n4").value);

let notaFinal = (n1 + n2 + n3 + n4) / 4;
let notaFixada = notaFinal.toFixed(1);


if (notaFinal >=7) {
    document.getElementById("result").innerHTML = "Parabéns, você foi aprovado! Sua média é: " + notaFixada;   
  } else {
    document.getElementById("result").innerHTML = "Você foi reprovado! Sua média é: " + notaFixada;
  }
 }
document.getElementById("calcular").onclick = calcular;