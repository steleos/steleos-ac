function encriptarTexto(){
    var texto = document.getElementById("ingresarTexto").value;
    var textoEncriptado = "";

    for (var i=0; i<texto.length; i++ ){
        var caracter = texto.charAt(i);

        switch(caracter){

            case "a":
                textoEncriptado += "ai";
            break;

            case "e":
                textoEncriptado += "enter";
            break;

            case "i":
                textoEncriptado += "imes";
            break;

            case "o":
                textoEncriptado += "ober";
            break;

            case "u":
                textoEncriptado += "ufat";
            break;

            default:

            textoEncriptado += caracter;
            break;
        }
    }

    document.getElementById("textoResultado").innerHTML =  textoEncriptado;
}
function desencriptarTexto(){
    var texto = document.getElementById("ingresarTexto").value;
    var textoDesencriptado = "";

    for(var i=0; i<texto.length; i++){

        if(texto[i] == "a"){
            textoDesencriptado = textoDesencriptado + "a"
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoDesencriptado = textoDesencriptado + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoDesencriptado = textoDesencriptado + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoDesencriptado = textoDesencriptado + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoDesencriptado = textoDesencriptado + "u"
            i = i + 3;
        }
        else{
            textoDesencriptado = textoDesencriptado + texto[i];
        }
    }

    document.getElementById("textoResultado").innerHTML = textoDesencriptado;
}
function mostrarEncriptado(){
    encriptarTexto();
    ocultarContenido();
    mostrarContenido();
}
function mostrarDesencripotado(){
    desencriptarTexto();
    ocultarContenido();
    mostrarContenido();
}
function ocultarContenido(){
    document.getElementById("sinResultado").style.display = "none"
}
function mostrarContenido(){
    document.getElementById("resultadoOculto").style.display = "block"
}
function copiarResultado(){
    var copiado = document.getElementById("textoResultado");
    var input = document.createElement("input");
    input.setAttribute("value", copiado.textContent);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}
function ajustartamanio(){
    var input = document.getElementById("ingresarTexto");
    input.style.height = input.scrollHeight + "px";
}