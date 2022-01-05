import React from 'react';
import RelatedModal from './RelatedModal';

class OutfitCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      visibility: 'hidden'
    });
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.state.visibility === 'hidden') {
      this.setState({
        visibility: 'visible'
      });
    } else {
      this.setState({
        visibility: 'hidden'
      });
    }
  }

  render() {
    if (this.state.visibility === 'hidden') {
      return (
        <div>
          <div className="Card" onClick={this.clickHandler} >

            <span onClick={() => console.log('hi')}>
              <i class="fas fa-x relX"></i>
            </span>
            <div className="relatedPicHolder" onClick={this.props.show}>
              <img className="relatedPic" src={this.props.data ? this.props.data.picture : null}></img>
            </div>
            <div className="relatedTextHolder">
              <p id="relatedCategory">{this.props.data ? this.props.data.category : 'Undefined'}</p>
              <h3>{this.props.data ? this.props.data.name : 'Are not there'}</h3>
              <p>{this.props.data ? this.props.data.price : 'Undefined'}</p>
              <p>{this.props.data ? this.props.data.reviews : 'Undefined'}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Card" onClick={this.clickHandler} >

            <span onClick={() => console.log('hi')}>
              <i class="fal fa-x relX"></i>
            </span>
            <div className="relatedPicHolder" onClick={this.props.show}>
              <img className="relatedPic" src={this.props.data ? this.props.data.picture : null}></img>
            </div>
            <div className="relatedTextHolder">
              <p id="relatedCategory">{this.props.data ? this.props.data.category : 'Undefined'}</p>
              <h3>{this.props.data ? this.props.data.name : 'Are not there'}</h3>
              <p>{this.props.data ? this.props.data.price : 'Undefined'}</p>
              <p>{this.props.data ? this.props.data.reviews : 'Undefined'}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default OutfitCards;