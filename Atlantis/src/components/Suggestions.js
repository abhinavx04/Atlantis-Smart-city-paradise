import React from "react";
import "./css/complaints-suggestions.css";

function Suggestions() {
  return (
		<div className="suggestions">
			<section className="header">
				<div className="container">
					<h1 className="suggestions-title"> Suggestion Form </h1>
					<form
						className="suggestions-form"
						action="http://localhost:8000/suggestions/create/"
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
									<input
										type="number"
										placeholder="82735****"
										name="phone_number"
									/>
								</td>
							</tr>
							<tr>
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
									<button className="button-suggestions" type="SUBMIT">
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

export default Suggestions;
