import React, { useState } from 'react'

function Modal() {
    return (
        <div className='popup'>
            <h3>MODAL POPUP</h3>
        </div>
    )
}
export const ConditionModal5 = () => {
    let [modal, setModal] = useState(false);
    let modalChange = () => {
        setModal(!modal);
    }
    return (
        <div>
            <h2>모달창 on/off</h2>
            <button onClick={modalChange}>모달 {modal ? "ON" : "OFF"}</button>
            {modal ? <Modal /> : null}
        </div>
    )
}
