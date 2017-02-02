import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Profile extends Component {
  renderSpinner() {
    return (
      <div>
        <img src="loading-bars.svg"></img>
        <h1>Loading...</h1>
      </div>
    );
  }

  render() {
    console.log(this.props)
    return (
      <div className="Profile">
        <div className="profile-container">
          {
            this.props.loading ?
            this.renderSpinner() :
            null
          }
        </div>
        <div className="button-container">

          <button
            className="btn btn-warning btn-lg"
            onClick={this.props.fetchProfile} >
            Click this Button
          </button>
        </div>

      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return {loading: state.loading}
}

export default connect(mapStateToProps, actions)(Profile);
