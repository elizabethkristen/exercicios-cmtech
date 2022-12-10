valor = parseInt(window.prompt("Digite o valor da tabuada para ser impressa"));
   for(count=1; count<=10; count++){
   document.write(valor + " X " + count + " = " + (count*valor)+"<br>");
}