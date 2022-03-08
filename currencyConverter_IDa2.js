function ConverterEUR(){
    var valorElemento = document.getElementById("valor").value // retorna o valor em string
    var dolarValue = parseFloat(valorElemento).toFixed(2)
    var euroValue = (dolarValue * 0.92).toFixed(2)

    
    alert("You typed U$" + dolarValue +". \n \n This represents €" + euroValue +".")
}

function ConverterBRL(){
    var valorElemento = document.getElementById("valor").value
    var dolarValue = parseFloat(valorElemento).toFixed(2)
    var realValue = (dolarValue * 5.06).toFixed(2)

    alert("You typed U$" + dolarValue +". \n \n This represents R$" + realValue +".")
}

function ConverterCNY(){
    var valorElemento = document.getElementById("valor").value
    var dolarValue = parseFloat(valorElemento).toFixed(2)
    var yuanValue = (dolarValue * 6.33).toFixed(2)

    
    alert("You typed U$" + dolarValue +". \n \n This represents ¥" + yuanValue +".")
}


// alert("You typed U$" + valorElemento+ ". \n \n This represents ")

// var euroValue = (valorElemento * 0.92).toFixed(2)

//   var valorElemento1 = valorElemento.toFixed(2)