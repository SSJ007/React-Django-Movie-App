import React from 'react'
import Movie from './Movie'
import MovieForm from './MovieForm'

class MovieList extends React.Component {

  render() {
    const movies = this.props.movies.map(movie => (
      <EditableMovie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        director={movie.director}
        description={movie.description}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableMovie>
    ));
    return (
      <div>
        {movies}
      </div>
    );
  }
}


class EditableMovie extends React.Component {
  state = {
    inEditMode: false
  };
  enterEditMode = () => {
    this.setState({inEditMode: true});
  }
  leaveEditMode = () => {
    this.setState({inEditMode: false});
  }
  handleDelete = () => {
    this.props.onDeleteClick(this.props.id);
  }

  handleUpdate = (movie) => {
    this.leaveEditMode()
    movie.id = this.props.id;
    this.props.onUpdateClick(movie);
  }
  render() {
    const component = () => {
      if(this.state.inEditMode) {
        return (
          <MovieForm
            id={this.props.id}
            title={this.props.title}
            director={this.props.director}
            description={this.props.description}
            onCancelClick={this.leaveEditMode}
            onFormSubmit={this.handleUpdate}
          />
        );
      }
      return (
        <Movie
          title={this.props.title}
          director={this.props.director}
          description={this.props.description}
          onEditClick={this.enterEditMode}
          onDeleteClick={this.handleDelete}
        />
      )
    }
    return (
      <div className="mb-3 p-4" style={{boxShadow: '0 0 10px #ccc'}} >
        {component()}
      </div>
    )
  }
}

export default MovieList
