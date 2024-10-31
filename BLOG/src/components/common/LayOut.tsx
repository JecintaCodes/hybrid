import React, { useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import Sider from './Sider'
import { styled } from 'styled-components'
import Header from './Header'

const LayOut = () => {
    const location = useLocation()

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" })
    }, [location])

    return (
        <div>
            <Header />
            <Main>
                <Outlet />
                <Sider />
            </Main>
        </div>
    )
}

export default LayOut



const Main = styled.div`
display: flex;
justify-content: center;
width: 100%;
flex-wrap: wrap;

@media screen and (max-width: 1160px){
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}
`