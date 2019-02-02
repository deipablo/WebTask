import React from 'react';
import { ImageList, SingleImage } from './Image_Components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CarDetails extends React.Component {
  render() {
    return (
      <div className="car-details">
        <div className="flex-block">
          <div className="block-flex" style={{ paddingLeft: 40 }}>
            <span>
              <h4 className="big-text big-gap dark-gray mobile-details-title" style={{ paddingTop: 48 }}>{this.props.details.model}</h4>
              <h4 className="small-text small-gap light-gray">Year</h4>
              <h4 className="mid-tFext mid-gap dark-gray">{this.props.details.year}</h4>
              <h4 className="small-text small-gap light-gray">Price Range</h4>
              <h4 className="mid-text mid-gap dark-gray">${this.props.details.price_range_low} - ${this.props.details.price_range_high}</h4>
              <h4 className="small-text small-gap light-gray">Mileage</h4>
              <h4 className="mid-text big-gap dark-gray">{this.props.details.mileage} Miles</h4>
            </span>
            <span className="mobile-details-leftcol-padding">
              <h4 className="small-text small-gap light-gray">Item Number: {this.props.details.item_number}</h4>
              <h4 className="small-text big-gap light-gray">VIN: {this.props.details.vin}</h4>
              <h4 className="small-text big-gap light-gray">Share this car <FontAwesomeIcon icon="envelope" /></h4>
              <div className="flex-block">
                <span style={{ width: 80 }}>
                  <h4 className="small-text small-gap light-gray">Views</h4>
                </span>
                <span style={{ width: 80 }}>
                  <h4 className="small-text small-gap light-gray nomobile">Saves</h4>
                </span>
                <span style={{ width: 80 }}>
                  <h4 className="small-text small-gap light-gray nomobile">Shares</h4>
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: 80 }}>
                  <h4 className="mid-text light-green" >{this.props.details.views}</h4>
                </span>
                <span style={{ width: 80 }}>
                  <h4 className="mid-text light-green nomobile">{this.props.details.saves}</h4>
                </span>
                <span style={{ width: 80 }}>
                  <h4 className="mid-text light-green nomobile">{this.props.details.shares}</h4>
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    )
  }

}

class CarDetailsConfiguration extends React.Component {
  renderDetail(title, value) {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <span className="width-70" style={{ display: "content" }}>
            <h4 className="mid-text mid-gap light-gray width-70">{title}</h4>
          </span>
          <span className="width-30" style={{ display: "content" }}>
            <h4 className="mid-text mid-gap dark-gray width-30">{value}</h4>
          </span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="detail-configuration">
        <h4 className="mid-text light-gray mid-mid-gap">{this.props.config.name.toUpperCase()}</h4>
        {this.renderDetail("Cylinders", this.props.config.cylinders)}
        <hr className="light-gray" />
        {this.renderDetail("City MPG", this.props.config.cityMPG)}
        <hr className="light-gray" />
        {this.renderDetail("Highway MPG", this.props.config.highwayMPG)}
        <hr className="light-gray" />
        {this.renderDetail("Engine", this.props.config.motor)}
      </div>
    )
  }
}

class CarDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      details: []
    }
    this.selectImage = this.selectImage.bind(this)
  }

  componentDidMount() {
    fetch(this.props.restapi + this.props.carid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            details: result[0],
            selectedImage: result[0].images[0]
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  selectImage(selection) {
    this.setState({
      selectedImage: selection
    })
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <div className="flex-block">
            <span>
              <SingleImage className="main-image" image={this.state.selectedImage}></SingleImage>
            </span>
            <span>
              <CarDetails details={this.state.details}></CarDetails>
            </span>
          </div>
          <div className="just-mobile" style={{ backgroundColor: "#efeff2", width: '100%', padding: 8 }}>
            <span className="call-us-button">CALL US</span>
          </div>
          <div className="nomobile" style={{ paddingTop: 32 }}>
            <ImageList childClass="thumbnail-image" AllImages={this.state.details.images} selectImage={this.selectImage}></ImageList>
          </div>
          <div className="details-configuration-block flex-block">
            {this.state.details.configurations.map(singleconfig =>
              <span key={singleconfig.name + "span"} style={{ width: 480, height: 296, padding: 8 }}>
                <CarDetailsConfiguration key={singleconfig.name} config={singleconfig}></CarDetailsConfiguration>
              </span>
            )}

          </div>
        </div>
      );
    } else {
      return null
    }
  }
}

export { CarDetailsComponent };