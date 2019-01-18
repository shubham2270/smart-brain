import React from 'react';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            name:''
        }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        return (
            <div className='d-flex justify-content-center align-items-center wrapper'>
                 <div className='card p-5'>
                 <form action="#">
                <div className="form-group h5">
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                className="form-control form-control1" 
                id="name" 
                onChange={this.onNameChange}
                />
            </div>
                <div className="form-group h5">
                    <label htmlFor="email">Email address:</label>
                    <input 
                    type="email" 
                    className="form-control form-control1" 
                    id="email" 
                    onChange={this.onEmailChange}
                    />
                </div>
                <div className="form-group h5">
                    <label htmlFor="pwd">Password:</label>
                    <input 
                    type="password" 
                    className="form-control form-control1" 
                    id="pwd" 
                    onChange={this.onPasswordChange}
                    />
                </div>
                <button onClick={this.onSubmitSignIn} type="button" className="btn btn-success">Register</button>
              </form>
            </div>
            </div>  
    );
    }
      
}

export default Register;