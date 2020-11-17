import React from 'react'

class MovieForm extends React.Component {
  state = {
    title: this.props.title || '',
    director: this.props.director || '',
    description: this.props.description || ''
  }
  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit({...this.state});
  }
  handleTitleUpdate = (evt) => {
    this.setState({title: evt.target.value});
  }
  handledirectorUpdate = (evt) => {
    this.setState({director: evt.target.value});
  }
  handleDescriptionUpdate = (evt) => {
    this.setState({description: evt.target.value});
  }
  render() {
    const buttonText = this.props.id ? 'Update Movie': 'Create Movie';
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>
            Title
          </label>
          <input type="text" placeholder="Enter a title"
            value={this.state.title} onChange={this.handleTitleUpdate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>
            director
          </label>
          <input type="text" placeholder="director's name"
            value={this.state.director} onChange={this.handledirectorUpdate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>
            Description
          </label>
          <textarea className="form-control" placeholder="Movie Description"
            rows="5" value={this.state.description}
            onChange={this.handleDescriptionUpdate}
          >
            {this.state.description}
          </textarea>
        </div>
        <div className="form-group d-flex justify-content-between">
          <button type="submit" className="btn btn-md btn-primary">
            {buttonText}
          </button>
          <button type="button" className="btn btn-md btn-secondary" onClick={this.props.onCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}

export default MovieForm
