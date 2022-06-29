import React from 'react';
import './AdminPage.css';
const AdminPage = () => {
  return (
    <div id="Productos" className="tabcontent">
      <h1>Productos</h1>
      <div className="container-fluid d-flex flex-wrap">
        <div className="col-md-4 col-xs-12 h-100 p-3 order-sm-2 order-xs-2 bg-light border rounded-3">
          <form>
            <div className="col-md-12">
              <div className="input-group">
                <input type="text" name="" required />
                <label>Nombre del Producto</label>
              </div>
              <div className="d-flex">
                <div className="input-group col pe-4">
                  <input type="text" name="" required />
                  <label>Modelo</label>
                </div>
                <div className="input-group col">
                  <input type="text" name="" required />
                  <label>Serie</label>
                </div>
              </div>
              <div className="d-flex">
                <div className="input-group col pe-4">
                  <input type="text" name="" required />
                  <label>Color</label>
                </div>
                <div className="input-group col pe-4">
                  <input type="text" name="" required />
                  <label>Tamaño</label>
                </div>
                <div className="input-group col">
                  <input type="text" name="" required />
                  <label>Precio</label>
                </div>
              </div>
              <div className="d-flex">
                <div className="input-group col pe-4">
                  <select name="select">
                    <option>Computación</option>
                    <option>Audio</option>
                    <option>Video</option>
                  </select>
                  <label>Categoría</label>
                </div>
                <div className="input-group col">
                  <input type="text" name="" required />
                  <label>Cantidad</label>
                </div>
              </div>
              <div className="d-flex flex-column">
                <label>Imagen</label>
                <input type="file" name="" className="mb-3" />

                <div className="input-group">
                  <textarea className="" name="tagdesc" required></textarea>
                  <label>Descripción</label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-8 col-xs-12 order-sm-1 px-4 d-flex flex-column">
          <form className="d-flex flex-row align-items-center mt-3 py-2 px-4 bg-light">
            <div className="input-group pe-4 pb-1">
              <input className="me-4 mb-1" type="text" name="" required />
              <label className="me-2">Buscar</label>
            </div>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Componentes de Computadora</td>
                <td></td>
                <td>
                  <center>
                    <button href="" className="btn btn-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
