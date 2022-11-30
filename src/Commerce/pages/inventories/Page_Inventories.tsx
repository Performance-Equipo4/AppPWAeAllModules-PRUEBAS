import React from 'react';
import Typography from '@mui/material/Typography';
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Page_Inventories.scss';

import Meta from '@/Commerce/components/Meta';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';

function Page_Inventories() {
  return (
    <>
      <Meta title="Inventarios" />
      <div className="container">
        <div className="caja">
          Columna uno
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a et corporis voluptatem
            voluptatibus natus delectus assumenda modi molestias! Ad esse, id dignissimos in
            voluptatibus dicta sunt minus laboriosam aliquid.
          </p>
          <button type="button" className="btn btn-danger">Danger</button>
          <div className="card">
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
            </div>
        </div>
        <div className="caja">
          <h3>Informacion</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quas hic beatae
            recusandae odit. Ullam recusandae exercitationem aut eius alias, deserunt optio rem
            ipsam quibusdam expedita facilis consequatur doloremque! Laudantium?
          </p>
        </div>
      </div>
    </>
  );
}

export default Page_Inventories;
