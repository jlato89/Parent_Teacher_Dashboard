import React from 'react';
import styles from './LoginForm.module.css';
import Logo from '../../../components/UI/Logo/Logo';

function LoginForm(props) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.header}>PT Dashboard</h1>
        <center>
          <Logo size='250' />
        </center>

        {/* Show error message if error state is true */}
        {props.errors && <div className={styles.errors}>{props.errors}</div>}

        <form className={styles.form} onSubmit={props.onSubmit}>
          <div>
            <label>Username</label>
            <input
              className={styles.formInput}
              name='userName'
              type='Username'
              value={props.userName}
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className={styles.formInput}
              autoComplete='password'
              name='password'
              type='password'
              value={props.password}
              onChange={props.onChange}
            />
          </div>
          <p>
            <input className={styles.submitBtn} type='submit' />
            <sub>
              <a href='/resetpsw'>Forgot password?</a>
            </sub>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
