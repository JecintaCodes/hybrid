import React from 'react'
import { styled } from 'styled-components'

const Sider = () => {
    return (
        <div>
            <Main>
                <Title>Discover more of what matters to you</Title>

                <Card>
                    <Button>Programming</Button>
                    <Button>Programming</Button>
                    <Button>Programming</Button>
                    <Button>Programming</Button>
                </Card>
            </Main>
        </div>
    )
}

export default Sider

const Button = styled.div`
padding: 10px 18px;
border-radius: 50px;
background-color: #f2f1f1;
margin: 5px;
`

const Card = styled.div`
display: flex;
flex-wrap: wrap;
`


const Title = styled.div`
font-weight: 600;
font-size: 20px;
`
const Main = styled.div`
margin-left: 40px;
width: 500px;
`