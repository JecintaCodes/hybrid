import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from 'react-router-dom'
import pix from "../../assets/image.jpg"
import { BlogCeateUser } from '../../utils/BlogAuthAPI'

const BlogRegister = () => {

    const navigate = useNavigate()
    const schema = yup.object({
        userName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")]),

    })
    const [image, setImage] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleUpload = (e: any) => {
        const file = e.target.files[0]
        const readImage = URL.createObjectURL(file)
        setImage(readImage)
        setAvatar(file)

    }



    const {
        register,
        formState: { errors },
        handleSubmit,
        reset } = useForm({
            resolver: yupResolver(schema)
        })

    const onSubmit = handleSubmit(async (res: any) => {
        const { userName, email, password, } = res

        const formData = new FormData()
        formData.append("userName", userName)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("avatar", avatar)

        BlogCeateUser(formData)

        reset()
        navigate("/blog-sign-in")
    })


    return (
        <div>
            <Container>
                <Main>
                    <Card onSubmit={onSubmit} >
                        <Title>Sign Up</Title>

                        <ImageHolder>
                            <Image src={image ? image : pix} />
                            <ImageInput type="file" id="id" onChange={handleUpload} />
                            <ImageLabel htmlFor='id' >Upload Image</ImageLabel>
                        </ImageHolder>


                        <InputHolder>
                            <InputText>User Name</InputText>
                            <Input placeholder="User Name"
                                {...register("userName")}
                            />
                            {errors.userName && <Error>user name Error</Error>}
                        </InputHolder>

                        <InputHolder>
                            <InputText>Email</InputText>
                            <Input placeholder="Email" {...register("email")} />
                            {errors.email && <Error>email error</Error>}
                        </InputHolder>

                        <InputHolder>
                            <InputText>Password</InputText>
                            <Input placeholder="Password" {...register("password")} />
                            {errors.email && <Error>password error</Error>}
                        </InputHolder>

                        <InputHolder>
                            <InputText>Confirm</InputText>
                            <Input placeholder="Confirm" {...register("confirm")} />
                            {errors.email && <Error>password must match</Error>}
                        </InputHolder>


                        <Button type="submit" bg="p" >Sign Up</Button>

                        <TextHolder>
                            <Line />
                            <MyText>or</MyText>
                            <Line />
                        </TextHolder>

                        <Link
                            style={{ textDecoration: "none", color: "#220122 " }}
                            to="/sign-in"
                        >
                            <Button >Sign In</Button></Link>

                    </Card>

                </Main>
            </Container>
        </div>
    )
}

export default BlogRegister


const ImageLabel = styled.label`
padding: 10px 18px;
border-radius: 30px;
background-color: purple;
color: white;
margin-top: 10px
`

const ImageInput = styled.input`
display: none;
`

const ImageHolder = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 100%;
align-items: center;
`

const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
border: 1px solid purple

`

const MyText = styled.div`
margin: 0 5px
`

const Line = styled.div`
height: 1px;
width: 100%;
background-color: #837583
`

const TextHolder = styled.div`
display:flex;
width: 99%;
align-items: center;
`

const Button = styled.button<{ bg?: string }>`
width: 99%;
height: 40px;
justify-content: center;
align-items: center;
display:flex;
background-color: ${({ bg }) => bg ? "#590059" : "dodgerblue"};

color: white;
border-radius: 3px;
cursor: pointer;
border: 0;
outline: none;
font-family: Poppins;
font-size: 15px;
margin-top: 20px;

`

const Error = styled.div`
font-size: 12px;
color: #c9016c;
text-align: right;
`

const Input = styled.input`
outline: none;
border: 1px solid silver;
border-radius: 3px;
height: 30px;
width: 97%;
padding-left: 5px
`

const InputText = styled.div`
font-size: 13px;
`

const InputHolder = styled.div`
margin: 10px 0;
`

const Title = styled.div`
text-align: center;
font-weight: 700;
color: #220122; 
margin-bottom: 10px
`

const Card = styled.form`
width: 280px;
min-height: fit-content;
border: 1px solid silver;
border-radius: 5px;
padding: 20px 10px 
`

const Main = styled.div`
display:flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;

`

const Container = styled.div`
display:flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
color: #220122 
`