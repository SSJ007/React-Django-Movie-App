import React from 'react'
import MovieForm from './MovieForm'
// index.js

class ToggleableMovieForm extends React.Component {
  state = {
    inCreateMode: false
  }
  handleCreateClick = () => {
    this.setState({inCreateMode: true});
  }
  leaveCreateMode = () => {
    this.setState({inCreateMode: false});
  }
  handleCancleClick = () => {
    this.leaveCreateMode();
  }
  handleFormSubmit = (movie) => {
    this.leaveCreateMode();
    this.props.onMovieCreate(movie);
  }
  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
          <MovieForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancleClick}></MovieForm>
        </div>

      )
    }
    return (
      <button onClick={this.handleCreateClick} className="btn btn-secondary">
        <i className="fas fa-plus"></i>
      </button>
    );
  }
}

export default ToggleableMovieForm
