import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      movies: []
    };
  }
  componentDidMount()
  {
    const baseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "bacc5608c580d34a8c1a8ade7ffa23ba";
    Axios.get(`${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res =>
    {
      console.log(res.data.results);
      this.setState({
        movies: res.data.results
      });
    });
  }
  render() {
    return (
      <div className="App">
        { 
          this.state.movies.map(movie => {
            return <h1>{movie.title}</h1>;
          })
          }
      </div>
    );
  }
}

export default App;
