import React, { useRef, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Page_Inventories.scss';
import Collapsible from 'react-collapsible';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  InputGroup,
  FormLabel,
  Form,
} from 'react-bootstrap';

import Meta from '@/Commerce/components/Meta';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';

function Page_Inventories() {
  const [queBoton, setQueBoton] = useState('');
  //Modal
  const [isOpen, setIsOpen] = useState(false);
  //---------
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  let day: number = 4;

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
            <button
              className="btn btn btn-success"
              type="button">
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
                <thead className="table-info">
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
                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        id="inventarios_info_ad"
                        onClick={() => {
                          setQueBoton('inventarios_info_ad');
                          showModal();
                        }}
                      >
                        Ver más
                      </button>
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
                <thead className="table-info">
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
                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        id="inventarios_movtos"
                        onClick={() => {
                          setQueBoton('inventarios_movtos');
                          showModal();
                        }}
                      >
                        Ver más
                      </button>
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
                <thead className="table-info">
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
                      <button
                        type="button"
                        className="btn btn-info btn-sm"
                        id="inventarios_series"
                        onClick={() => {
                          setQueBoton('inventarios_series');
                          showModal();
                        }}
                      >
                        Ver más
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Collapsible>
          <hr />
          <Collapsible trigger="detail_row:">
            <div className="detail_row:">
              <div className="input-group mb-3">
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Borrado</span>
                <input type="text" className="form-control"></input>
              </div>
              <label> - detail_row_reg</label>
              <div className="input-group mb-3">
                <span className="input-group-text">FechaReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">UsuarioReg</span>
                <input type="text" className="form-control"></input>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>

      <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </ModalHeader>
        <ModalBody>
          {queBoton == 'inventarios_info_ad' ? (
            <React.Fragment>
              <h5>inventarios_info_ad</h5>
              <div className="input-group mb-3">
                <span className="input-group-text">IdEtiqueta</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Etiqueta</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Valor</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">IdSeccionOK</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Secuencia</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Borrado</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row_reg</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">FechaReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">UsuarioReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
            </React.Fragment>
          ) : queBoton == 'inventarios_movtos' ? (
            <React.Fragment>
              <h5>inventarios_movtos</h5>
              <div className="input-group mb-3">
                <span className="input-group-text">CantidadMovto</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">CantidadAnt</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">CantidadAct</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">IdTipoMovtoOK</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">IdClaseMovtoOK</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Referencia</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Borrado</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row_reg</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">FechaReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">UsuarioReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
            </React.Fragment>
          ) : queBoton == 'inventarios_series' ? (
            <React.Fragment>
            <h5>inventarios_series</h5>
              <div className="input-group mb-3">
                <span className="input-group-text">Serie</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Placa</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Observación</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h5>inventarios_series_estatus_f</h5>
              <hr/>
              <div className="input-group mb-3">
                <span className="input-group-text">IdEstatusOK</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Estatus</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Actual</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
              <span className="input-group-text">Observación</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Borrado</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row_reg</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">FechaReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">UsuarioReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h5>inventarios_series_estatus_v</h5>
              <hr/>
              <div className="input-group mb-3">
                <span className="input-group-text">IdEstatusOK</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Estatus</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Actual</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <div className="input-group mb-3">
              <span className="input-group-text">Observación</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Borrado</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row_reg</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">FechaReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">UsuarioReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h5>inventarios_series_ubicacion</h5>
              <hr/>
              <div className="input-group mb-3">
                <span className="input-group-text">Ubicació</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Actual</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Borrado</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row_reg</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">FechaReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">UsuarioReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h5>detail_row</h5>
              <hr/>
              <div className="input-group mb-3">
                <span className="input-group-text">Activo</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">Borrado</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              <h6>detail_row_reg</h6>
              <div className="input-group mb-3">
                <span className="input-group-text">FechaReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
                <span className="input-group-text">UsuarioReg</span>
                <input type="text" aria-label="First name" className="form-control"></input>
              </div>
              

          </React.Fragment>
          ) : queBoton == 'detail_row' ? (
            <React.Fragment>
              
            </React.Fragment>
          ) : ""}
        </ModalBody>
        <ModalFooter>
        <button type="button" className="btn btn-success">Actualizar</button>
        <button type="button" className="btn btn-danger">Eliminar</button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Page_Inventories;
