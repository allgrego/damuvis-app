import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({movie:m}) => {
    const imageBaseUri = 'https://image.tmdb.org/t/p/w500';

    const [showDescription, setShowDescription] = useState(false);

    const mediaTypeParser = (mediaType) =>{
        switch(mediaType){
            case 'movie': return 'Película';
            case 'tv': return 'Serie';
            default: return null;
        }
    }

    return ( 
        <div className="card shadow pb-4"
            css={css`
                min-width: 18rem;
                max-width: 20rem;
                border-bottom: 5px solid var(--dark);
                transition: transform 0.2s;
                &:hover{
                    transform: scale(1.02);
                }
            `}
        >
            <img src={`${imageBaseUri}${m.backdrop_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                {/* Título */}
                {
                    m.name?
                    (<><h5 className="card-title text-center"><strong>{m.name}</strong></h5>
                        <p className="card-title text-center small text-dark">({m.original_title||m.original_name})</p>
                    </>)
                    :
                    (<h5 className="card-title text-center mb-5"><strong>{m.original_title||m.original_name}</strong></h5>)
                }
                <div className="row mb-2">
                    <div className="col-12 text-center">
                        <p className="small text-dark my-0">Puntuación: {m.vote_average}/10</p>        
                        <p className="small text-muted my-0">{mediaTypeParser(m.media_type)&&(<>({mediaTypeParser(m.media_type)})</>)}</p>        
                    </div>
                </div>
                {/* Descripción */}
                <div className="row">
                    <div className="col-12 text-center">
                        <a className="btn btn-sm btn-dark shadow-sm small mx-2 my-1" data-toggle="collapse" href={`#multiCollapseExample${m.id}`} role="button" aria-expanded="false" aria-controls={`multiCollapseExample${m.id}`}
                            onClick={()=>{setShowDescription(!showDescription)}}
                            css={css`
                                font-size: 10px;
                            `}
                        >{showDescription?(<>Ocultar <i className="fa fa-compress-alt"></i></>):(<>Ver descripción <i className="fa fa-expand-alt"></i></>)}</a>    
                    </div>
                    <div className="col-12 text-center">
                        <div className="collapse multi-collapse" id={`multiCollapseExample${m.id}`}>
                            {/* Fecha de lanzamiento */}
                            {   m.release_date&&(<p className="card-text text-muted small mt-1">Fecha de lanzamiento: {m.release_date}</p>)}
                            {/* Descripción */}
                            <p className="card-text text-justify small px-2">{m.overview}</p>
                            {/* Lenguaje Original */}
                            {/* {   m.original_language&&(<p className="card-text text-muted small mt-1">Lenguaje original: {m.original_language}</p>)} */}
                            {/* Ver más */}
                            <Link to={`/${m.media_type}/${m.id}`} className="btn btn-sm btn-dark shadow-sm small mx-2 my-1"
                                css={css`
                                    font-size: 10px;
                                `}
                            >Ver más información sobre <strong>{m.name||m.original_title||m.original_name}</strong></Link>        
                        </div>
                    </div>
                </div>
                
                
                {/* Botones */}
                {/* <div className="text-center mt-4 pt-2 h-100 ">
                    <Link to={`/${m.media_type}/${m.id}`} className="btn btn-sm btn-dark shadow-sm small mx-2 my-1">Ver Más</Link>

                    <Link to={`/${m.media_type}/${m.id}`} className="btn btn-sm btn-dark shadow-sm small mx-2">Agregar a mi Lista</Link>
                </div> */}
            </div>
        </div>
     );
}
 
export default Card;