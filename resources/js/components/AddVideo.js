import axios from 'axios'
import React, { Component } from 'react'

class NewVideo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      vid: '',
      errors: []
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleAddNewVideo = this.handleAddNewVideo.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
  }

  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAddNewVideo (event) {
    event.preventDefault()

    const { history } = this.props

    const video = {
      title: this.state.title,
      vid: this.state.vid
    }

    axios
      .post('/api/videos', video)
      .then(response => {
        // reload to add another one
        window.location.reload()
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }

  render () {
    return (
      <form onSubmit={this.handleAddNewVideo}>
        <ul class="list-group">
          <li class="list-group-item active">Add new video</li>

          <li class="list-group-item">
            <label htmlFor='title'>Video title</label>

            <input
              id='title'
              type='text'
              className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
              name='title'
              value={this.state.title}
              onChange={this.handleFieldChange}
            />
            {this.renderErrorFor('title')}
          </li>

          <li class="list-group-item">
            <label htmlFor='vid'>Video ID</label>

            <input
              id='vid'
              type='text'
              className={`form-control ${this.hasErrorFor('vid') ? 'is-invalid' : ''}`}
              name='vid'
              value={this.state.vid}
              onChange={this.handleFieldChange}
            />
            {this.renderErrorFor('vid')}
          </li>

          <li class="list-group-item"><button className='btn btn-primary'>Add</button></li>
      </ul>
    </form>
    )
  }
}

export default NewVideo
