import React, { useState } from 'react'

export const EventMulti10 = () => {
    // 1.상태변수 오브젝트
    let [form, setForm] = useState({ uname: "", uemail: "" });

    // 2.
    let handleInput = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        // let name = e.target.name;
        // let value = e.target.value;

        // let newForm = {
        //     uName: form.uname,
        //     uEmail: form.uemail
        // }
        // newForm[name] = value;
        // setForm(newForm);
        let { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div>
            <h2>multi input</h2>
            <p><input type="text" name="uName" value={form.uname} onChange={handleInput} /></p>
            <p><input type="email" name="uEmail" value={form.uemail} onChange={handleInput} /></p>
        </div>
    )
}
