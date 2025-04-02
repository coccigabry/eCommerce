import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { mobile } from '../responsive/responsive'
import { login } from '../redux/features/apiCalls'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), 
        url('https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center / cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

    ${mobile({
    width: '75%',
})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

    &:disabled{
        border: none;
        background-color: lightgrey;
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const { isFetching, error } = useSelector(store => store.user)

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }


    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                    {
                        error &&
                        <Error>Something went wrong</Error>
                    }
                    <Link>Forgot your password?</Link>
                    <Link>Create an account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login