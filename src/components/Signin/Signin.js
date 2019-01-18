import React from 'react';
import './Signin.css';


class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signinEmail:'',
            signInPassword:''
        }
    }
    onEmailChange = (event) => {
        this.setState({signinEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.signinEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className='d-flex justify-content-center align-items-center wrapper'>
                 <div className='card p-5'>
                    <form action="action.php/">
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
                <button onClick={this.onSubmitSignIn} type="button" className="btn btn-primary">Signin</button>

               <p className='pointer btn btn-success mt-3 ml-4' onClick={() => onRouteChange('register')}>Register</p>
                </form>
            </div>
            </div>
        );
    }
        
}

export default Signin;