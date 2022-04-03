import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../services/selectors/getHeroById';

export const HeroScreen = () => {
  const {id} = useParams();
  const hero = useMemo(() => getHeroById(id), [id]) ;  
  const navigate = useNavigate();

  if(!hero) return <Navigate to='/' /> ;
  const {superhero, publisher, alter_ego, first_appearance, characters} = hero;
  const imagePath = `/assets/${ id }.jpg`;

  const handleReturn = () => {
    //volvemos al anterior en el history
    navigate( -1 );
  }
  
  return (
    <div className="row mt-5">
            <div className="col-4">
                <img src={ imagePath } alt={ superhero } className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-no-style">
                    <li>Alter ego: { alter_ego } </li>
                    <li>Publisher: { publisher } </li>
                    <li>First Appearance: { first_appearance } </li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{ characters }</p>
                <button className="btn btn-outline-info mt-2" onClick={ handleReturn }>
                    Back 
                </button>
            </div>


        </div>
  )
}
