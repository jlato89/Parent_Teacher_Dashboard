import React from 'react'
import { Form } from 'react-final-form'
import UserForm from './UserForm';
import StudentForm from './StudentForm';

const FormContent = (props) => (
  <>
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <UserForm />
          <StudentForm />

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
      )}
    />
  </>
)

export default FormContent;