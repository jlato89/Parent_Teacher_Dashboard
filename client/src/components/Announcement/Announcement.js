import React from 'react';

function Announcement(props) {
  // let announcements = null;

  // if (props.data) {
  //   announcements = (
  //     <p>
  //       {props.data.map(announcement => {
  //         return (
  //           <Announcement
  //             key={announcement.id}
  //             header={announcement.header}
  //             desc={announcement.desc}
  //             date={announcement.date}
  //           />
  //         );
  //       })}
  //     </p>
  //   );
  // }
  // console.log(props.data);
  // console.log(announcements);
  return (
    <div style={{ backgroundColor: '#FFED4F', padding: '5px' }}>
      <p
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '0 0 7px 0'
        }}
      >
        Importnant Announcement's
      </p>
      <div style={{ fontSize: '.8rem' }}>
        ({props.data.date})
        <span style={{ float: 'right' }}>{props.data.msg}</span>
      </div>
    </div>
  );
}

export default Announcement;
