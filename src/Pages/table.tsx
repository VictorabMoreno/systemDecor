import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiPagesFill, RiAddLine, RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';
import Form from '../components/Form';
import { APIBASE } from '../services/api';
import PopupCard from '../components/ALertsPopUp';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-top: 20px;
`;

const TableElement = styled.table`
  width: max-content;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  word-break: break-word;
  font-size: 12px;
  font-family: poppins;
  font-weight: 600;
  color: #343442;
  letter-spacing: 1px;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  word-break: break-word;
  font-size: 12px;
  font-family: poppins;
  font-weight: 500;
  color: #343442;
  min-width: 160px;

  &:last-child {
    background-color: transparent;
  }
`;

const NameCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  .circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #b7cec4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
`;

const AnimatedBg = styled.div`
  padding: 10px;
  background: #a0c7d5;
  border-radius: 10px;
  max-width: 500px;
`;

const ContainerButtonCreate = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  transition: background-color 0.3s;
  font-family: poppins;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ButtonText = styled.span`
  margin-left: 8px;
`;

const DeleteButton = styled.button`
  background-color: #be0000;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  align-items: center;
  display: flex;
  padding: 5px 15px;
  color: white;
  margin-left:10px ;

  >p {
    font-size: 12px;
    font-family: poppins;
    margin: 0;
    font-weight: 600;
    padding-left: 5px;
  }
`;

interface TableData {
  id: number;
  name: string;
  phone: string;
  address: string;
  event_date: string;
  event_specs: string;
}

const Table: React.FC = () => {
  const [creatingJob, setCreatingJob] = useState(false);
  const [data, setData] = useState<TableData[]>([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleFormSubmit = () => {
    setCreatingJob(false);
    setShowSuccessPopup(true);
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
  };

  const handleDelete = (id: number) => {
    // Cria o objeto JSON com o ID
    const data = {
      id: id
    };
  
    // Faz a requisição para excluir o cliente pelo ID
    fetch(`${APIBASE}/delete`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 1234567890', // Adicione o token de autorização aqui
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Converte o objeto em uma string JSON
    })
      .then((response) => response.json())
      .then((data) => {
        // Atualize os dados após a exclusão
        setData((prevData) => prevData.filter((item) => item.id !== id));
        setShowSuccessPopup(true);
      })
      .catch((error) => {
        console.error('Erro ao excluir cliente:', error);
      });
  };
  

  useEffect(() => {
    // Aqui você faria a requisição à API para buscar os dados
    // Substitua a URL_API pelo endpoint correto da sua API
    fetch(`${APIBASE}/clients`, {
      headers: {
        'Authorization': 'Bearer 1234567890', // Adicione o token de autorização aqui
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleCreateJob = () => {
    setCreatingJob(!creatingJob);
  };

  return (
    <TableContainer>
      <ContainerButtonCreate>
        <ButtonCreate onClick={handleCreateJob}>
          {creatingJob ? (
            <>
              <RiCloseLine size={18} />
              <ButtonText>Cancelar</ButtonText>
            </>
          ) : (
            <>
              <RiAddLine size={18} />
              <ButtonText>Novo cliente</ButtonText>
            </>
          )}
        </ButtonCreate>
      </ContainerButtonCreate>
      {creatingJob ? (
        <Form onFormSubmit={handleFormSubmit} />
      ) : (
        <TableElement>
          <thead>
            <tr>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Telefone</TableHeader>
              <TableHeader>Endereço</TableHeader>
              <TableHeader>Data do evento</TableHeader>
              <TableHeader>Especificações do evento</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <TableCell>
                  <NameCell>
                    <div className="circle">{item.name.charAt(0)}</div>
                    <strong>{item.name}</strong>
                  </NameCell>
                </TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.event_date}</TableCell>
                <TableCell>
                  <AnimatedBg>{item.event_specs}</AnimatedBg>
                </TableCell>
               
                  <DeleteButton onClick={() => handleDelete(item.id)}>
                    <RiDeleteBin6Line size={20} />
                    <p>deletar</p>
                  </DeleteButton>
                
              </tr>
            ))}
          </tbody>
        </TableElement>
      )}
      {showSuccessPopup && (
        <PopupCard type="success" title="Sucesso" text="Cliente adicionado com sucesso!" duration={5} />
      )}
    </TableContainer>
  );
};

export default Table;
