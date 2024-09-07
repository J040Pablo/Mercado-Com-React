import React, { useState } from 'react';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [novoCliente, setNovoCliente] = useState({
    nome: '',
    cpf: '',
    idade: '',
    tempoCliente: ''
  });

  const handleChange = (e) => {
    setNovoCliente({ ...novoCliente, [e.target.name]: e.target.value });
  };

  const adicionarCliente = () => {
    setClientes([...clientes, novoCliente]);
    setNovoCliente({
      nome: '',
      cpf: '',
      idade: '',
      tempoCliente: ''
    });
  };

  const removerCliente = (index) => {
    const novosClientes = clientes.filter((_, i) => i !== index);
    setClientes(novosClientes);
  };

  return (
    <div>
      <h2>Clientes</h2>
      <form>
        <input name="nome" placeholder="Nome" value={novoCliente.nome} onChange={handleChange} />
        <input name="cpf" placeholder="CPF" value={novoCliente.cpf} onChange={handleChange} />
        <input name="idade" placeholder="Idade" value={novoCliente.idade} onChange={handleChange} />
        <input name="tempoCliente" placeholder="Tempo de Cliente" value={novoCliente.tempoCliente} onChange={handleChange} />
        <button type="button" onClick={adicionarCliente}>Adicionar Cliente</button>
      </form>

      <ul>
        {clientes.map((cliente, index) => (
          <li key={index}>
            {cliente.nome} - {cliente.cpf}
            <button onClick={() => removerCliente(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;
