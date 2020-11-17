import React from 'react'
// import './MovieDashboard.css';
import MovieList from './components/MovieList'
import ToggleableMovieForm from './components/ToggleableMovieForm'

class MovieDashboard extends React.Component {
    state = {
      movies : []
      //   movies: [
      //       {
      //           id: 1,
      //           title: 'Django Unchained',
      //           director: 'Quentin Tarantino',
      //           description: `When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been captured by a hard-hearted plantation owner.`
      //       },
      //       {
      //           id: 2,
      //           title: 'The Wolf of Wall Street',
      //           director: 'Martin Scorsese',
      //           description: `Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.`
      //       }
      // ]
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/movies/')
            .then(response => response.json())
            .then(data => {
                this.setState({movies: data});
            });
    }

    createNewMovie = (movie) => {
        fetch('http://localhost:8000/api/movies/', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
        .then(response => response.json())
        .then(movie => {
            this.setState({movies: this.state.movies.concat([movie])});
        });
    }

    // createNewMovie = (movie) => {
    // movie.id = Math.floor(Math.random() * 1000);
    // this.setState({movies: this.state.movies.concat([movie])});
    // }

    updateMovie = (newMovie) => {
        fetch(`http://localhost:8000/api/movies/${newMovie.id}/`, {
            method: 'PUT',
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        }).then(response => response.json())
        .then(newMovie => {
            const newMovies = this.state.movies.map(movie => {
                if(movie.id === newMovie.id) {
                    return Object.assign({}, newMovie)
                } else {
                    return movie;
                }
            });
            this.setState({movies: newMovies});
        });
  }
//     updateMovie = (newMovie) => {
//
//     const newMovies = this.state.movies.map(movie => {
//         if(movie.id === newMovie.id) {
//               return Object.assign({}, newMovie)
//         } else {
//               return movie;
//         }
//     });
//       this.setState({movies: newMovies});
//     }

deleteMovie = (movieId) => {
    fetch(`http://localhost:8000/api/movies/${movieId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(() => {
        this.setState({movies: this.state.movies.filter(movie => movie.id !== movieId)})
    });
}

    // deleteMovie = (movieId) => {
    // this.setState({movies: this.state.movies.filter(movie => movie.id !== movieId)})
    // }

    render() {

        return (
          <div>
          <h2 style={{  display: 'flex', justifyContent: 'center',
  alignItems: 'center', padding:'20px'}}>React Django Movie App</h2>
            <main className="d-flex justify-content-center my-4">
                <div  className="col-5">
                    <MovieList
                        movies={this.state.movies}
                        onDeleteClick={this.deleteMovie}
                        onUpdateClick={this.updateMovie}
                    ></MovieList>
                    <ToggleableMovieForm
                        onMovieCreate={this.createNewMovie}
                    ></ToggleableMovieForm>
                </div>
            </main>
            </div>
        )
    }
}

export default MovieDashboard
