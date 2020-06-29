import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    const urlForImageTag = `https://image.tmdb.org/t/p/w185${this.props.moviePoster}`
    return (
      <li class="list-group-item">
        <div class="media">
          <img src={urlForImageTag} />
          <div class="media-body">
            <h5 class="mt-0">{this.props.title}</h5>
            <p>{this.props.plotOverview}</p>
          </div>
        </div>
      </li>
    )
  }
}
