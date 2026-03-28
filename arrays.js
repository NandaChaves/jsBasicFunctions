
var coffees = ["Expresso","Machiado"];
var joinCoffees = coffees.join(",");
var prices;
var newList;
var showList = document.getElementById("demo").innerHTML = joinCoffees;
function addNewFlavor(){
    var newFlavor = document.getElementById("flavor").value;
    coffees.push(newFlavor);
    newList = document.getElementById("lista").innerHTML = coffees;
    var legn = document.getElementById("len").innerHTML ="<h5 class= \"\">Length retorna nº de elementos do array       </h5>"+ "<h5 style=\"color:purple;\">"+ newList.length + "</h5><br>";
    var s = document.getElementById("sort").innerHTML = " <h5 class= \"\">Sort ordena em a tabela, númerica ou em string</h5>"+ "<h5 style=\"color:purple;\">"+ newList.sort()+ "</h5><br>";
    var toS = document.getElementById("toString").innerHTML = "<h5 class=\"\">O método toString() retorna um array como uma string separada por vírgula</h5>"+ "<h5 style=\"color:purple;\">"+ newList.toString() + "</h5><br>"; 
    var jo = document.getElementById("join").innerHTML = "  <h5 class= \"\"> O método join() une os elementos do array em uma string.<br>Neste exemplo usamos (*) como separador entre os elementos</h5>"+ "<h5 style=\"color:purple;\">"+ newList.join('*')+"</h5><br>"; 
    var posi = document.getElementById("posi").innerHTML = "<h5 class= \"\"> novaLista[0] retorna o 1º elemento </h5>"+ "<h5 style=\"color:purple;\">"+ newList[0]+"</h5><br>"; 
    newList.unshift("Café com leite");
    var iArray = document.getElementById("unshift").innerHTML ="<h5 class= \"\"> novaLista.unshift(Café com leite) adiciona o elemento na 1º posição do array </h5>"+ "<h5 style=\"color:purple;\">"+newList+"</h5><br>";
    newList.splice(2,0,"Mocha","Árabe");
    var spli = document.getElementById("splice").innerHTML = "  <h5 class= \"\">splice() adiciona ou remove elementos no array. No caso adiciona na posição 2, 2 elementos</h5>"+ "<h5 style=\"color:purple;\">"+ newList.splice(2,0) +' '+newList+ "</h5><br>";
    var re = document.getElementById("reverse").innerHTML = "   <h5 class= \"\">Reverse exibe a lista de tras para frente</h5>"+ "<h5 style=\"color:purple;\">"+newList.reverse()+"</h5><br>";
            
    let y=0;
    var option;
    while(y<newList.length)
    {
       option += '<option value="'+ newList[y] + '">' + newList[y]+"</option>";
        y++;
    }
    document.getElementById('select').innerHTML = option; 
    
    let i=0;
    let text = "";
    prices = new Map();
    while(i<newList.length){
        prices.set(newList[i],5);
        i++;
    }
    prices.forEach(function(value,key){
        text += key + ' custa '+ value + '€<br>';
    })
    var mapa = document.getElementById("map").innerHTML = "<h4 class= \"\">Usando o prices.set(novaLista[i],5) inseriu-se os cafés no Map prices e usando o Map.forEach() imprimiu-se o resultado. </h4>"+ "<h5 style=\"color:purple;\">"+text+"</h5>";

    let chaves = '';
    for(const x of prices.keys()){
        chaves += x + '<br>';
    }

    let valores = '';
    for(const x of prices.values()){
        valores += x + '<br>';
    }

    var cha = document.getElementById("keys").innerHTML = "<h4 class= \"\">keys() retorna um objeto iterador com as chaves em um Map</h4>"+ "<h5 style=\"color:purple;\">"+ chaves+ "</h5><br>";
    var va = document.getElementById("values").innerHTML = "<h4 class= \"\">values() retorna um objeto iterador com os valores em um Map</h4>"+ "<h5 style=\"color:purple;\">"+ valores+ "</h5><br>";
    var get = document.getElementById("get").innerHTML = "<h4 class= \"\">get() retorna um elemento especificado de um objeto Map</h4>"+ "<h5 style=\"color:purple;\">"+prices.get('Machiado')+ "</h5><br>";
    var inOf = document.getElementById("indexOf").innerHTML = "<h4 class= \"\">indexOf() método retorna o primeiro índice (posição) de um valor especificado.</h4>"+ "<h5 style=\"color:purple;\">"+newList.indexOf("Americano")+ "</h5><br>";
    var copyW = document.getElementById("copyWithin").innerHTML = "<h4 class= \"\">copyWithin() copia os elementos do array para outra posição em um array, substituindo os valores existentes</h4>"+ "<h5 style=\"color:purple;\">"+newList.copyWithin(2,0)+ "</h5><br>";
    $("#botao").on("click",function(){
        var sabor = document.getElementById('select').value;
        var preco = document.getElementById('preco').value; 
        prices.set(sabor,preco);
        console.log(prices.get(sabor));

        var texto = "";
        prices.forEach(function(value,key){
            texto += key + ' agora custa ' + value + '€<br>';
        })
        document.getElementById("precos").innerHTML = texto;
    })
}
