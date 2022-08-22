var listaFilmes = [];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
function adicionaPalavra(){
  let novaPalavra = document.getElementById("entrada-texto");
  palavras.push(novaPalavra.value.toUpperCase());
}