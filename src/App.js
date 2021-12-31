import './App.css';
import { Component } from 'react';
import MovieForm from './components/MovieForm';
import Search from './components/Search';
import MovieLists from './components/MovieLists';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movieList: [],
      noDataFound: false
    }
  }
  onHandleSubmit = (movieData) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movieData],
      movieList: [...prevState.movies, movieData]
    }));
  }
  onHandleSearch = (value) => {
    const { movies } = this.state;
    const newMovieData = value.length >= 2 ? movies.filter(i => i.movie.toLowerCase().includes(value.toLowerCase())) : movies;
    const isDataAvailable = value.length >= 2 && newMovieData.length === 0;
    this.setState({ movieList: newMovieData, noDataFound: isDataAvailable });
  }
  render() {
    const { movieList, noDataFound } = this.state;
    return (
      <div className="App">
        <h3 className="App-header">The Favorite Movie Directory</h3>
        <div className="container">
          <div className="movieLeft">
            <MovieForm onHandleSubmit={this.onHandleSubmit} />
          </div>
          <div className="movieRight">
            <Search onHandleSearch={this.onHandleSearch} />
            {movieList && movieList.length > 0 && <MovieLists movies={movieList} />}
            {noDataFound && <h3 className="no-data-found">No Data Found</h3>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
