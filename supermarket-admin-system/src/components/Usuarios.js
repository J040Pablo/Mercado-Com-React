import React, { useState } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    cpf: ''
  });

  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const validarCPF = (cpf) => {
    const regex = /^\d{11}$/;
    return regex.test(cpf);
  };

  const handleChange = (e) => {
    setNovoUsuario({ ...novoUsuario, [e.target.name]: e.target.value });
  };

  const adicionarUsuario = () => {
    let novoErro = {};

    if (!validarCPF(novoUsuario.cpf)) {
      novoErro.cpf = "CPF inválido. Insira 11 dígitos numéricos.";
    }

    if (!novoUsuario.nome) {
      novoErro.nome = "Nome é obrigatório.";
    }

    if (Object.keys(novoErro).length === 0) {
      setUsuarios([...usuarios, novoUsuario]);
      setNovoUsuario({
        nome: '',
        cpf: ''
      });
      setErrors({});
    } else {
      setErrors(novoErro);
    }
  };

  const removerUsuario = (index) => {
    const novosUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(novosUsuarios);
  };

  const selecionarUsuarioParaEdicao = (index) => {
    setNovoUsuario(usuarios[index]);
    setEditIndex(index);
  };

  const confirmarEdicao = () => {
    const novosUsuarios = [...usuarios];
    novosUsuarios[editIndex] = novoUsuario;
    setUsuarios(novosUsuarios);
    setNovoUsuario({
      nome: '',
      cpf: ''
    });
    setEditIndex(null);
  };

  return (
    <div>
      <h2>Usuários (Funcionários)</h2>
      <form>
        <input name="nome" placeholder="Nome" value={novoUsuario.nome} onChange={handleChange} />
        {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}

        <input name="cpf" placeholder="CPF" value={novoUsuario.cpf} onChange={handleChange} />
        {errors.cpf && <p style={{ color: 'red' }}>{errors.cpf}</p>}

        <button type="button" onClick={editIndex !== null ? confirmarEdicao : adicionarUsuario}>
          {editIndex !== null ? 'Confirmar Edição' : 'Adicionar Usuário'}
        </button>
      </form>

      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} - {usuario.cpf}
            <button onClick={() => selecionarUsuarioParaEdicao(index)}>Editar</button>
            <button onClick={() => removerUsuario(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
