import React, {useState} from 'react'
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
        <CFormLabel htmlFor="validationnome">nome</CFormLabel>
        <CFormInput type="text" id="validationnome" defaultValue="" required/>
        <CFormFeedback valid>Campo válido!</CFormFeedback>
        <CFormFeedback invalid>Por favor preencha um nome valido.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationidade">idade</CFormLabel>
        <CFormInput type="text" id="validationidade" defaultValue="" required/>
        <CFormFeedback valid>Campo válido!</CFormFeedback>
        <CFormFeedback invalid>Por favor preencha um idade valido.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationemail">email</CFormLabel>
        <CFormInput type="text" id="validationemail" defaultValue="" required/>
        <CFormFeedback valid>Campo válido!</CFormFeedback>
        <CFormFeedback invalid>Por favor preencha um email valido.</CFormFeedback>
      </CCol>

      <CCol xs={12}>
        <CButton color="primary" type="submit">
          BTN_SUBMIT_REPLACE
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
            <strong>Validation</strong> <small>Custom styles</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Custom feedback styles apply custom colors, borders, focus styles, and background
              icons to better communicate feedback.{' '}
            </p>
            {CustomStyles()}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Create
