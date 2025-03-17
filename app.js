let amigos = [];
exibirListaAmigos();


// Tarefas específicas:
function adicionarAmigo(){
    let textoInseridoPeloUsuario = document.getElementById("amigo").value;// Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector
    if(textoInseridoPeloUsuario == false){ // garantindo que o campo não esteja vazio.
        alert("Por favor, insira um nome.");
        for(let x = 0; x<amigos.length; x++){
            console.log("posicao: "+x+" valor: "+amigos[x]);
        }
    }else{
        amigos.push(textoInseridoPeloUsuario);//armazena os nomes dos amigos usando o método .push().
        limparCampo();// Limpar o campo de entrada
        exibirListaAmigos();
    }
    
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Por favor, insira um nome.");
    }else{
        let posicaoAmigoSorteado = Math.floor(Math.random() * amigos.length);//Sorteia um amigo
        let lista = document.getElementById("resultado"); //pega o elemento de lista ul no html
        lista.innerHTML = ""; //Remove todos os elementos de lista li
        const li = document.createElement('li');// cria um elemento de lista li
        li.textContent = amigos[posicaoAmigoSorteado]; //adiciona um valor ao li
        lista.appendChild(li); //coloca o li dentro do ul no html
    }
}

function limparCampo() {
    textoInseridoPeloUsuario = document.querySelector('input');
    textoInseridoPeloUsuario.value = '';
}

function exibirListaAmigos(){
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";//Removes o(s) li(s) criados anteriormente para evitar duplicagem do resultado na tela
    amigos.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}
