import React, { useState } from 'react';
import DaftarAlarm from './daftarAlarm';
import FormAlarm from './formAlarm';
import '../App.css';

function App() {
  const [alarms, setAlarms] = useState([]);

  const tambahAlarm = (alarmBaru) => {
    setAlarms([...alarms, alarmBaru]);
  };

  const hapusAlarm = (id) => {
    setAlarms(alarms.filter(alarm => alarm.id !== id));
  };

  return (
    <div className="container">
      <h1>Aplikasi Alarm</h1>
      <FormAlarm tambahAlarm={tambahAlarm} />
      <DaftarAlarm alarms={alarms} hapusAlarm={hapusAlarm} />
    </div>
  );
}

export default App;
