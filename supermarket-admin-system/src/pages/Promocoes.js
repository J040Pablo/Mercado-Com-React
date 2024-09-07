import React, { useState } from 'react';

function Promocoes() {
  const [promocoes, setPromocoes] = useState([]);
  const [novaPromocao, setNovaPromocao] = useState({
    nomeProduto: '',
    precoAtual: '',
    precoPromocional: '',
    descricao: ''
  });

  // Atualiza o estado conforme o usuário preenche o formulário
  const handleChange = (e) => {
    setNovaPromocao({ ...novaPromocao, [e.target.name]: e.target.value });
  };

  // Função para adicionar uma nova promoção
  const adicionarPromocao = () => {
    setPromocoes([...promocoes, novaPromocao]);
    setNovaPromocao({
      nomeProduto: '',
      precoAtual: '',
      precoPromocional: '',
      descricao: ''
    });
  };

  // Função para remover uma promoção
  const removerPromocao = (index) => {
    const novasPromocoes = promocoes.filter((_, i) => i !== index);
    setPromocoes(novasPromocoes);
  };

  return (
    <div>
      <h2>Promoções</h2>
      <form>
        <input name="nomeProduto" placeholder="Nome do Produto" value={novaPromocao.nomeProduto} onChange={handleChange} />
        <input name="precoAtual" placeholder="Preço Atual" value={novaPromocao.precoAtual} onChange={handleChange} />
        <input name="precoPromocional" placeholder="Preço Promocional" value={novaPromocao.precoPromocional} onChange={handleChange} />
        <input name="descricao" placeholder="Descrição da Promoção" value={novaPromocao.descricao} onChange={handleChange} />
        <button type="button" onClick={adicionarPromocao}>Adicionar Promoção</button>
      </form>

      <ul>
        {promocoes.map((promocao, index) => (
          <li key={index}>
            {promocao.nomeProduto} - {promocao.precoPromocional}
            <button onClick={() => removerPromocao(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Promocoes;
