import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'
import Loading from '../components/Loading'

const Section = styled.section`
  border-radius: 8px;
  padding: 32px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: hotpink;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Thead = styled.thead`
  background-color: hotpink;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Tbody = styled.tbody`
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Tr = styled.tr`
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: hotpink;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

function Preview() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const { width } = useWindowDimensions()

  const navigate = useNavigate()

  const fetchData = async () => {
    const { data } = await supabase.from('forms').select()
    if (data) setLoading(false)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Section>
      <H1>Preview</H1>
      <Table>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>name</Th>
            <Th>Tempat dan tanggal lahir</Th>
            {width > 1000 && (
              <>
                <Th>Alamat</Th>
                <Th>Jenis kelamin</Th>
                <Th>Agama</Th>
                <Th>Kewarganegaraan</Th>
                <Th>Pendidikan</Th>
                <Th>No telfon</Th>
              </>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, i) => (
            <Tr
              key={item.id}
              onClick={() => navigate(`detail?q=${item.unique}`)}
            >
              <Td>{i + 1}</Td>
              <Td>{item.nama}</Td>
              <Td>{item.TTL}</Td>
              {width > 1000 && (
                <>
                  <Td>{item.alamat}</Td>
                  <Td>{item.jenis_kelamin}</Td>
                  <Td>{item.agama}</Td>
                  <Td>{item.kewarganegaraan}</Td>
                  <Td>{item.pendidikan}</Td>
                  <Td>{item.no_tlp}</Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Section>
  )
}

export default Preview
