import React from 'react';

export let RatpStatusBar = React.createClass({
    getCurrentTime() {
        let currentDate = new Date();
        return currentDate.toTimeString().replace(/.*(\d{2}:\d{2})(:\d{2}).*/, "$1");
    },
    render() {
        return (
            <div className="status_bar">
                <div>{this.getCurrentTime()} - {this.props.message}</div>
            </div>
        );
    }
});
