import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    navigate('/');
  }

  return (
    <>
      <h1>Login</h1>
      <hr />
      <button onClick={handleSubmit} className="btn btn-primary">Entrar</button>
    </>
  )
}
