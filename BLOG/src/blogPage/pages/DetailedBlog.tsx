import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import pix from "../../assets/image.jpg"
import { BsSave } from "react-icons/bs"
import { GrFormView } from "react-icons/gr"
import { AiOutlineLike } from "react-icons/ai"
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { readOneBlog, readUserBlog } from '../../utils/blogAPI'
import { useParams } from "react-router-dom"
import { readOneUser } from '../../utils/BlogAuthAPI'

const DetailedBlog = () => {
    const { id } = useParams()
    const location = useLocation()



    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" })
    }, [location])

    const { data } = useQuery({
        queryKey: ['blog', { id: id }],

        queryFn: () => readOneBlog(id!)
    })

    const { data: user } = useQuery({
        queryKey: ['user',],

        queryFn: () => readOneUser(data.userID!)
    })

    const { data: blog } = useQuery({
        queryKey: ['allBlog',],

        queryFn: () => readUserBlog(data.userID!)
    })

    console.log(blog)

    return (
        <div>
            <Container>
                <Main>
                    <Title>{data?.title}</Title>

                    <Sub>{data?.content}</Sub>

                    <Profile>
                        <Avatar src={pix} />
                        <Prof>
                            <Name>
                                Barack Obama

                            </Name>
                        </Prof>

                    </Profile>

                    <Image src={data?.image} />
                    <Content>{data?.content}</Content>

                    <br />
                    <br />
                    <br />
                    <Subb>More from </Subb>

                    <Holder>
                        {
                            blog?.map((props: any) => (
                                <CardHolder>
                                    <CardImage src={pix} />
                                    <CardProfile>
                                        <CardAvatar src={pix} />
                                        <CardName>Obama</CardName>
                                    </CardProfile>

                                    <CardTitle>Our Statements On the U.S. Supreme Court’s Decision To</CardTitle>

                                </CardHolder>
                            ))
                        }
                    </Holder>

                    <Bottom>
                        <div>
                            <Date>Jul 17</Date>
                            <Dot />
                            <Space />
                            <Read>4 min read</Read>
                            <Dot />
                            <Category>Design</Category>
                        </div>
                        <Icon />
                    </Bottom>
                    <Bottom>
                        <div>
                            <IconLike />
                            <Date>200</Date>

                            <Dot />
                            <Space />
                            <IconEye />
                            <Read>170</Read>


                        </div>

                    </Bottom>
                </Main>
            </Container>
        </div>
    )
}

export default DetailedBlog


const Holder = styled.div`
display: flex;
flex-wrap: wrap;
`

const Space = styled.div`
margin-left: 10px
`

const IconLike = styled(AiOutlineLike)`
font-size: 16px;
margin-bottom: 3px;
margin-right: 3px;
`

const IconEye = styled(GrFormView)`
margin-right: 3px;
font-size: 25px;
`
const Icon = styled(BsSave)`
font-size: 25px;
opacity: 0.7
`

const Read = styled.div`
font-weight: 600;
`
const Date = styled.div`

font-weight: 600;
`
const Category = styled.div`
padding: 8px 10px;
border-radius: 50px;
background-color: #e8e7e7;
margin-left: 10px;
font-weight: 600;
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
width: 300px;

div{
    display:flex;
    align-items: center;
   
}
`


const CardTitle = styled.div``

const CardName = styled.div`
font-weight: 600;
font-size: 12px
`

const CardAvatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px
`

const CardProfile = styled.div`
display:flex;
align-items: center;
margin: 10px 0
`

const CardImage = styled.img`
width: 100%;
height: 200px;
border-radius: 4px;
object-fit: cover;
`

const CardHolder = styled.div`
width: 300px;
display: flex;
flex-direction: column;
margin: 10px;
`


const Subb = styled.div`
font-weight: 600;
margin-bottom: 20px;
`

const Sub = styled.div`
font-size: 25px;
margin-bottom: 15px;
line-height: 1.2
`

const Image = styled.img`
width: 100%;
height: 600px;
border-radius: 7px;
object-fit: cover;
`

const Content = styled.div`
margin-top: 20px;
font-size: 20px
`

const Name = styled.div`
font-size: 18px
`

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
`

const Prof = styled.div`
margin-left: 10px
`

const Profile = styled.div`
display:flex;
align-items: center;
margin-bottom: 20px
`

const Title = styled.div`
font-weight: 900;
font-size: 45px;
line-height: 1.2;
margin-bottom: 20px;
`

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px ;


`

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
`