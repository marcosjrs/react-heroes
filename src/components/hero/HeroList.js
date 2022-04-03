import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../services/selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export default function HeroList({publisher}) {
  const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]);
  return (
    <>
      <div>Lista de heroes de {publisher}</div>
      <div className='row row-cols-1 row-cols-md-3 g-3'>
        { heroes.map( h => <HeroCard key={h.id} {...h}  />) }
      </div>
    </>
  )
}
