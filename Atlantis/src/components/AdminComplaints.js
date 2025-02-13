import React from "react";
import "./css/admin-complaints-suggestions.css";

class AdminComplaints extends React.Component {
  constructor(props) {
    super(props)
		this.state = {
      complaints: [],
		}
	}
	componentDidMount() {
    fetch('http://localhost:8000/complaints/')
    .then(async (res) => await res.json())
    .then((complaints) =>
    this.setState((state) => {
      return state.complaints.push(complaints)
    })
    )
	}
	setComplaints() {
    return this.state.complaints.map((el) => {
      console.log(el)
			return el.map((complaints) => {
        return (
					<table className="admin-complaints-table">
						<tr>
							<td>
								<b>Name :</b>
							</td>
							<td></td>
							<td>{complaints.fields.user}</td>
						</tr>
						<tr>
							<td>
								<b>Email :</b>
							</td>
							<td></td>
							<td>{complaints.fields.email}</td>
						</tr>
						<tr>
							<td>
								<b>Contact No. :</b>
							</td>
							<td></td>
							<td>{complaints.fields.contact}</td>
						</tr>
						<tr>
							<td>
								<b>Aadhar Id:</b>
							</td>
							<td></td>
							<td>{complaints.fields.aadhar}</td>
						</tr>
						<tr>
							<td>
								<b>Details :</b>
							</td>
							<td></td>
							<td>{complaints.fields.description}</td>
						</tr>
					</table>
				)
      })
    })}
    render(){
  return (
    <div className="admin-complaints">
      <header className="admin-complaints-header">
        <h1 className="admin-complaints-h1">
          Admin Complaints Page
        </h1>
        <br />
      </header>
      <div className="admin-complaints-body">
      {this.setComplaints()}
      </div>
    </div >
  );
  }
}

export default AdminComplaints;
