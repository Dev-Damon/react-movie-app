import React from "react";
import axios from "axios";
import Movie from "./Movies"

class App extends React.Component {
  state ={
    isLoading: true,
    movies: []
  };

  getMoives = async () => {
    const { 
      data : { 
        data : {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    
    console.log(movies);
    this.setState({movies, isLoading: false});
  };

  componentDidMount() {
    this.getMoives();
  }

  render() {
    const {isLoading, movies} = this.state;
    return <div>
      {isLoading
      ? "Loading.... "
      : movies.map(movie => (
        <Movie 
          key={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}          
        />
      ))}</div>;
  }
}

export default App;
