import React from 'react'
import { Form, Field } from 'react-final-form'

const ReportForm = (props) => (
  <>
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>ChildName</label> */}
            <Field
              name='childName'
              component='input'
              type='text'
              placeholder='Childs Full Name'
            />
          </div>
          <div>
            {/* <label>Report Date</label> */}
            <Field
              name='date'
              component='input'
              type='date'
              placeholder='Report Date'
            />
          </div>
          <div>
            {/* <label>Today I was feeling</label> */}
            <Field name='attitude' component='select'>
              <option>Today I Felt</option>
              <option value='1'>1 - Happy</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5 - Sad</option>
            </Field>
          </div>
          <div>
            {/* <label>Today I enjoyed</label> */}
            <Field name='enjoyed' component='select' multiple>
              <option>Today I Enjoyed</option>
              <option value='gym'>Gym</option>
              <option value='drawing'>Drawing</option>
              <option value='outside'>Outside</option>
              <option value='reading'>reading</option>
              <option value='other'>other</option>
            </Field>
          </div>
          <div>
            {/* <label>Bathroom Breaks</label> */}
            <Field
              name='brBreaks'
              component='input'
              type='text'
              placeholder='Bathroom Breaks'
            />
          </div>
          <div>
            {/* <label>Nap Time</label> */}
            <Field
              name='napTime'
              component='input'
              type='text'
              placeholder='Nap Time'
            />
          </div>
          <div>
            {/* <label>Today I ate</label> */}
            <Field
              name='ate'
              component='input'
              type='text'
              placeholder='Today I ate'
            />
          </div>
          <div>
            <label>Needed Supplies</label><br />
            <label>
              <Field
                name='neededSupplies'
                component='input'
                type='checkbox'
                value='diapers'
              /> {' '}
              Diapers
            </label>
            <label>
              <Field
                name='neededSupplies'
                component='input'
                type='checkbox'
                value='cloths'
              /> {' '}
              Cloths
            </label>
            <label>
              <Field
                name='neededSupplies'
                component='input'
                type='checkbox'
                value='wipes'
              /> {' '}
              Wipes
            </label>
            <label>
              <Field
                name='neededSupplies'
                component='input'
                type='checkbox'
                value='other'
              /> {' '}
              Other
            </label>
          </div>
          <div>
            {/* <label>Comments</label> */}
            <Field
              name='comments'
              component='textarea'
              placeholder='Comments'
            />
          </div>

          <div className='buttons'>
            <button type='submit' disabled={submitting || pristine}>
              Submit
            </button>
            <button type='button' onClick={form.reset} disabled={submitting || pristine}>
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </>
)

export default ReportForm;