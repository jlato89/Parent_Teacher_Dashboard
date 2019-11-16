import React from 'react'
import { Field } from 'react-final-form'

const UserForm = (props) => (
  <>
    <div>
      {/* <label>Parent Name </label> */}
      <Field
        name='parentObj.firstName'
        component='input'
        type='text'
        placeholder='Parent Name'
      />
    </div>
    <div>
      {/* <label>Parent Name</label> */}
      <Field
        name='parentObj.firstName2'
        component='input'
        type='text'
        placeholder='Parent Name'
      />
    </div>
    <div>
      {/* <label>Last Name</label> */}
      <Field
        name='parentObj.lastName'
        component='input'
        type='text'
        placeholder='Last Name'
      />
    </div>
    <div>
      {/* <label>Email</label> */}
      <Field
        name='parentObj.email'
        component='input'
        type='email'
        placeholder='Email'
      />
    </div>
    <div>
      {/* <label>Phone</label> */}
      <Field
        name='parentObj.phone'
        component='input'
        type='text'
        placeholder='phone'
      />
    </div>
    <div>
      {/* <label>Address</label> */}
      <Field
        name='parentObj.address'
        component='input'
        type='text'
        placeholder='address'
      />
    </div>
  </>
)

export default UserForm;