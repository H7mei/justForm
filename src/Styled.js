import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;
`

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: hotpink;
  text-align: center;
`

export const FormText = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 20px;
`

export const InputText = styled.input`
  padding: 2px;
  font-size: 24px;
  border-radius: 4px;
  margin-top: 16px;
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 11px;
  background-color: hotpink;
  font-size: 24px;
  margin-top: 16px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LinkBack = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: hotpink;
  }
`

export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`

export const CenterImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`
