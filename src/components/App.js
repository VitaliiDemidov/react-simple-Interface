import React, { Component } from 'react';
import '../css/App.css';
import SearchAppointments from './SearchAppointments'
import ListAppointments from './ListAppointments'

import AddAppointments from './AddAppointments'

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointmants: [],
      lastIndex: 0
    }
  }
  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex
          this.setState({ lastIndex: this.state.lastIndex + 1 })
          return item
        })
        this.setState({
          myAppointmants: apts
        })
      })

  }


  render() {

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments appointmants={this.state.myAppointmants} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
