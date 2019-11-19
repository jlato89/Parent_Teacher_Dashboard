import React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import styles from './StudentForm.module.css';

const normalizePhone = value => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7)
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`;
};

const required = value => (value ? undefined : 'Required')

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
          <section className={styles.parentForm}>
            <Field name='parentObj.firstName' validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>First Name</label>
                  <input {...input} type='text' placeholder='John' />
                  {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='parentObj.firstName2' validate={null}>
              {({ input, meta }) => (
                <div>
                  <label>First Name2<sup>(optional)</sup></label>
                  <input {...input} type='text' placeholder='Mary' />
                  {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='parentObj.lastName' validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Last Name</label>
                  <input {...input} type='text' placeholder='Smith' />
                  {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='parentObj.email' validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Email</label>
                  <input {...input} type='email' placeholder='test@test.com' />
                  {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='parentObj.phone' parse={normalizePhone} validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Phone</label>
                  <input {...input} type='text' placeholder='(999) 999-9999' />
                  {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='parentObj.address' validate={null}>
              {({ input, meta }) => (
                <div>
                  <label>Address</label>
                  <input {...input} type='text' placeholder='123 Test Ln' />
                  {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                </div>
              )}
            </Field>
          </section>

          <div className='buttons'>
            <button type='button' onClick={() => push('studentArr', undefined)}>
              Add Child
            </button>
            <button type='button' onClick={() => pop('studentArr')}>
              Remove Child
            </button>
          </div>

          {/* Student Form */}
          <section className={styles.StudentForm}>
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
                    <Field name={`${name}.firstName`} validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>First Name</label>
                          <input {...input} type='text' placeholder='Bobby' />
                          {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name={`${name}.lastName`} initialValue={values.parentObj.lastName} validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>Last Name</label>
                          <input {...input} type='text' placeholder='Smith' />
                          {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name={`${name}.birthdate`} validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>Birthdate</label>
                          <input {...input} type='date' placeholder='01/01/2012' />
                          {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <label>Gender</label><br />
                    <Field
                      name={`${name}.gender`}
                      component='select'
                    >
                      <option value=''>Choose One</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </Field>
                    <br />
                    <Field name={`${name}.allergies`} validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>Allergies</label>
                          <input {...input} type='text' placeholder='Peanuts' />
                          {meta.error && meta.touched && <span className={styles.fieldError}>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name={`${name}.medical`} component='textarea'>
                      {({ input, meta }) => (
                        <div>
                          <label>Medical <sup>(optional)</sup></label>
                          <textarea {...input} placeholder='' />
                        </div>
                      )}
                    </Field>
                  </div>
                ))
              }
            </FieldArray>
          </section>

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