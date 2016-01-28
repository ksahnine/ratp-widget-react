import React from 'react';
import {RatpStatusBar} from './RatpStatusBar';
import {RatpHeader}  from './RatpHeader';
import './css/ratp-widget.css';

export let RatpWidget = React.createClass({
    getInitialState() {
      return {
        station: "",
        destination: "",
        schedules: [],
        loading: false
      }
    },
    componentDidMount: function() {
      this.fetchData();
    },
    fetchData: function() {
      let schedulesUrl = `http://api-ratp.pierre-grimaud.fr/v2/metros/${this.props.line}/stations/${this.props.station}?destination=${this.props.direction}`;
      let trafficUrl = `http://api-ratp.pierre-grimaud.fr/v2/traffic/metros/${this.props.line}`;
      this.setState({loading: true, message: "Chargement en cours", schedules: []});
      $.ajax({
        url: schedulesUrl,
        dataType: 'json',
        success: function(sData) {
          $.ajax({
            url: trafficUrl,
            dataType: 'json',
            success: function(tData) {
              if (this.isMounted()) {
                this.setState({
                  station: sData.response.informations.station.name,
                  destination: sData.response.informations.destination.name,
                  schedules: sData.response.schedules,
                  message: tData.response.message,
                  loading: false
                });
              }
            }.bind(this)
          });
        }.bind(this)
      });
    },
    render() {
        return (
          <div className={this.state.loading ? "loading" : ""}>
            <div className="ratp_container">
              <RatpHeader className="header" type="metro" line={this.props.line} station={this.state.station} direction={this.state.destination} />
              <ul className="schedules">
                {this.state.schedules.map(function(s, idx) {
                  return (
                    <li key={idx} className={(idx%2==0) ? "odd" : ""}>{s.message}</li>
                  );
                })}
              </ul>
              <RatpStatusBar message={this.state.message} />
            </div>
            <div className="refresh_btn" onClick={this.fetchData}>
              <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/reload-icon.png" />
            </div>
          </div>
        );
    }
});
