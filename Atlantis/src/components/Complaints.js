import React from "react";
import "./css/complaints-suggestions.css";

function Complaints() {
  return (
		<div className="complaints">
			<section className="header">
				<div className="container">
					<h1 className="complaints-title"> Complaint Form </h1>
					<form
						className="complaints-form"
						action="http://localhost:8000/complaints/create/"
						method="POST"
					>
						<table>
							<tr>
								<td>Name:</td>
								<td>
									<input type="text" placeholder="Full Name" name="full_name" />
								</td>
							</tr>
							<tr>
								<td>Aadhar:</td>
								<td>
									<input type="number" placeholder="Aadhar no." name="aadhar" />
								</td>
							</tr>
							<tr>
								<td>E-mail:</td>
								<td>
									<input type="mail" placeholder="Email" name="email" />
								</td>
							</tr>
							<tr>
								<td>Contact no.</td>
								<td>
									<select>
										<option>+91</option>
										<option>+1</option>
										<option>+973</option>
										<option>+91</option>
										<option>+86</option>
										<option>+93</option>
									</select>
									<input type="number" placeholder="82735****" name="contact" />
								</td>
							</tr>
							<tr>
								<td>Charges:</td>
								<td>
									<input type="radio" name="Charges" /> Robbery
									<input type="radio" name="Charges" /> Mental / Physcial
									Harassment
									<br />
									<input type="radio" name="Charges" /> Violation of Health Code
									<input type="radio" name="Charges" /> Others
									<br />
								</td>
							</tr>
							<tr>
								<td>Details:</td>
								<td>
									<textarea
										name="message"
										placeholder="Write Here..."
										required
									></textarea>
								</td>
							</tr>
							<tr>
								<td>
									<button className="button-complaint" type="SUBMIT">
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

export default Complaints;
