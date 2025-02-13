import React, { Component } from 'react'
import './css/landing.css'
import Logo from './Logo'

//component for LoginForm. used in App.js
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			aadhar: '',
		}
    localStorage.setItem(
      'user',null
    )
		this.handleInput = this.handleInput.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}
	//handles change in input.
	handleInput(e) {
		const target = e.target
		const value = target.value
		const name = target.name
		this.setState({
			[name]: value,
		})
	}

	//sends api request for GUNing
	submitForm(e) {
		e.preventDefault()
		let a_tag = document.getElementById('propagate')
		let form_data = new FormData()
		form_data.append('username', this.state.username)
		form_data.append('password', this.state.password)
		form_data.append('aadhar', this.state.aadhar)
		console.log(this)
		console.log(form_data)
		fetch('http://localhost:8000/users/', {
			method: 'POST',
			body: form_data,
		})
			.then(async (res) => await res.json())
			.then((json) => {
				console.log(json)
        localStorage.setItem('user',JSON.stringify(json))
				window.location.replace(window.location.href + 'home')
        console.log(localStorage.getItem('user'))
			})
	}
	render() {
		return (
			<React.Fragment>
				{/* Renders the form */}
				<div className="adjust-login">
					<a id="propagate" hidden></a>
					<div id="login-component">
						<div className="short-logo-center">
							{<Logo className="logo short-logo-center" />}
						</div>
						<h1 className="login-info">Login</h1>
						<section>
							<form
								className="login-form"
								onsubmit={this.handleSubmit}
								action="/home"
								id="form"
								method="POST"
							>
								<div className="login-entries">
									<div className="login-label">Username</div>
									<input
										name="username"
										autoComplete="off"
										className="login-fields"
										type="text"
										value={this.state.username}
										onChange={this.handleInput}
									/>
								</div>
								<div className="login-entries">
									<div className="login-label">Aadhar</div>
									<input
										name="aadhar"
										autoComplete="off"
										className="login-fields"
										type="text"
										value={this.state.aadhar}
										onChange={this.handleInput}
									/>
								</div>

								<div className="login-entries">
									<div className="login-label">Password</div>
									<input
										name="password"
										autoComplete="off"
										className="login-fields"
										type="password"
										value={this.state.password}
										onChange={this.handleInput}
									/>
								</div>
								<input
									class="form-submit"
									type="submit"
									value="Submit"
									onClick={this.submitForm}
								/>
							</form>
						</section>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Login
