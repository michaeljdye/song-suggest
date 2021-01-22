import {FC, useState} from 'react'

const SignUp: FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="email"></label>
                    <input value={email} id="email" name="email" type="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input value={password} id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp
