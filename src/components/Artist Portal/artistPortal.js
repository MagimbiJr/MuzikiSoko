import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import PortalHeader from './PortalHeader/portalHeader';
import PortalMain from './PortalMain/portalMain';

import './artistportal.css'

export default () => (
    <>
      <Toolbar />
      <section className="artist_portal">
          <div className="container">
            <PortalHeader />
            <PortalMain />
          </div>
      </section>
    </>
)