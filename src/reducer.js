export const ADICIONAR_FRASE = "ADICIONAR_FRASE";
export const EXCLUIR_FRASE = "EXCLUIR_FRASE";

// alert vai aparecer duas vezes por causa do <React.StrictMode> no index.js
// só aparece em ambiente de desenvolvimento, então tudo bem alertar duas vezes
// os benefícios são maiores mantendo o strict do que comentar o strict

const reducer = (estado, acao) => {
  // neste caso o estado é a lista das frases
  
  switch (acao.tipo) {
    
    case ADICIONAR_FRASE:
      if (acao.frase.length < 20) {
        alert("Pelo menos 20 caracteres");
        return estado
      }

      if (estado.includes(acao.frase)) {
        alert("Frase já existe");
        return estado
      }

      return [...estado, acao.frase]

    case EXCLUIR_FRASE:
      return estado.filter(itemFrase => itemFrase !== acao.frase)

    default:
      return estado;
  }
};

export default reducer;
