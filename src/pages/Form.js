import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { supabase } from '../supabaseClient'
import FormSukses from '../components/FormSukses'
import {
  Button,
  CenterImg,
  Container,
  FormText,
  Img,
  InputText,
} from '../Styled'
import generateUUID from '../utils/generateUUID'
import { getToken, setToken } from '../utils/cookiesHooks'
import styled from '@emotion/styled'

const Span = styled.span`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 2fr 1fr;
  grid-gap: 1rem;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const InputTextTTL = styled.input`
  width: 100%;
  padding: 2px;
  font-size: 24px;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

const InputNumberTTL = styled.input`
  width: 100%;
  padding: 2px;
  font-size: 24px;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 40%;
  }
`

const InputNumberTanggal = styled.input`
  width: 100%;
  padding: 2px;
  font-size: 24px;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 40%;
  }
`

const TextArea = styled.textarea`
  padding: 2px;
  font-size: 24px;
  border-radius: 4px;
  resize: none;
  margin-top: 16px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

const Select = styled.select`
  padding: 2px;
  font-size: 24px;
  border-radius: 4px;
  margin-top: 16px;
  width: 70%;
  background-color: white;
`

const InputNumber = styled.input`
  padding: 2px;
  font-size: 24px;
  border-radius: 4px;
  margin-top: 16px;
  border-radius: 4px;
`

const Errors = styled.span`
  font-size: 0.9rem;
  color: red;
  margin-top: 5px;
  font-style: italic;
`

function Form() {
  const [sukses, setSukses] = useState(false)
  const [noHp, setNoHp] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    await supabase
      .from('forms')
      .insert({
        unique: generateUUID(),
        nama: e.nama,
        TTL: e.tempat + ', ' + e.tanggal + '-' + e.bulan + '-' + e.tahun,
        alamat: e.alamat,
        jenis_kelamin: e.jenis_kelamin,
        agama: e.agama,
        kewarganegaraan: e.kewarganegaraan,
        pendidikan: e.pendidikan,
        no_tlp: e.no_tlp,
      })
      .single()
      .then(() => {
        setSukses(true)
        setToken(generateUUID())
      })
  }

  const handleChangePhoneNumber = (e) => {
    const result = e.target.value.replace(/\D/g, '')
    setNoHp(result)
  }

  if (sukses || getToken()) {
    return <FormSukses />
  }

  return (
    <Container>
      <CenterImg>
        <Img src="/favicon.svg" alt="" />
      </CenterImg>
      <FormText onSubmit={handleSubmit(onSubmit)}>
        {/* NAMA */}
        <InputText
          {...register('nama', { required: false })}
          placeholder="Nama"
        />
        {errors.nama && <Errors>Nama di isi </Errors>}
        {/* TTL */}
        <Span>
          <InputTextTTL
            {...register('tempat', { required: false })}
            placeholder="Jakarta"
          />
          <InputNumberTanggal
            type="number"
            {...register('tanggal', { required: false, min: 0, max: 31 })}
            placeholder="1"
          />
          <InputTextTTL
            {...register('bulan', { required: false })}
            placeholder="Juni"
          />
          <InputNumberTTL
            type="number"
            {...register('tahun', { required: false, min: 1111, max: 2050 })}
            placeholder="2003"
          />
        </Span>
        {errors.tempat && <Errors>Tempat lahir di isi</Errors>}
        {errors.tanggal && <Errors>Tanggal lahir di isi yang bener</Errors>}
        {errors.bulan && <Errors>Bulan lahir di isi</Errors>}
        {errors.tahun && <Errors>Tahun lahir di isi yang bener</Errors>}
        {/* ALAMAT */}
        <TextArea
          cols="20"
          rows="6"
          placeholder="Alamat"
          {...register('alamat', { required: false, minLength: 7 })}
        ></TextArea>
        {errors.alamat && <Errors>Alamat di Isi Minimal length 7</Errors>}
        {/* JENIS KELAMIN */}
        <Select
          {...register('jenis_kelamin', { required: false })}
          defaultValue={''}
        >
          <option value="" defaultValue disabled hidden>
            Jenis Kelamin
          </option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </Select>
        {errors.jenis_kelamin && <Errors>Pilih jenis kelamin anda</Errors>}
        {/* AGAMA */}
        <InputText
          {...register('agama', { required: false })}
          placeholder="Agama"
        />
        {errors.agama && <Errors>Agama di isi</Errors>}
        {/* KEWARGANEGARAAN */}
        <InputText
          {...register('kewarganegaraan', { required: false })}
          placeholder="Kewarganegaraan"
        />
        {errors.kewarganegaraan && <Errors>Kewarganegaraan di isi</Errors>}
        {/* PENDIDIKAN */}
        <InputText
          {...register('pendidikan', { required: false })}
          placeholder="Pendidikan"
        />
        {errors.pendidikan && <Errors>Pendidikan di isi</Errors>}
        {/* NO TELPON */}
        <InputNumber
          type="tel"
          id="phone"
          name="phone"
          placeholder="No Telfon"
          value={noHp}
          {...register('no_tlp', { required: false, maxLength: 13 })}
          onChange={handleChangePhoneNumber}
        />
        {errors.no_tlp && <Errors>No Telfon di isi</Errors>}
        <Button type="submit">Submit</Button>
      </FormText>
    </Container>
  )
}

export default Form
