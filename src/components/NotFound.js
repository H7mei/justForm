import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { CenterImg, H1, Img } from '../Styled'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Parent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`
const Child = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -1rem;
`

const Button = styled.button`
  width: 50px;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid hotpink;

  &:hover {
    color: hotpink;
  }
`

function NotFound() {
  const navigate = useNavigate()
  return (
    <Section>
      <CenterImg>
        <Img src="/favicon.svg" alt="" />
      </CenterImg>
      <Parent>
        <Child>
          <H1>404</H1>
          <h2>Page not found</h2>
        </Child>
        <Button onClick={() => navigate(-1)}>back</Button>
      </Parent>
    </Section>
  )
}

export default NotFound
