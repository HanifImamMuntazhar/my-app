import React from 'react';
import ItemAlarm from './itemAlarm';

function DaftarAlarm({ alarms, hapusAlarm }) {
  return (
    <div className="alarm-list">
      {alarms.length === 0 ? (
        <p className="no-alarms">Tidak ada alarm yang disetel</p>
      ) : (
        alarms.map(alarm => (
          <ItemAlarm key={alarm.id} alarm={alarm} hapusAlarm={hapusAlarm} />
        ))
      )}
    </div>
  );
}

export default DaftarAlarm;
