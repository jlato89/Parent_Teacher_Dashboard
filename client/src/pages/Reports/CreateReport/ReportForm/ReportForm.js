import React from 'react'
import { Form, Field } from 'react-final-form'

import styles from './ReportForm.module.css';

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const ReportForm = (props) => (
  <>
    <Form
      onSubmit={props.onSubmit}
      initialValues={{ enjoyed: '', suppliesNeeded: '' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>ChildName</label>
            <Field
              name='studentName'
              component='input'
              type='text'
              placeholder='Childs Full Name'
            />
          </div>
          <div>
            <label>Report Date</label>
            <Field
              name='date'
              component='input'
              type='date'
              placeholder='Report Date'
            />
          </div>
          <div>
            <label>Today I was felt</label>
            <Field name='attitude' component='select'>
              <option value='default'>Choose One</option>{/* Validate to avoid value 'default' */}
              <option value='happy'>Happy</option>
              <option value='good'>Good</option>
              <option value='okay'>Okay</option>
              <option value='bad'>Bad</option>
              <option value='terrible'>Terrible</option>
            </Field>
          </div>
          <div>
            <label>Today I enjoyed</label>
            <Field
              className={styles.inline}
              name='enjoyed'
              component='input'
              type='checkbox'
              value='gym'
            /> {' '}
            Gym<br />
            <Field
              className={styles.inline}
              name='enjoyed'
              component='input'
              type='checkbox'
              value='drawing'
            /> {' '}
            Drawing<br />
            <Field
              className={styles.inline}
              name='enjoyed'
              component='input'
              type='checkbox'
              value='outside'
            /> {' '}
            Outside<br />
            <Field
              className={styles.inline}
              name='enjoyed'
              component='input'
              type='checkbox'
              value='reading'
            /> {' '}
            reading<br />
            <Field
              className={styles.inline}
              name='enjoyedOther'
              component='input'
              type='checkbox'
            /> {' '}
            Other<br />
          </div>
          <Condition when='enjoyedOther' is={true}>
            <div>
              {/* <label>Please Specify</label> */}
              <Field
                name='enjoyed'
                component='input'
                placeholder='Please Specify'
              />
            </div>
          </Condition>
          <div>
            <label>Bathroom Breaks</label>
            <Field
              name='brBreaks'
              component='input'
              type='text'
              placeholder='Bathroom Breaks'
            />
          </div>
          <div>
            <label>Nap Time</label>
            <Field
              name='napTime'
              component='input'
              type='text'
              placeholder='Nap Time'
            />
          </div>
          <div>
            <label>Today I ate</label>
            <Field
              name='ate'
              component='input'
              type='text'
              placeholder='Today I ate'
            />
          </div>
          <div>
            <label>Needed Supplies</label>
            <Field
              className={styles.inline}
              name='suppliesNeeded'
              component='input'
              type='checkbox'
              value='diapers'
            /> {' '}
            Diapers<br />
            <Field
              className={styles.inline}
              name='suppliesNeeded'
              component='input'
              type='checkbox'
              value='cloths'
            /> {' '}
            Cloths<br />
            <Field
              className={styles.inline}
              name='suppliesNeeded'
              component='input'
              type='checkbox'
              value='wipes'
            /> {' '}
            Wipes<br />
            <Field
              className={styles.inline}
              name='suppliesNeededOther'
              component='input'
              type='checkbox'
            /> {' '}
            Other<br />
          </div>
          <Condition when='suppliesNeededOther' is={true}>
            <div>
              {/* <label>Please Specify</label> */}
              <Field
                name='suppliesNeeded'
                component='input'
                placeholder='Please Specify'
              />
            </div>
          </Condition>

          <div>
            <label>Comments</label>
            <Field
              name='comments'
              component='textarea'
              placeholder='Comments'
              cols='40'
              rows='3'
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