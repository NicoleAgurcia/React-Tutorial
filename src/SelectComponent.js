import React, {Component} from 'react';
import moviesApi from './database/moviesApi';

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      foundMovie: {},
    };
  }
  componentDidMount() {
    let moviesFilteredInformation = moviesApi.map((movies) => {
      return {
        moviesId: movies.id,
        moviesName: movies.title,
        moviesImage: movies.image,
        moviesDescription: movies.description,
      };
    });
    this.setState({movies: moviesFilteredInformation, foundMovie: moviesFilteredInformation[0]});
  }
  onMoviesChange = (movie) => {
    const selectedMovieId = movie.target.value;
    let foundMovieOther = moviesApi.find(element => element.id === selectedMovieId);
    console.log(movie.target.value);
    if (foundMovieOther === undefined) {
      foundMovieOther = {
        title: "Not Found Movie",
      }
    }
    console.log(foundMovieOther);
    this.setState({foundMovie: foundMovieOther});
  };
  
  // testFunction = () => {
  //   return(
  //     <p>test</p>
  //   )
  // };

  render() {
    console.log(this.state)
    return (
      <div>
        <label>Choose a movie:</label>

        <select onChange={this.onMoviesChange} id="movies">
          {this.state.movies.map((movie) => {
            return  <option value={movie.moviesId}>{movie.moviesName}</option>
          })}
          ;
        </select>
        {/* {this.testFunction()} */}
        <div>
          <h1>{this.state.foundMovie.title}</h1>
          {/* <img width="200" src={this.state.foundMovie.image} /> */}
          <p>{this.state.foundMovie.description}</p>
        </div>
      </div>
    );
  }
}

SelectComponent.propTypes = {};

export default SelectComponent;
