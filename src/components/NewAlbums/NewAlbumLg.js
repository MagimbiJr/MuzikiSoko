import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Nyashinski from '../../assets/img/nyashinski.jpg';
import Bahati_Kenya from '../../assets/img/Willy-Paul.jpg';
import Alikiba from '../../assets/img/ALIKIBA.jpg';
import Godluck from '../../assets/img/Godluck Gozbet.jpg';
import Harmonize from '../../assets/img/Harmonize.jpg';
import Shusho from '../../assets/img/Christina Shusho.jpg';
import Rose_Muhando from '../../assets/img/Rose Muhando.jpg';

import 'react-alice-carousel/lib/alice-carousel.css';
import './newAlbum.css';

export default () => {
    // const handleOnDragStart = (e) => e.preventDefault();
    return (
        <AliceCarousel mouseTrackingEnabled>
            <div className="slider_items_wrapper">
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Nyashinski} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>Let Love Lead</h4>
                    <h5>Nyashinski</h5>
                </div>
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Bahati_Kenya} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>Sing For Jesus</h4>
                    <h5>Bahati</h5>
                </div>
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Alikiba} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>Diary of King Kiba</h4>
                    <h5>Alikiba</h5>
                </div>
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Godluck} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>Ipo Siku</h4>
                    <h5>Godluck Gozert</h5>
                </div>
            </div>
            <div className="slider_items_wrapper">
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Harmonize} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>KondeGang</h4>
                    <h5>Harmonize</h5>
                </div>
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Shusho} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>Adamu</h4>
                    <h5>Christina Shusho</h5>
                </div>
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Nyashinski} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>Let Love Lead</h4>
                    <h5>Nyashinski</h5>
                </div>
                <div className="slider_item">
                    <div className="item_header">
                        <img src={Rose_Muhando} alt="Slider_Item" />
                    </div>
                    <h6>New Album</h6>
                    <h4>Utamu Wa Yesu</h4>
                    <h5>Rose Muhando</h5>
                </div>
            </div>
        </AliceCarousel>
    )
}