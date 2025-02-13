import React from "react";
import "./css/admin-announcements.css";

class AdminAnnouncements extends React.Component {
  render(){
  return (
		<div className="admin-announcements">
			<section className="header">
				<div className="container">
					<h1 className="admin-announcement-h1">Announcements</h1>
					<form
						className="announcement-form"
						action="http://localhost:8000/announcements/create/"
            method="POST"
					>
						<table>
							<tr>
								<td>Subject:</td>
								<td>
									<input type="text" placeholder="Heading" name="subject"></input>
								</td>
							</tr>
							<tr>
								<td>Name:</td>
								<td>
									<input type="text" placeholder="Enter Full Name" name="name"></input>
								</td>
							</tr>
							<tr>
								<td>Date:</td>
								<td>
									<input type="date" placeholder="DD/MM/YY" required name="date"></input>
								</td>
							</tr>
							<tr>
								<td>Announcement:</td>
								<td>
									<textarea
										name="message"
										placeholder="Write here..."
										required
									></textarea>
								</td>
							</tr>
							<tr>
								<td>
									<button className="button-announcement" type="SUBMIT">
										Send
									</button>
								</td>
							</tr>
						</table>
					</form>
				</div>
			</section>
		</div>
	)
  }
}

export default AdminAnnouncements;
