import React, { useState } from "react";

// import './ModalProduct.css'

const ModalModificated = ({ modal, setModal, setCharacters, characters }) => {
  const [info, setInfo] = useState(modal.info);

  function changeValue(e, id) {
    setInfo({ ...info, [e.target.name]: e.target.value, id });
  }

  function updateStateGeneral() {
    console.log(info, "asjhdgahsd");
    const modCharacter = characters.map((e) => {
      if (e.id === info.id) {
        e.name = info.name;
        e.description = info.description;
      }
      return e;
    });
    setCharacters(modCharacter);
    setModal(false);
  }

  return (
    <>
      <div
        className="modal fade show  m-2 p-2 "
        tabIndex="-1"
        style={{ display: `${modal.show ? "block" : "none"}`}}
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title ">Prueba moda</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal({ show: false, info: "" })}
              ></button>
            </div>
            <div className="modal-body d-flex flex-column">
              <p>Edit Name</p>
              <input 
                type="text"
                value={info.name}
                onChange={(e) => changeValue(e, info.id)}
                name="name"
              />
              <br />
              <p>Edit Description</p>
              <input
                type="text"
                value={info.description}
                name="description"
                onChange={(e) => changeValue(e, info.id)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => updateStateGeneral()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ModalModificated };
