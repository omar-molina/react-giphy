import React from 'react'
import { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <p>{category}</p>
      {
        isLoading
          ? (<h2>Cargando...</h2>)
          : null
      }

      <div className='card-grid'>
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}
