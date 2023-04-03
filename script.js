
let quantidadeProdutos = 0;
let prato = "";
let bebidas = "";
let sobremesa = "";
let valorPrato = 0;
let valorBebidas = 0;
let valorSobremesa = 0;
 let vector = 0



function escolherPrato(seletor){
    if(seletor === document.getElementById("frango")){
        prato = "Frango Yin Yang";
        valorPrato = 33.90;
    }else if (seletor === document.getElementById("Lasanha")){
        prato = "Lasanha";
        valorPrato = 26.90;
}else {prato = "Salmao"; valorPrato = 20.90}
    console.log(prato)
    console.log(valorPrato)
}


function escolherBebida(seletor){
    if(seletor === document.getElementById("coca_lata")){
        bebidas = "coca_lata";
        valorBebidas = 5.90;
    }else if (seletor === document.getElementById("fanta_lata")){
        bebidas = "fanta_lata";
        valorBebidas = 4.90;
}else {bebidas = "soda_lata"; valorBebidas = 3.90}
    console.log(bebidas)
    console.log(valorBebidas)
}


function escolherSobremesa(seletor){
    if(seletor === document.getElementById("Pudim")){
        sobremesa = "Pudim";
        valorSobremesa = 11.90;
    }else if (seletor === document.getElementById("Bolo")){
        sobremesa = "Bolo";
        valorSobremesa = 22.90;
}else {sobremesa = "Torta"; valorSobremesa = 14.90}
    console.log(sobremesa)
    console.log(valorSobremesa)
}


function selecionarComidas(seletor){
    const removerClasse = document.querySelector('.comidas_selecionadas')
   
    
    if (removerClasse !== null){
        removerClasse.classList.remove("comidas_selecionadas")
        quantidadeProdutos --;
    }
    if( vector === 1){
        document.querySelector('.vector').classList.remove("ativar_vector")
        console.log(document.querySelector('.vector'))
    }
    
    
    document.querySelector('.vector').classList.add("ativar_vector")
    vector = 1
    seletor.classList.add("comidas_selecionadas");
    quantidadeProdutos ++;
    
}

function selecionarBebidas(seletor){
    const removerClasse = document.querySelector('.bebidas_selecionadas')
    if (removerClasse !== null){
        removerClasse.classList.remove("bebidas_selecionadas")
        quantidadeProdutos --;
    }
    
    seletor.classList.add("bebidas_selecionadas");
    quantidadeProdutos ++;
}


function selecionarSobremesa(seletor){
    const removerClasse = document.querySelector('.sobremesas_selecionadas')
    if (removerClasse !== null){
        removerClasse.classList.remove("sobremesas_selecionadas")
        quantidadeProdutos --;
    }
    
    seletor.classList.add("sobremesas_selecionadas");
    quantidadeProdutos ++;
    if(quantidadeProdutos === 3){
        const botaoAtivado = document.querySelector('.Fazer_pedido');
        botaoAtivado.innerHTML = 'Fechar Pedido';
        botaoAtivado.classList.add("botao_ativado");
        habilitarBotao(botaoAtivado)
    }
}

function habilitarBotao(botao){
    botao.disabled = false;
}


function menssagemWapp (){
    
    let valorTotal = valorPrato + valorBebidas + valorSobremesa;
    let total = valorTotal.toFixed(2)
    let menssagem; 
    menssagem =  
    "Olá, gostaria de fazer o pedido:" + 
    "- Prato: " + prato + 
    
    "- Bebida: " + bebidas  + 
    
    "- Sobremesa: " + sobremesa  + 
    
    "- Total:  R$ " + total;
    window.open("https://wa.me/+5588999999999?text=" + menssagem)
}

/* */