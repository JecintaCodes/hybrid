import styled from "styled-components"


const Header = ()=>{
    return (
        <div>
            <Container>
                <Main>
                    <NavHolder>
                        <Logo>u</Logo>
                        <Navigation>
                            <Nav>auth</Nav>
                            <Nav>todo</Nav>
                        </Navigation>
                    </NavHolder>
                </Main>
            </Container>
        </div>
    )   
}

export default Header



// const Container = styled.div``
const Nav = styled.div`
display: flex;
margin-left: 25px;
background-color: darkOrange;
    width: 60px;
    height: 30px;
    display:flex;
justify-content: center;
align-items: center;
border-radius: 2px;
font-size: bold;

:hover{
    cursor:pointer;
    
color: white;
}
`
const Navigation = styled.div`
display: flex;
margin-left: 100px;

`
const Logo = styled.div`
margin-left:20px;
background-color: darkorange;
height: 30px;
padding: 5px;
border-radius: 50%;
color: white;
width: 30px;
display:flex;
justify-content: center;
align-items:center;
font-size: 25px;
font-weight: bold;
cursor:pointer;
`
const NavHolder = styled.div`
display: flex;

text-transform: uppercase;
`
const Main = styled.div`
width: 90%;
display:flex;
align-items:center;
border:1px solid silver;
height: 100px;
padding: 5px;
`
const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
`