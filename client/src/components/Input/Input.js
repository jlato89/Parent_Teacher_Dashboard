import React from 'react';

import styles from './Input.module.css';

const input = props => {
  const inputStyles = [styles.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(styles.Invalid)
  }

  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = <sup className={styles.ValidationError}>Please enter a valid value!</sup>
  }
  
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputStyles.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputStyles.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputStyles.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              selected={option.selected}
            >
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputStyles.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      {props.elementConfig.label && (
        <label className={styles.Label}>{props.elementConfig.label}</label>
      )}
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
