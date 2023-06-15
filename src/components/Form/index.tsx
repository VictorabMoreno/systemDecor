import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { APIBASE } from '../../services/api';
import PopupCard from '../ALertsPopUp';


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  font-family: poppins;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  border: 2px solid black;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  font-family: poppins;

  &:hover {
    background-color: #45a049;
  }
`;

interface TableData {
  name: string;
  phone: string;
  address: string;
  event_date: string;
  event_specs: string;
}

const Form = ({onFormSubmit}: any) => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState<TableData>({
    name: '',
    phone: '',
    address: '',
    event_date: '',
    event_specs: '',
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    fetch(`${APIBASE}/insertfd`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1234567890',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved:', data);
        setFormData({
          name: '',
          phone: '',
          address: '',
          event_date: '',
          event_specs: '',
        });
        setShowSuccessPopup(true); // Mostrar o popup de sucesso após o envio do formulário
        if (onFormSubmit) {
          onFormSubmit(); // Chamada da função de retorno após o envio do formulário
        }
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <Label>Nome:</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        <Label>Telefone:</Label>
        <Input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        <Label>Endereço:</Label>
        <Input type="text" name="address" value={formData.address} onChange={handleChange} />
        <Label>Data do evento:</Label>
        <Input type="date" name="event_date" value={formData.event_date} onChange={handleChange} />
        <Label>Especificações do evento:</Label>
        <TextArea name="event_specs" value={formData.event_specs} onChange={handleChange} />
        <Button type="submit">Salvar</Button>
      </FormWrapper>
    </FormContainer>
  );
};

export default Form;

