import React from 'react';
import Typography from '@mui/material/Typography';
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Page_Inventories.scss';
import Collapsible from 'react-collapsible';

import Meta from '@/Commerce/components/Meta';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';

function Page_Inventories() {
  return (
    <>
      <Meta title="Inventarios" />
      <div className="container">
        <div className="caja">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar"></input>
            <button className="btn btn-primary" type="button" id="button-addon2">
              Buscar
            </button>
          </div>
          <hr />
          <div className="d-grid gap-2">
            <button className="btn btn btn-success" type="button">
              Crear
            </button>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Id:</p>
              <hr />
              <button type="button" className="btn btn-outline-success btn-sm">
                Ver detalles
              </button>
              <button type="button" className="btn btn-outline-danger btn-sm">
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <div className="caja">
          <h3>Detalles</h3>
          <hr />
          <div className="input-group mb-3">
            <span className="input-group-text">IdInstitutoOK</span>
            <input type="text" aria-label="First name" className="form-control"></input>
            <span className="input-group-text">IdAlmacenOK</span>
            <input type="text" className="form-control"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">IdProdServOK</span>
            <input type="text" aria-label="First name" className="form-control"></input>
            <span className="input-group-text">IdPresentaBK</span>
            <input type="text" className="form-control"></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">ControlaSerie</span>
            <input type="text" aria-label="First name" className="form-control"></input>
          </div>
          <Collapsible trigger="inventarios_info_ad:">
            <div className="div-inventarios_info_ad">
              <table className="table table-sm">
                <thead className="table-dark">
                  <tr>
                    <th>IdEtiqueta</th>
                    <th>Valor</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Prueba 1</th>
                    <th>Prueba 2</th>
                    <th>
                    <button type="button" className="btn btn-info btn-sm">Ver más</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Collapsible>
          <hr />
          <Collapsible trigger="inventarios_movtos:">
          <div className="div-inventarios_movtos:">
              <table className="table table-sm">
                <thead className="table-dark">
                  <tr>
                    <th>CantidadMovto</th>
                    <th>CantidadAnt</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Prueba 1</th>
                    <th>Prueba 2</th>
                    <th>
                    <button type="button" className="btn btn-info btn-sm">Ver más</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Collapsible> 
          <hr />
          <Collapsible trigger="inventarios_series:">
          <div className="inventarios_series:">
              <table className="table table-sm">
                <thead className="table-dark">
                  <tr>
                    <th>Serie</th>
                    <th>Placa</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Prueba 1</th>
                    <th>Prueba 2</th>
                    <th>
                    <button type="button" className="btn btn-info btn-sm">Ver más</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Collapsible > 
        </div>
      </div>
    </>
  );
}

export default Page_Inventories;
