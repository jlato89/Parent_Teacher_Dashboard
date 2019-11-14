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
      parentObj: {
        firstName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'First Name*'
          },
          value: ''
        },
        firstName2: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'First Name(2)'
          },
          value: ''
        },
        lastName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Last Name*'
          },
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email'
          },
          value: ''
        },
        phone: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Phone*'
          },
          value: ''
        },
        address: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Address'
          },
          value: ''
        }
      }
    };
  }

  parentChangedHandler = (e, inputIdentifier) => {
    const updatedParentObj = {
      ...this.state.parentObj
    };
    const updatedFormElement = {
      ...updatedParentObj[inputIdentifier]
    };
    updatedFormElement.value = e.target.value;
    updatedParentObj[inputIdentifier] = updatedFormElement;

    this.setState({
      errors: '',
      parentObj: updatedParentObj
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
