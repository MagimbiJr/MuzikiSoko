import React from 'react';
import PortalHeader from './PortalHeader/portalHeader';
import PortalMain from './PortalMain/portalMain';

import './artistportal.css'

export default () => (
    <>
      <section className="artist_portal">
          <div className="container">
            <PortalHeader />
            <PortalMain />
          </div>
      </section>
    </>
)