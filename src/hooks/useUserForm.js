import { useState } from 'react'

export const useForm = (datosIniciales) => {

  const [formulario, setFormulario] = useState(datosIniciales);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);     
    setFormulario({...formulario, [e.target.name]: e.target.value })
  };
  
  const resetForm = () => {
    setFormulario(datosIniciales);
  }
  
  return [formulario, handleInputChange, resetForm];
}
