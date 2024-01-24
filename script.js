// Função para encriptar o texto usando a cifra de César com deslocamento automático
function cifraCesarAutomatica(texto) {
    // Deslocamento automático baseado no comprimento do texto
    var deslocamento = texto.length % 26;

    return texto
        .split('')
        .map(function(caractere) {
            if (caractere.match(/[a-z]/i)) {
                var codigo = caractere.charCodeAt(0);

                // Mantém a caixa (maiúscula ou minúscula) e aplica o deslocamento
                var novoCodigo = (codigo - 65 + deslocamento) % 26 + 65;

                return String.fromCharCode(novoCodigo);
            } else {
                return caractere;
            }
        })
        .join('');
}

// Função para descriptografar o texto cifrado usando a cifra de César com deslocamento automático
// function decifraCesarAutomatica(texto) {
//     // Deslocamento automático baseado no comprimento do texto
//     var deslocamento = texto.length % 26;

//     return texto
//         .split('')
//         .map(function(caractere) {
//             if (caractere.match(/[a-z]/i)) {
//                 var codigo = caractere.charCodeAt(0);

//                 // Mantém a caixa (maiúscula ou minúscula) e aplica o deslocamento inverso
//                 var novoCodigo = (codigo - 65 - deslocamento + 26) % 26 + 65;

//                 return String.fromCharCode(novoCodigo);
//             } else {
//                 return caractere;
//             }
//         })
//         .join('');
// }


// Exemplo de uso
var textoOriginal = prompt("Digite o texto a ser encriptado:");

var textoEncriptado = cifraCesarAutomatica(textoOriginal);
console.log("Texto encriptado:", textoEncriptado, "\nOriginal: ", textoOriginal);

// var textoDescriptado = decifraCesarAutomatica(textoEncriptado);
// console.log("Texto descriptado:", textoDescriptado);
