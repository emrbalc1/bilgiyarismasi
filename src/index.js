import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

let saat = (new Date()).getHours()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='text-warning' style={{backgroundColor: "red"}}>Merhaba!</h1>
    <p>Bilgi yarışması hoşgeldiniz.... {8*2}</p>
    {saat > 19 ? <p>İyi akşamlar</p> : <p>İyi günler</p>}

    <button onClick={ olay=>{alert("Oyun başladı")} }>Oyuna Başla</button>
  </div>
);
