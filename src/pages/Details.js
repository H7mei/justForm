import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { supabase } from '../supabaseClient'
import styled from '@emotion/styled'
import { H1, LinkBack } from '../Styled'
import NotFound from '../components/NotFound'

const Container = styled.div`
  width: 60vw;
  min-width: 400px;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
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

const Tbody = styled.tbody`
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Tr = styled.tr`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const TdHeader = styled.td`
  padding: 8px;
  text-align: left;
  font-weight: bold;
  background-color: hotpink;
  color: white;
  width: 100px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Td = styled.td`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Span = styled.span`
  text-decoration: underline;
  color: black;
`

function Details() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const params = new URLSearchParams(window.location.search)
  const id = params.get('q')

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('forms')
      .select()
      .eq('unique', id)
      .single()
    if (data) setLoading(false)
    if (error) setNotFound(true)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (notFound) {
    return <NotFound />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <LinkBack to="/preview">Kembali</LinkBack>
      <H1>
        User Details <Span>{data.nama}</Span>
      </H1>
      <Table>
        <Tbody>
          <Tr>
            <TdHeader>Nama</TdHeader>
            <Td>{data.nama}</Td>
          </Tr>
          <Tr>
            <TdHeader>Tempat dan tanggal lahir</TdHeader>
            <Td>{data.TTL}</Td>
          </Tr>
          <Tr>
            <TdHeader>Alamat</TdHeader>
            <Td>{data.alamat}</Td>
          </Tr>
          <Tr>
            <TdHeader>Jenis kelamin</TdHeader>
            <Td>{data.jenis_kelamin}</Td>
          </Tr>
          <Tr>
            <TdHeader>Agama</TdHeader>
            <Td>{data.agama}</Td>
          </Tr>
          <Tr>
            <TdHeader>Kewarganegaraan</TdHeader>
            <Td>{data.kewarganegaraan}</Td>
          </Tr>
          <Tr>
            <TdHeader>Pendidikan</TdHeader>
            <Td>{data.pendidikan}</Td>
          </Tr>
          <Tr>
            <TdHeader>No telfon</TdHeader>
            <Td>{data.no_tlp}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  )
}

export default Details
