import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/home';
import Table from './Pages/table';
import Search from './Pages/Search';
import EmConstrucao from './components/ConstructPage';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0eeee;
  margin: 0;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  font-family: poppins;
  border: 2px solid #ccc;

  > h1 {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 24px;
`;

const LoginInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 40px;
  margin-bottom: 16px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 14px;
`;

const LoginInput = styled.input`
  flex: 1;
  height: 100%;
  padding: 8px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  outline: none;
`;

const PasswordVisibilityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const PasswordVisibilityIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 16px;
  color: #333;
`;

const LoginButton = styled.button`
  flex: 1;
  height: 20px;
  padding: 5px 25px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-size: 12px;
`;

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'?true:false;

  const handleLogin = () => {
    if (password === 'flaviaD3cor123') {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.reload(); // Recarrega a página após o login
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload(); // Recarrega a página após o logout
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home page="Home" componentPage={<Table />} />} />
          <Route path="/search" element={<Home page="Buscar" componentPage={<Search />} />} />
          <Route
            path="/eventos"
            element={<Home page="Eventos" componentPage={<EmConstrucao />} />}
          />
        </Routes>
      ) : (
        <Container>
          <LoginContainer>
            <Logo src="/logo.png" alt="Logo" />
            <LoginInputContainer>
              <LoginInput
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder='Palavra passe'
              />
              <PasswordVisibilityButton onClick={handlePasswordVisibility}>
                <PasswordVisibilityIcon>
                  {showPassword ? <AiOutlineEye/> :  <AiOutlineEyeInvisible /> }
                </PasswordVisibilityIcon>
              </PasswordVisibilityButton>
            </LoginInputContainer>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
          </LoginContainer>
        </Container>
      )}
    </BrowserRouter>
  );
};

export default App;
