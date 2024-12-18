import { useReducer, useState } from 'react';
import './App.css';
import reducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from './reducer';

function App() {

  const [frase, setFrase] = useState('')
  const [frases, dispatch] = useReducer(reducer, [])

  function salvarFrase (evento) {
    evento.preventDefault()
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase // mesmo que frase: frase
    })
  }

  function excluirFrase (fraseExcluida) {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea
          value={frase}
          onChange={evento => setFrase(evento.target.value)}
          placeholder='Digite sua frase...'
          required 
        />
        <br />
        <button>Salvar frase</button>
      </form>
      {frases.map((fraseAtual, indice) =>
        <p key={indice}>
          {fraseAtual}
          <button onClick={() => excluirFrase(fraseAtual)}>Excluir</button>
        </p>
      )}
    </div>
  );
}

export default App;
