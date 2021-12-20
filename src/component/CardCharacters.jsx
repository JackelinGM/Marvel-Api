import React, { useState } from "react";
import moment from 'moment';
import { ModalModificated } from "./ModalModificated";
export default function CardCharacters({ characters, setCharacters }) {

const[modal,setModal]=useState({show:null,info:""});

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 container-card m-3 p-3">
      {characters.length > 0 &&
        characters.map((character) => (
          <div className="col" key={character.id}>
            <div className="card shadow p-3 mb-5 bg-dark rounded ">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">{character.name}</p>
                <p className="card-text">{character.description}</p>
                <p className="card-text">{moment(character.modified).format('DD-MM-YYYY')}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-warning " onClick={()=>setModal({show:true,info:character})}><i class="far fa-edit"></i>Editar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {modal.show && <ModalModificated 
                        modal={modal} 
                        setModal={setModal} 
                        characters={characters} 
                        setCharacters={setCharacters}/>}
    </div>
  );
}





