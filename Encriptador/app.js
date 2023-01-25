
function encriptar(){
  var texto= document.getElementById("texto-encriptar").value.toLowerCase();
  var txtCifrado = texto.replace(/e/igm,"enter");
  var txtCifrado = txtCifrado.replace(/o/igm,"ober");
  var txtCifrado = txtCifrado.replace(/i/igm,"imes");
  var txtCifrado = txtCifrado.replace(/a/igm,"ai");
  var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

  document.getElementById("muneco").style.display="none";
  document.getElementById("caja-texto-debajo-muneco").style.display="none";
  document.getElementById("caja-texto-resultado").innerHTML=txtCifrado;
  document.getElementById("caja-texto-resultado").style.display="show";
  document.getElementById("caja-texto-resultado").style.display="inherit";
  document.getElementById("boton-copiar").style.display="show";
  document.getElementById("boton-copiar").style.display="inherit"; 
}
function desencriptar(){
  var texto= document.getElementById("texto-encriptar").value.toLowerCase();
  var txtCifrado = texto.replace(/enter/igm,"e");
  var txtCifrado = txtCifrado.replace(/ober/igm,"o");
  var txtCifrado = txtCifrado.replace(/imes/igm,"i");
  var txtCifrado = txtCifrado.replace(/ai/igm,"a");
  var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

  document.getElementById("muneco").style.display="none";
  document.getElementById("caja-texto-debajo-muneco").style.display="none";
  document.getElementById("caja-texto-resultado").innerHTML=txtCifrado;
  document.getElementById("caja-texto-resultado").style.display="show";
  document.getElementById("caja-texto-resultado").style.display="inherit";
  document.getElementById("boton-copiar").style.display="show";
  document.getElementById("boton-copiar").style.display="inherit"; 
}

function copy(){
  var contenido = document.querySelector("#caja-texto-resultado");
  //contenido.select();
  document.execCommand("copy");
  alert("Se copio el mensaje");
}
