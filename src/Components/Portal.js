import React, { useReducer, useState } from 'react';
import { portalState } from '../portalStore/portalStore';
import { portalReducer } from '../reducers/portalReducer';

const Portal = () => {
    const [state,dispatch]=useReducer(portalReducer,portalState)
    const [name,setName]= useState('')
    return (
        <div>
           <h1>doctors portal</h1>
           <h3>Has patients: {state.patients.length}</h3> 
           <input type="text" onChange={e => setName(e.target.value)} />
           <button onClick={()=> dispatch({type: 'ADD_PATIENT',name:name})}>Add</button>
           <br />
           <h1>--------------------------</h1>
           {
               state.patients.map(patient => <p  key={patient.id}>
                 {patient.name} {patient.id}
                 <button onClick={()=> dispatch({type: 'REMOVE_PATIENT',id:patient.id})}>X</button>
               </p>)
           }
        </div>
    );
};

export default Portal;