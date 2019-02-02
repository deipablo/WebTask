import React, { Component } from 'react';
//import '../App.css';

class SingleImage extends React.Component {
    constructor(props) {
        super(props)
        this.siClickHandler = this.siClickHandler.bind(this)
    }
    siClickHandler(image) {
        if (this.props.selectImage) {
            this.props.selectImage(image)
        }
    }
    render() {
        return (
            <img className={this.props.className} src={this.props.image} alt={this.props.image} onClick={() => this.siClickHandler(this.props.image)} />
        )
    }
}

class ImageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedImage: this.props.AllImages
        }
        this.selectImage = this.selectImage.bind(this)
    }
    selectImage(image) {
        this.setState({ selectedImage: image })
        this.props.selectImage(image)
    }

    render() {
        return (
            <span>
                {this.props.AllImages.map(singleimg =>
                    <SingleImage key={singleimg} className={this.props.childClass} image={singleimg} selectImage={this.selectImage}></SingleImage>
                )}
            </span>
        )
    }
}

// class ImageGallery extends Component {
//     constructor(props) {
//         super(props)
//         this.state ={
//              SelectedImage: this.props.AllImages[0]
//          }

//     }



//     render(){
//         return(
//             <div >
//                 <div >
//                     <img className='main-image' src={process.env.PUBLIC_URL + this.state.SelectedImage}/>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ImageGallery;
export { ImageList, SingleImage };