import React from 'react';
import { Form, Field } from 'react-final-form';

import styles from './ProfileForm.module.css';

const normalizePhone = value => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7)
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`;
};

const ProfileForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    render={({
      handleSubmit,
      pristine,
      submitting,
      values
    }) => {
      const { user } = props
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name='firstName'
              placeholder='John'
              initialValue={user.firstName}
              component='input' />
            <label>First Name2 <sup>optional</sup></label>
            <Field
              name='firstName2'
              placeholder='Mary'
              initialValue={user.firstName2}
              component='input' />
            <label>Last Name</label>
            <Field
              name='lastName'
              placeholder='Smith'
              initialValue={user.lastName}
              component='input' />
            <label>Email</label>
            <Field
              name='email'
              placeholder='test@test.com'
              initialValue={user.email}
              component='input' />
            <label>Phone</label>
            <Field
              name='phone'
              placeholder='(999) 999-9999'
              parse={normalizePhone}
              initialValue={user.phone}
              component='input' />
            <label>Address</label>
            <Field
              name='address'
              placeholder='123 Test Lane'
              initialValue={user.address}
              component='input' />
            <label>Approved Pickups</label><br />
            <Field
              name='approvedNames'
              placeholder='Joe Shaw'
              initialValue={user.approvedNames}
              component='textarea' /><br />
            <label>Profile picture</label>
            <Field
              name='profileImage'
              placeholder='http://linktoimage.com/image.jpg'
              initialValue={user.profileImage}
              component='input' />

            <hr />
            <h4>Emergency Contact Info</h4>
            <label>Full Name</label>
            <Field
              name='emergencyName'
              placeholder='Sarah Carter'
              initialValue={user.emergencyName}
              component='input' />
            <label>Phone</label>
            <Field
              name='emergencyPhone'
              placeholder='(999) 999-9999'
              parse={normalizePhone}
              initialValue={user.emergencyPhone}
              component='input' />
            <label>Relationship</label>
            <Field
              name='emergencyRelation'
              placeholder='Aunt'
              initialValue={user.emergencyRelation}
              component='input' />
          </div>

          <div className='buttons'>
            <button
              type='submit'
              disabled={submitting || pristine}
            >
              Update
              </button>
            {/* <button
              type='button'
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
              </button> */}
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )
    }}
  />
)

export default ProfileForm;