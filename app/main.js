import React from 'react';
import ReactDOM from 'react-dom';
import {RatpHeader} from './components/RatpHeader';
import {RatpStatusBar} from './components/RatpStatusBar';
import {RatpWidget} from './components/RatpWidget';

var app = document.createElement('div');

document.body.appendChild(app);

//ReactDOM.render(<RatpHeader type="metro" line="11" station="Belleville" direction="Châtelet" />, app);
//ReactDOM.render(<RatpStatusBar message="Trafic normal sur l'ensemble de la ligne" />, app);

ReactDOM.render(<RatpWidget type="metro" line="11" station="belleville" direction="chatelet" />, app);
//ReactDOM.render(<RatpWidget type="metro" line="1" station="bastille" direction="la defense" />, app);
//ReactDOM.render(<RatpWidget type="metro" line="6" station="bercy" direction="nation" />, app);