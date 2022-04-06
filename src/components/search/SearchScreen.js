import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useUserForm';
import { getHeroByName } from '../../services/selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const [formulario, handleInputChange] = useForm({searchText:''});
  const {searchText} = formulario;

  const { q='' } = queryString.parse(search);
  const heroes = useMemo(()=>getHeroByName(q),[q]);


  const handleSubmit = (e) => {
     e.preventDefault();
     navigate(`?q=${searchText}`);     
  };

  return (
    <div className='row mt-5'>
      <div className='col-5'><h2>Búsquedas</h2><hr />
        <form  onSubmit={handleSubmit}>
          <div className="mb-3">
            <input value={searchText} onChange={handleInputChange} name="searchText" type="text" className="form-control" id="inputSearchCustom" placeholder="heroe" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Buscar</button>
          </div>
        </form>
      </div>
      <div className='col-7'>
        <h2>Resultados</h2><hr />
        <div className='row row-cols-1'>
        { heroes &&  heroes.map( h => <HeroCard key={h.id} {...h}  />) }
        </div>
        {
          (q==='')?
          <div className='alert alert-info'>No hay ninguna búsqueda activa</div> :
          (heroes.length === 0) && <div className='alert alert-warning'>No hay resultados</div>
        }
      </div>
    </div>
  )
}
