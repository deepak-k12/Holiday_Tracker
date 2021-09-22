import React, { Component } from 'react'
import axios from 'axios';
import PopUp from './popUp';

import './Style.css';
class App extends Component {

  state = {
    events:[],
    title: '',
    date: '',
    notes: '',
    showPopup: false,
    
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    axios.get('https://www.gov.uk/bank-holidays.json')
    .then((response) => {
      console.log(response.data)
      let ev = [];
      let { events } = response.data.scotland
      for(let i = 0;i < events.length;i++)
      {
        ev.push(events[i])
      }
      this.setState({events:ev})
    })
  }

  togglePopup(event) {
    this.setState({
      title: event.title,
      date: event.date,
      notes: event.notes,
      showPopup: !this.state.showPopup
    });
  }

  render() {
    
    const event_array = Object.values(this.state.events)

    return (
      <div>
        <center><h1>Holiday Tracker</h1></center>
        <div>
        {event_array.map(event =>
        <div className="eventDiv" style={{cursor: "pointer" }} onClick={() => this.togglePopup(event)}>
          {event.title}
        </div>
        )}
        <div>
      </div>
    </div>

    {this.state.showPopup ? 
          <PopUp
            title = {this.state.title}
            date = {this.state.date}
            notes = {this.state.notes}
            text = 'Event Details'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}

export default App;
