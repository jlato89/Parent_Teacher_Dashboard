import React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import styles from './NewStudentForm.module.css';

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

const NewStudentForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    initialValues={{ parentObj: { lastName: '' } }} //? Used for childLastName InitialValue
    mutators={{
      ...arrayMutators
    }}
    render={({
      handleSubmit,
      form: {
        mutators: { push, pop }
      },
      pristine,
      form,
      submitting,
      values
    }) => {
      return (
        <form onSubmit={handleSubmit}>
          <h3>Parents Info</h3>
          <div>
            <label>First Name</label>
            <Field
              name='parentObj.firstName'
              placeholder='John'
              component='input' />
            <label>First Name2 <sup>optional</sup></label>
            <Field
              name='parentObj.firstName2'
              placeholder='Mary'
              component='input' />
            <label>Last Name</label>
            <Field
              name='parentObj.lastName'
              placeholder='Smith'
              component='input' />
            <label>Email</label>
            <Field
              name='parentObj.email'
              placeholder='test@test.com'
              component='input' />
            <label>Phone</label>
            <Field
              name='parentObj.phone'
              placeholder='(999) 999-9999'
              parse={normalizePhone}
              component='input' />
            <label>Address</label>
            <Field
              name='parentObj.address'
              placeholder='123 Test Lane'
              component='input' />
          </div>

          <div className='buttons'>
            <button
              type='button'
              onClick={() => push('studentArr', undefined)}
            >
              Add Child
              </button>
            <button
              type='button'
              onClick={() => pop('studentArr')}
            >
              Remove Child
              </button>
          </div>

          {/* Student Form */}
          <FieldArray name='studentArr'>
            {({ fields }) =>
              fields.map((name, index) => (
                <div key={name}>
                  <h5>
                    Child #{index + 1}
                    <span
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                      role='img'
                      aria-label='remove'
                    >{' '}
                      ❌
                    </span>
                  </h5>
                  <div>
                    <label>First Name</label>
                    <Field
                      name={`${name}.firstName`}
                      component='input'
                      placeholder='Bobby' />
                    <label>Last Name</label>
                    <Field
                      name={`${name}.lastName`}
                      component='input'
                      initialValue={values.parentObj.lastName}
                      placeholder='Smith' />
                    <label>Birthdate</label>
                    <Field
                      name={`${name}.birthdate`}
                      component='input'
                      type='date'
                      placeholder='01/01/2012' />
                    <label>Gender</label><br />
                    <Field
                      name={`${name}.gender`}
                      component='select'
                    >
                      <option value='default'>Choose One</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </Field>
                    <br />
                    <label>Allergies</label>
                    <Field
                      name={`${name}.allergies`}
                      component='input'
                      placeholder='Peanuts' />
                    <label>Medical</label><br />
                    <Field
                      name={`${name}.medical`}
                      component='textarea'
                      placeholder='' />
                  </div>
                </div>
              ))
            }
          </FieldArray>

          <div className='buttons'>
            <button
              type='submit'
              disabled={submitting || pristine}
            >
              Submit
              </button>
            <button
              type='button'
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
              </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )
    }}
  />
)

export default NewStudentForm;