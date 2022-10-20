import { Link } from 'react-router-dom'
import { Center, H1 } from '../Styled'
import styled from '@emotion/styled'

const LinkNext = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 11px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const Parrent = styled.div`
  display: flex;
  flex-direction: column;
`

const Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

function FormSukses() {
  return (
    <Center>
      <Parrent>
        <H1>Terima Kasih Telah Mengisi Form</H1>
        <Child>
          <LinkNext to="/preview">Lihat Data</LinkNext>
        </Child>
      </Parrent>
    </Center>
  )
}

export default FormSukses
