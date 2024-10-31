import styled from 'styled-components'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const PostBlog = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const schema = yup.object({
        title: yup.string().required(),
        content: yup.string().required(),
        category: yup.string().required(),

    })

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset } = useForm({
            resolver: yupResolver(schema)
        })

    const onSubmit = handleSubmit(async (res: any) => {

        navigate("/")
    })


    return (
        <div>
            <Container>
                <Main>
                    <Card onSubmit={onSubmit} >

                        <Text>Go back Home</Text>
                        <Title>Write a New Blog</Title>


                        <ImageHolder>
                            <Image />
                            <ImageInput />
                            <ImageLabel>Upload Image</ImageLabel>
                        </ImageHolder>


                        <InputHolder>
                            <InputText>Title</InputText>
                            <Input placeholder="Title" {...register("title")} />
                            {errors.title && <Error>Title error</Error>}
                        </InputHolder>

                        <InputHolder>
                            <InputText>Content</InputText>
                            <Input placeholder="Content" {...register("content")} />
                            {errors.content && <Error>content error</Error>}
                        </InputHolder>

                        <InputHolder>
                            <InputText>Category</InputText>
                            <Input placeholder="Category" {...register("category")} />
                            {errors.category && <Error>category error</Error>}
                        </InputHolder>


                        <Button type="submit" bg="p" >Post</Button>


                    </Card>

                </Main>
            </Container>
        </div>
    )
}

export default PostBlog

const Text = styled.div`
padding: 10px 18px;
border-radius: 30px;
background-color: purple;
color: white;
margin-bottom: 20px;
margin-top: 5px;
text-align: center;
`

const ImageLabel = styled.label`
padding: 10px 18px;
border-radius: 30px;
background-color: purple;
color: white;
margin-top: 20px
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
width: 200px;
height: 200px;
border-radius: 5px;
object-fit: cover;

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
padding: 20px 10px ;
margin-bottom: 30px;
`

const Main = styled.div`
display:flex;
width: 100%;
justify-content: center;
align-items: center;

`

const Container = styled.div`
display:flex;
width: 100%;
justify-content: center;
align-items: center;
color: #220122 
`