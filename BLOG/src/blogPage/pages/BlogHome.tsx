import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { BsSave } from "react-icons/bs"
import pix from "../../assets/image.jpg"
import { GrFormView } from "react-icons/gr"
import { AiOutlineLike } from "react-icons/ai"
import { useQuery } from '@tanstack/react-query'
import { readBlog } from '../../utils/blogAPI'
import { readOneUser, readUsers } from '../../utils/BlogAuthAPI'
import { Link } from 'react-router-dom'

interface iProps {
    id?: string
}

const UserProfile: React.FC<iProps> = ({ id }) => {
    const [user, setUser] = useState<any>({})
    console.log(id)

    const getUser = () => {
        if (!id) {
            return
        }
        readOneUser(id!).then((res) => {
            setUser(res)
        })
    }
    useEffect(() => {
        getUser()
    })



    return <div>
        <Top >
            <Avatar src={user?.avatar ? user?.user : pix} />
            <Name>{user.userName ? user.userName : "Peter Pan"}</Name>
        </Top>
    </div>
}



const BlogHome = () => {

    const { data: post } = useQuery({
        queryKey: ['blog'],
        queryFn: readBlog,
        refetchInterval: 1000
    })

    // const { data: user } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: readUsers,
    //     refetchInterval: 1000
    // })

    return (
        <div>
            <Container>
                <Main>

                    {
                        post?.map((props: any) => (
                            <Mid key={props._id} to={`/${props._id}/read`}  >
                                <Left>
                                    <UserProfile id={props.userID} />

                                    <Title>{props.title}</Title>
                                    <Sub>{props.content}</Sub>
                                    <Bottom>
                                        <div>
                                            <Date>Jul 17</Date>
                                            <Dot />
                                            <Read>4 min read</Read>
                                            <Dot />
                                            <Category>{props.category}</Category>
                                        </div>
                                        <Icon />
                                    </Bottom>
                                </Left>
                                <Image src={props.image ? props.image : pix} />
                            </Mid>
                        ))
                    }
                </Main>
            </Container>
        </div>
    )

}

export default BlogHome

const Image = styled.img`
object-fit: cover;
width: 200px;
height: 200px;
border-radius: 5px;
background-color: purple;
margin-left: 20px;
`

const Icon = styled(BsSave)`
font-size: 25px;
opacity: 0.7
`

const Read = styled.div`
 margin-left: 10px
`

const Date = styled.div``
const Category = styled.div`
padding: 8px 10px;
border-radius: 50px;
background-color: #e8e7e7;
margin-left: 10px;
text-transform: capitalize;
`
const Dot = styled.div`
width:5px;
height:5px;
border-radius: 50%;
background-color: silver;
margin-left: 10px;
`

const Bottom = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
font-size: 13px;

div{
    display:flex;
    align-items: center;
   
}
`

const Sub = styled.div`
font-size: 18px;
width: 400px;
margin-bottom: 15px;
color: #555454
`

const Title = styled.div`
font-weight: 700;
font-size: 23px;
max-width: 400px;
letter-spacing: 1px;
line-height: 1.1;
margin-bottom: 10px;
`

const Left = styled.div``

const Mid = styled(Link)`
display:flex;
align-items: center;
min-height: 230px;
margin: 20px 0;
text-decoration: none;
color: black
`


const Name = styled.div`
font-size: 13px;
margin-left: 7px;
font-weight: bold
`

const Avatar = styled.img`
object-fit: cover;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: purple
`

const Top = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px
`

const Main = styled.div`

`

const Container = styled.div`
/* width: 300px; */

`