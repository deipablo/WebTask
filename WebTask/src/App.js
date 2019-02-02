import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPhone, faMapMarker, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { MenuComponent } from './components/MenuComponent'
import { CarDetailsComponent } from './components/CarDetailsComponent'

library.add({ faSearch, faClock, faMapMarker, faPhone, faEnvelope })

class App extends Component {
  render() {
    return (
      <div>
        <MenuComponent />
        <CarDetailsComponent onClick={this.selectImage} carid="1"/>
      </div >
    );
  }
}

export default App;
