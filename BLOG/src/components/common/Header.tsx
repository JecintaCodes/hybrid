import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { logOut } from '../../global/globalState'

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)
    return (
        <div>
            <Main>
                <Title>Let's Start</Title>
                {
                    user ? <ButtonOut onClick={() => {
                        dispatch(logOut())
                    }} >Log out</ButtonOut> : <Button to="/blog-register" >Register</Button>
                }
            </Main>
        </div>
    )
}

export default Header

const Button = styled(Link)`
margin-top: 10px;
padding:10px 18px;
background-color: white;
color: purple;
border-radius: 5px;
font-size: 20px;
font-weight: 600;
cursor: pointer;
text-decoration: none;
`;


const ButtonOut = styled.div`
margin-top: 10px;
padding:10px 18px;
background-color: white;
color: purple;
border-radius: 5px;
font-size: 20px;
font-weight: 600;
cursor: pointer;
text-decoration: none;
`

const Title = styled.div`
font-weight: 700;
font-size: 50px
`


const Main = styled.div`
width: 100%;
height: 500px;
background-color: purple;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
flex-direction: column;
`