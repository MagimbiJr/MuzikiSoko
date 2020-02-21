import React from 'react';
import Artist from '../../../assets/img/Otile Brown.jpg'

import "./biography.css";

export default () => (
    <>
      <h2>Pitson</h2>
      <div class="profile_pic">
         <img src={Artist} alt="Artist Profile" />
      </div>
      <h4>Biography</h4>
      <p>Born in 1984 in Mathare, Nairobi. Pitson began his career in music while in Kenyatta University where he served as Music Director for the Christian Union.</p>
    </>
)