import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header';
import MyModal from '../../../components/MyModal/MyModal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Input from '../../../components/Input/Input';

class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      showModal: false,
      errors: '',
      parentObj: {
        firstName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'First Name*'
          },
          validation: {
            touched: false,
            required: true
          },
          valid: false,
          value: ''
        },
        firstName2: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'First Name(2)'
          },
          validation: {
            touched: false,
            required: true
          },
          valid: false,
          value: ''
        },
        lastName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Last Name*'
          },
          validation: {
            touched: false,
            required: true
          },
          valid: false,
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email'
          },
          validation: {
            touched: false,
            required: true
          },
          valid: false,
          value: ''
        },
        phone: {
          elementType: 'input',
          elementConfig: {
            type: 'phone',
            placeholder: 'Phone*'
          },
          validation: {
            touched: false,
            required: true
          },
          valid: false,
          value: ''
        },
        address: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Address'
          },
          validation: {
            touched: false,
            required: true
          },
          valid: false,
          value: ''
        }
      },
      studentObj: {
        firstName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Child Name'
          },
          value: ''
        },
        birthdate: {
          elementType: 'input',
          elementConfig: {
            type: 'text', //! Might need to be changed to DATE
            placeholder: 'Birthdate (01/01/2019)'
          },
          value: ''
        },
        gender: {
          elementType: 'select',
          elementConfig: {
            options: [
              { value: 'default', displayValue: 'Gender' },
              { value: 'male', displayValue: 'Male' },
              { value: 'female', displayValue: 'Female' }
            ]
          },
          value: ''
        },
        allergies: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Allergies'
          },
          value: ''
        },
        medical: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Medical'
          },
          value: ''
        }
      },
      formIsValid: false
    };
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    return isValid;
  }

  parentChangedHandler = (e, inputIdentifier) => {
    const updatedParentObj = {
      ...this.state.parentObj
    };
    const updatedFormElement = {
      ...updatedParentObj[inputIdentifier]
    };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.validation.touched = true;

    updatedParentObj[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedParentObj){
      formIsValid = updatedParentObj[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      errors: '',
      parentObj: updatedParentObj,
      formIsValid: formIsValid
    });
  };

  studentChangedHandler = (e, inputIdentifier) => {
    const updatedStudentObj = {
      ...this.state.studentObj
    };
    const updatedFormElement = {
      ...updatedStudentObj[inputIdentifier]
    };
    updatedFormElement.value = e.target.value;
    updatedStudentObj[inputIdentifier] = updatedFormElement;

    this.setState({
      errors: '',
      studentObj: updatedStudentObj
    });
  };

  handleModalClose = () => this.setState({ showModal: false });
  handleModalShow = () => this.setState({ showModal: true });

  onSubmit = e => {
    e.preventDefault();
    const { parentObj, studentObj } = this.state;

    const newParentObj = {}
    for (let formElementIdentifier in parentObj) {
      newParentObj[formElementIdentifier] = parentObj[formElementIdentifier].value
    }

    const newStudentObj = {}
    for (let formElementIdentifier in studentObj) {
      newStudentObj[formElementIdentifier] = studentObj[formElementIdentifier].value
    }



    const userName = newParentObj.firstName.charAt(0) + newParentObj.lastName;
    const password = newParentObj.lastName.slice(0, 4) + newParentObj.phone.slice(-4);

    newParentObj.password = password.toLowerCase();
    newParentObj.userName = userName.toLowerCase();
    newStudentObj.lastName = newParentObj.lastName;

    console.log('newParentObj', newParentObj);
    console.log('newStudentObj', newStudentObj);

    axios
      .post('/api/registerUser', newParentObj)
      .then(parent => {
        console.log('[axios]parent:', parent.data);
        newStudentObj.parentId = parent.data.userId;

        return axios.post('/api/createStudent', newStudentObj);
      })
      .then(student => {
        console.log('[axios]student:', student.data);
        setTimeout(() => {
          this.props.history.push('/dashboard')
        }, 5000)
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: err.response.data
        });
      });
  };

  render() {
    const { errors, parentObj, studentObj } = this.state;
    const parrentArr = [];
    const studentArr = [];
    for (let key in parentObj) {
      parrentArr.push({
        id: key,
        config: parentObj[key]
      });
    }
    for (let key in studentObj) {
      studentArr.push({
        id: key,
        config: studentObj[key]
      });
    }

    return (
      <div>
        <Header miniHeader={true} title='Create New User' />
        {/* Show error message if error state is true */}
        {errors && <Alert variant='danger'>{errors}</Alert>}

        {/* PARENT FORM */}
        <form onSubmit={this.onSubmit}>
          {parrentArr.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.validation.touched}
              changed={e => this.parentChangedHandler(e, formElement.id)}
            />
          ))}

          {/* STUDENT FORM */}
          <hr />
          {studentArr.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={e => this.studentChangedHandler(e, formElement.id)}
            />
          ))}

          {/* Buttons */}
          <Button
            style={{ margin: '5px 15px' }}
            type='submit'
            disabled={!this.state.formIsValid}
            variant='primary'
            onClick={errors ? null : this.handleModalShow}
          >
            Submit
          </Button>
          <Button
            style={{ margin: '5px 15px' }}
            // type='submit'
            variant='info'
            onClick={errors ? null : this.handleModalShow}
          >
            Add Another
          </Button>
        </form>

        {/* MODAL CONTAINER */}
        <MyModal
          handleModalClose={this.handleModalClose}
          showModal={this.state.showModal}
        >
          <center>
            <p>User and Student created successfully.</p>
            <sup>You will be redirected shortly</sup>
          </center>
        </MyModal>
      </div>
    );
  }
}

export default CreateStudent;
