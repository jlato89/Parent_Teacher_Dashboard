import React, { Component } from 'react';
import axios from 'axios';
// import isEmpty from '../../../validation/is-empty';
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
        childsName: {
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
            type: 'text',
            placeholder: 'Birthdate (01/01/2019)'
          },
          value: ''
        },
        gender: {
          elementType: 'select',
          elementConfig: {
            options: [
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
        mothersName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Mothers Name'
          },
          value: ''
        },
        fathersName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Fathers Name'
          },
          value: ''
        },
        lastName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Last Name'
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
            placeholder: 'Phone'
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
    const { mothersName, lastName, phone } = this.state;

    const userName = mothersName.charAt(0) + lastName;
    console.log('userName combined: ', userName.toLowerCase());
    const password = lastName.slice(0, 4) + phone.slice(-4);
    console.log('password created: ', password.toLowerCase());

    const parentObj = {
      firstName: this.state.mothersName,
      firstName2: this.state.fathersName,
      lastName: this.state.lastName,
      email: this.state.email,
      userName: userName.toLowerCase(),
      password: password.toLowerCase(),
      phone: this.state.phone,
      address: this.state.address
    };
    const studentObj = {
      firstName: this.state.childsName,
      lastName: this.state.lastName,
      birthdate: this.state.birthdate,
      gender: this.state.gender,
      allergies: this.state.allergies,
      medical: this.state.medical
    };
    console.log(parentObj);

    axios
      .post('/api/registerUser', parentObj)
      .then(parent => {
        console.log('[axios]parent: ', parent.data);
        studentObj.parentId = parent.data.userId;
        console.log('studentObj', studentObj);

        return axios.post('/api/createStudent', studentObj);
      })
      .then(student => {
        console.log('[axios]student: ', student.data);
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: err.response.data
        });
      });
  };

  render() {
    const { errors } = this.state;
    const parrentArr = [];
    const studentArr = [];
    for (let key in this.state.parentObj) {
      parrentArr.push({
        id: key,
        config: this.state.parentObj[key]
      });
    }
    for (let key in this.state.studentObj) {
      studentArr.push({
        id: key,
        config: this.state.studentObj[key]
      });
    }

    return (
      <div>
        <Header miniHeader={true} title='Create Report' />
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
        <Button
          style={{margin:'5px 15px'}}
          type='submit'
          variant='primary'
          onClick={!errors ? null : this.handleModalShow}
        >
          Submit
        </Button>
        </form>

        {/* MODAL CONTAINER */}
        <MyModal
          handleModalClose={this.handleModalClose}
          showModal={this.state.showModal}
          title='Add Student'
        >
          Submitted successfully.
        </MyModal>
      </div>
    );
  }
}

export default CreateStudent;
