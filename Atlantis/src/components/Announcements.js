import React from 'react'
import "./css/announcements.css";


class Announcements extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      announcements: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8000/announcements/')
      .then(async (res) => await res.json())
      .then((announcements) =>
        this.setState((state) => {
          return state.announcements.push(announcements)
        })
      )
  }
  setAnnouncements() {
    return (
      this.state.announcements.map((el) => {
        console.log(el)
        return (
          el.map((announcement) => {
            return (
              <div className="one-announcement">
                <div className="bold"> By {announcement.fields.name}, </div>
                <div className="bold"> {announcement.fields.date} </div>
                <br />
                <br />
                <div className="message">
                  {announcement.fields.description}
                </div>
                <br />
              </div>
            )
          })

        )
      })
    )
  }
  render() {
    return (
      <div className="announcements">
        <div className="announcements-heading">
          <h1 className="announcements-title">Announcements</h1>
        </div>
        {this.setAnnouncements()}
      </div>
    )
  }
}


export default Announcements;
