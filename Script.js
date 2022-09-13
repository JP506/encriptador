var btn = document.querySelector("#btnencriptar");
btn.addEventListener("click", encriptar);

var btnd = document.querySelector("#btndesencriptar");
btnd.addEventListener("click", desencriptar);

var btnc = document.querySelector("#btncopiar");
btnc.addEventListener("click", copiar);

function encriptar(){
    var frase = document.querySelector("#textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");  
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");  
    document.querySelector("#textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("btncopiar").style.display = "block";
}

function desencriptar(){
    var frase2 = document.querySelector("#textoEncriptado").value.toLowerCase();
    var textoDesncriptado = frase2.replace(/enter/img, "e");
    var textoDesncriptado = textoDesncriptado.replace(/imes/img, "i");
    var textoDesncriptado = textoDesncriptado.replace(/ai/img, "a");
    var textoDesncriptado = textoDesncriptado.replace(/ober/img, "o");  
    var textoDesncriptado = textoDesncriptado.replace(/ufat/img, "u");  
    document.querySelector("#textoDesencriptado").innerHTML = textoDesncriptado;
    console.log(textoEncriptado)
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
