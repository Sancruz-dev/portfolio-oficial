import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
   setActiveGenre: Dispatch<SetStateAction<number>>,
   setFiltered: Dispatch<SetStateAction<never[]>>,
   activeGenre: number,
   recent: any
}

export function Filter({
   setActiveGenre, setFiltered,
   activeGenre, recent }: Props) {

   useEffect(() => {
      if (activeGenre === 0) {
         setFiltered(recent)
         return
      }

      const filtered = recent.filter((projeto: { genre_ids: any; }) =>
         projeto.genre_ids.includes(activeGenre)
      )

      setFiltered(filtered)

   }, [activeGenre])

   return <>
      <div className="work__filters">
         <button 
            onClick={() => setActiveGenre(0)} 
            className={activeGenre === 0 
               ? 'work__item active-work' 
               : 'work__item'}>
            Todos
         </button>
         <button 
            onClick={() => setActiveGenre(1)} 
            className={activeGenre === 1 
               ? 'work__item active-work' 
               : 'work__item'}>
            Full-Stack
         </button>
         <button 
            onClick={() => setActiveGenre(2)} 
            className={activeGenre === 2 
               ? 'work__item active-work' 
               : 'work__item'}>
            Front-End / Design
         </button>
      </div>
   </>
}