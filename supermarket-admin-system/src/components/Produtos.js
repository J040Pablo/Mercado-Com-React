import React, { useState } from 'react';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    precoAtual: '',
    precoPromocao: '',
    tipo: '',
    descricao: '',
    validade: ''
  });

  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const validarPreco = (preco) => {
    return !isNaN(preco) && preco > 0;
  };

  const handleChange = (e) => {
    setNovoProduto({ ...novoProduto, [e.target.name]: e.target.value });
  };

  const adicionarProduto = () => {
    let novoErro = {};

    if (!validarPreco(novoProduto.precoAtual)) {
      novoErro.precoAtual = "Preço atual inválido. Insira um número positivo.";
    }

    if (!validarPreco(novoProduto.precoPromocao)) {
      novoErro.precoPromocao = "Preço promocional inválido. Insira um número positivo.";
    }

    if (!novoProduto.nome) {
      novoErro.nome = "Nome é obrigatório.";
    }

    if (Object.keys(novoErro).length === 0) {
      setProdutos([...produtos, novoProduto]);
      setNovoProduto({
        nome: '',
        precoAtual: '',
        precoPromocao: '',
        tipo: '',
        descricao: '',
        validade: ''
      });
      setErrors({});
    } else {
      setErrors(novoErro);
    }
  };

  const removerProduto = (index) => {
    const novosProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(novosProdutos);
  };

  const selecionarProdutoParaEdicao = (index) => {
    setNovoProduto(produtos[index]);
    setEditIndex(index);
  };

  const confirmarEdicao = () => {
    const novosProdutos = [...produtos];
    novosProdutos[editIndex] = novoProduto;
    setProdutos(novosProdutos);
    setNovoProduto({
      nome: '',
      precoAtual: '',
      precoPromocao: '',
      tipo: '',
      descricao: '',
      validade: ''
    });
    setEditIndex(null);
  };

  return (
    <div>
      <h2>Produtos</h2>
      <form>
        <input name="nome" placeholder="Nome" value={novoProduto.nome} onChange={handleChange} />
        {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}
        
        <input name="precoAtual" placeholder="Preço Atual" value={novoProduto.precoAtual} onChange={handleChange} />
        {errors.precoAtual && <p style={{ color: 'red' }}>{errors.precoAtual}</p>}

        <input name="precoPromocao" placeholder="Preço Promoção" value={novoProduto.precoPromocao} onChange={handleChange} />
        {errors.precoPromocao && <p style={{ color: 'red' }}>{errors.precoPromocao}</p>}

        <input name="tipo" placeholder="Tipo" value={novoProduto.tipo} onChange={handleChange} />
        <input name="descricao" placeholder="Descrição" value={novoProduto.descricao} onChange={handleChange} />
        <input name="validade" type="date" value={novoProduto.validade} onChange={handleChange} />

        <button type="button" onClick={editIndex !== null ? confirmarEdicao : adicionarProduto}>
          {editIndex !== null ? 'Confirmar Edição' : 'Adicionar Produto'}
        </button>
      </form>

      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            {produto.nome} - {produto.precoAtual}
            <button onClick={() => selecionarProdutoParaEdicao(index)}>Editar</button>
            <button onClick={() => removerProduto(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
