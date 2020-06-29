import React, { Component } from 'react'
import { Movie } from './components/Movie'

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a6d1cf27a5747141f1db754bed4bc307'
    )

    const moviesFromApi = await response.json()
    // console.log(moviesFromApi.results)

    this.setState({ movies: moviesFromApi.results })
  }

  render() {
    const moviesToRender = this.state.movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.original_title}
        moviePoster={movie.poster_path}
        plotOverview={movie.overview}
      />
    ))
    return (
      <div class="container">
        <main>
          <h1>
            <span class="badge badge-danger">Movie Database</span>
          </h1>
          <ul>{moviesToRender}</ul>
        </main>
      </div>
    )
  }
}

export default App
