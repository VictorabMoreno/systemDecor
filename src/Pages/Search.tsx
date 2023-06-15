import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';
import { APIBASE } from '../services/api';

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

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 2px 10px;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 5px;
  font-size: 13px;
  font-family: poppins;
  background-color: transparent;
  outline: none;
  font-weight: 600;
`;

const SearchIcon = styled(RiSearchLine)`
  font-size: 18px;
  color: #333;
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

interface TableData {
  name: string;
  phone: string;
  address: string;
  event_date: string;
  event_specs: string;
}

const Search: React.FC = () => {
  const [creatingJob, setCreatingJob] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    fetch(`${APIBASE}/clients`, {
      headers: {
        "Authorization": 'Bearer 1234567890', // Adicione o token de autorização aqui
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleCreateJob = () => {
    setCreatingJob(!creatingJob);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    if (lowerCaseSearchTerm.length === 0) {
      return true;
    }

    return lowerCaseName.includes(lowerCaseSearchTerm);
  });

  return (
    <TableContainer>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Buscar por nome"
          value={searchTerm}
          onChange={handleSearch}
        />
        <SearchIcon />
      </SearchInputContainer>

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
          {filteredData.map((item, index) => (
            <tr key={index}>
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
            </tr>
          ))}
        </tbody>
      </TableElement>
    </TableContainer>
  );
};

export default Search;
