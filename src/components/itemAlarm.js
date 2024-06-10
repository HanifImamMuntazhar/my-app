import React from 'react';

function ItemAlarm({ alarm, hapusAlarm }) {
  return (
    <div className="alarm-item">
      <span>{alarm.waktu}</span>
      <button onClick={() => hapusAlarm(alarm.id)}>Hapus</button>
    </div>
  );
}

export default ItemAlarm;
