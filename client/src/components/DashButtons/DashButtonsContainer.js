import React from 'react';
import Button from './Button/Button';
import styles from './DashButtonsContainer.module.css';

const menuBtns = [
  {
    name: 'Create Report',
    url: '/createReport',
    access: 'teacher'
  },
  {
    name: 'Add Students',
    url: '/addStudent',
    access: 'teacher'
  },
  {
    name: 'Events',
    url: '/events',
    access: 'teacher'
  },
  {
    name: 'Students',
    url: '/students',
    access: 'teacher'
  },
  {
    name: 'Reports',
    url: '/reports',
    access: 'teacher'
  },
  {
    name: 'Your Profile',
    url: '/profile',
    access: 'teacher'
  }
]

const DashButtonsContainer = props => {
  let btnsToDisplay;

  //? Menu Buttons depending on user access
  switch (props.access) {
    case 'admin':
      btnsToDisplay = menuBtns.filter(el => el.access === 'admin');
      break;
    case 'teacher':
      btnsToDisplay = menuBtns.filter(el => el.access === 'teacher');
      break;
    default:
      btnsToDisplay = menuBtns.filter(el => el.access === 'parent');
      break;
  }
  return (
    <div className={styles.container}>
      <Button buttons={btnsToDisplay} />
    </div>
  )
}

export default DashButtonsContainer
