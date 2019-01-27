import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Notes extends Component {
  render() {
    return (
      <div className="App">
        <center>
          <h1>{this.props.count}</h1>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    count: state.count
  };
}

export default connect(mapStateToProps)(Notes);