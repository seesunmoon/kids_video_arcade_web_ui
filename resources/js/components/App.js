import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddVideo from './AddVideo'
import VideosList from './VideosList'
import SingleVideo from './SingleVideo'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={VideosList} />
            <Route path='/add' component={AddVideo} />
            <Route path='/:vid' component={SingleVideo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
