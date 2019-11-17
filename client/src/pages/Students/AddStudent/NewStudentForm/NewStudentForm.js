import React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import styles from './NewStudentForm.module.css';


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
            <Field
              name='parentObj.firstName'
              placeholder='First Name'
              component='input' />
            <Field
              name='parentObj.firstName2'
              placeholder='First Name(optional)'
              component='input' />
            <Field
              name='parentObj.lastName'
              placeholder='Last Name'
              component='input' />
            <Field
              name='parentObj.email'
              placeholder='Email'
              component='input' />
            <Field
              name='parentObj.phone'
              placeholder='Phone'
              component='input' />
            <Field
              name='parentObj.address'
              placeholder='Address'
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
                    <Field
                      name={`${name}.firstName`}
                      component='input'
                      placeholder='First Name' />
                    <Field
                      name={`${name}.lastName`}
                      component='input'
                      initialValue={values.parentObj.lastName}
                      placeholder='Last Name' />
                    <Field
                      name={`${name}.birthdate`}
                      component='input'
                      type='date'
                      placeholder='BirthDate' />
                    <Field
                      name={`${name}.gender`}
                      component='select'
                    >
                      <option value=''>Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </Field>
                    <Field
                      name={`${name}.allergies`}
                      component='input'
                      placeholder='Allergies' />
                    <Field
                      name={`${name}.medical`}
                      component='textarea'
                      placeholder='Medical' />
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