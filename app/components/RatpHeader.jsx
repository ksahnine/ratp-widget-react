import React from 'react';

let ratpIcons = {
  metro: { 
    iconType: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Metro-M.svg/2000px-Metro-M.svg.png",
    icon: function(lineNumber) {
      return `http://www.ratp.fr/fr/upload/docs/image/gif/2010-11/pa_metro_ligne_${lineNumber}.gif`
    }
  },
  rer: { 
    iconType: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/RER.svg/2000px-RER.svg.png",
    icon: function(lineNumber) {
      return `http://www.ratp.fr/meteo/bundles/ratpmeteo/img/lines/metro/M${lineNumber}_normal.png?v2`
    }
  }
};

export let RatpHeader = React.createClass({
    render() {
        return (
            <div className={this.props.className}>
              <div className="line">
                <img border="none" src={ratpIcons[this.props.type].iconType} className="type" />
                <img border="none" src={ratpIcons[this.props.type].icon(this.props.line)} className="number" />
              </div>
              <div className="stations">
                <div>Station : {this.props.station}</div>
                <div>Direction : {this.props.direction}</div>
              </div>
            </div>
        );
    }
});
