import React, { useState } from 'react';

function FormAlarm({ tambahAlarm }) {
  const [waktu, setWaktu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (waktu) {
      const alarmBaru = {
        id: Date.now(),
        waktu
      };
      tambahAlarm(alarmBaru);
      setWaktu('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="time" 
        value={waktu} 
        onChange={(e) => setWaktu(e.target.value)} 
        required 
      />
      <button type="submit">Tambah Alarm</button>
    </form>
  );
}

export default FormAlarm;
