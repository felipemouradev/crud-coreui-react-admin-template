import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={6}>
        <CFormLabel htmlFor="validationdescricao">descricao</CFormLabel>
        <CFormInput type="text" id="validationdescricao" defaultValue="" required />
        <CFormFeedback valid>Campo válido!</CFormFeedback>
        <CFormFeedback invalid>Por favor preencha um descricao valido.</CFormFeedback>
      </CCol>
<CCol md={4}>
        <CFormLabel htmlFor="validationclient">client</CFormLabel>
        <CFormInput type="text" id="validationclient" defaultValue="" required />
        <CFormFeedback valid>Campo válido!</CFormFeedback>
        <CFormFeedback invalid>Por favor preencha um client valido.</CFormFeedback>
      </CCol>
<CCol md={4}>
        <CFormLabel htmlFor="validationvalor">valor</CFormLabel>
        <CFormInput type="text" id="validationvalor" defaultValue="" required />
        <CFormFeedback valid>Campo válido!</CFormFeedback>
        <CFormFeedback invalid>Por favor preencha um valor valido.</CFormFeedback>
      </CCol>

      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Criar venda
        </CButton>
      </CCol>
    </CForm>
  )
}

const Create = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>venda</strong>
          </CCardHeader>
          <CCardBody>
            {CustomStyles()}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Create
