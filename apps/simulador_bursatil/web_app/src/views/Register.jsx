import React, {useState} from 'react';
import axios from 'axios';

const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                name, email, password
            });

            if(response.status !== 200){
                alert(response.message);
                return false;
            }

            // Redirección al login si el usuario se registró correctamente
            window.location.href = '/login?'
        } catch (error) {
            // Error registering: error
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleRegister}>
                <input 
                    type='text'
                    placeholder='Name user'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input 
                    type='email'
                    placeholder='Write the email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;