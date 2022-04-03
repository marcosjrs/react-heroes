import React, { useState } from 'react'
import { useForm } from '../../hooks/useUserForm';
import { getHeroByName } from '../../services/selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const [formulario, handleInputChange] = useForm({search:''});
  const [heroes, setHeroes] = useState([]);
  const {search} = formulario;

  const handleSubmit = (e) => {
     e.preventDefault();
     setHeroes(getHeroByName(search));
  };

  return (
    <div className='row mt-5'>
      <div className='col-5'>
        <form  onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputSearchCustom" className="form-label">Búsqueda de un heroe</label>
            <input value={search} onChange={handleInputChange} name="search" type="text" className="form-control" id="inputSearchCustom" placeholder="heroe" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Buscar</button>
          </div>
        </form>
      </div>
      <div className='col-7'>
        <div className='row row-cols-1'>
          { heroes &&  heroes.map( h => <HeroCard key={h.id} {...h}  />) }
        </div>
      </div>
    </div>
  )
}
