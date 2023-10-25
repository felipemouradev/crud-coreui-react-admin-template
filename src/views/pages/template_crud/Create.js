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
      FORM_REPLACE
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
            <strong>APP_NAME</strong>
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
