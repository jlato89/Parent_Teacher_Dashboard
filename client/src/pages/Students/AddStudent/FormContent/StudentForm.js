import React from 'react'
import { Field } from 'react-final-form'

const StudentForm = (props) => (
  <>
    <hr />
    <div>
      {/* <label>First Name</label> */}
      <Field
        name='studentObj.firstName'
        component='input'
        type='text'
        placeholder='First Name'
      />
    </div>
    <div>
      {/* <label>Birthdate</label> */}
      <Field
        name='studentObj.birthdate'
        component='input'
        type='date'
        placeholder='Birthdate'
      />
    </div>
    <div>
      {/* <label>Gender</label> */}
      <Field
        name='studentObj.gender'
        component='select'
      >
        <option>Gender</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </Field>
    </div>
    <div>
      {/* <label>Allergies</label> */}
      <Field
        name='studentObj.allergies'
        component='input'
        type='text'
        placeholder='Allergies'
      />
    </div>
    <div>
      {/* <label>Medical</label> */}
      <Field
        name='studentObj.medical'
        component='input'
        type='text'
        placeholder='Medical'
      />
    </div>
  </>
)

export default StudentForm;