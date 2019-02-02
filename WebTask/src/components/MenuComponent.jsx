import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MenuComponent extends React.Component {
    render() {
        return (
            <div className="navigation-bar">
                <span className="nomobile" style={{ alignSelf: "flex-end", textAlign: "center", fontSize: 12, width: 50, padding: 24, paddingBottom: 16, display: "inline-block" }}><FontAwesomeIcon icon="search" /></span>
                <span className="navigation-button"><FontAwesomeIcon icon="map-marker" /></span>
                <span className="navigation-button"><FontAwesomeIcon icon="phone" /></span>
                <span className="navigation-button nomobile"><FontAwesomeIcon icon="clock" /></span>
            </div>
        )
    }
}

export { MenuComponent };