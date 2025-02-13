import React from "react";
import "./css/admin-complaints-suggestions.css";

class AdminSuggestions extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			suggestions: [],
		}
	}
	componentDidMount() {
		fetch('http://localhost:8000/suggestions/')
			.then(async (res) => await res.json())
			.then((suggestions) =>
				this.setState((state) => {
					return state.suggestions.push(suggestions)
				})
			)
	}
	setSuggestions() {
		return this.state.suggestions.map((el) => {
			console.log(el)
			return el.map((suggestions) => {
				return (
					<table className="admin-suggestions-table">
						<tr>
							<td>
								<b>Name :</b>
							</td>
							<td></td>
							<td>{suggestions.fields.user}</td>
						</tr>
						<tr>
							<td>
								<b>Contact No. :</b>
							</td>
							<td></td>
							<td>{suggestions.fields.contact}</td>
						</tr>
						<tr>
							<td>
								<b>Aadhar Id:</b>
							</td>
							<td></td>
							<td>{suggestions.fields.aadhar}</td>
						</tr>
						<tr>
							<td>
								<b>Details :</b>
							</td>
							<td></td>
							<td>{suggestions.fields.description}</td>
						</tr>
					</table>
				)
			})
		})
	}
	render() {
		return (
			<div className="admin-suggestions">
				<header className="admin-suggestions-header">
					<h1 className="admin-suggestions-h1">Admin Suggestions Page</h1>
					<br />
				</header>
				<div className="admin-suggestions-body">
        {this.setSuggestions()}
				</div>
			</div>
		)
	}
}

export default AdminSuggestions;
