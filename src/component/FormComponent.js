
import React, {useState} from 'react'

function FormComponent() {
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');

    const [updated1, setUpdated1] = useState(message1);
    const [updated2, setUpdated2] = useState(message2);
    const [updated3, setUpdated3] = useState(message3);
    
    const handleChange1 = (event) => {
        setMessage1(event.target.value);
    };
    const handleChange2 = (event) => {
        setMessage2(event.target.value);
    };
    const handleChange3 = (event) => {
        setMessage3(event.target.value);
    };

    const handleClick1 = () => {
        setUpdated1(message1)
    };
    const handleClick2 = () => {
        setUpdated2(message2);
    };
    const handleClick3 = () => {
        setUpdated3(message3);
    };

    const handleDelete1 = () => {
        setUpdated1("")
    };
    const handleDelete2 = () => {
        setUpdated2("");
    };
    const handleDelete3 = () => {
        setUpdated3("");
    };

    return (
    <div className="ffrom">
        <input className="input1" placeholder='First Name' type="text"id="message"name="message"onChange={handleChange1}value={message1}/>
        <input className="input2" placeholder='List Name' type="text"id="message"onChange={handleChange2}value={message2}/>
        <input className="input2" placeholder='Phone Number' type="text"id="message"onChange={handleChange3}value={message3}/>

        <div className='display'>
            <div className='display1'>{message1}</div>
            <div className='display2'>{message2}</div>
            <div className='display3'>{message3}</div>
    </div>
        <div className='display'>
        <button className="button1" onClick={handleClick1}>Add</button>
        <button className="button1" onClick={handleClick2}>Add</button>
        <button className="button1" onClick={handleClick3}>Add</button>
        </div>
        <div className='display'>
            <div className='display11'>{updated1}</div>
            <div className='display22'>{updated2}</div>
            <div className='display33'>{updated3}</div>
    </div>
    <div className='display'>
        <button className="button2" onClick={handleDelete1}>Delete</button>
        <button className="button2" onClick={handleDelete2}>Delete</button>
        <button className="button2" onClick={handleDelete3}>Delete</button>
        </div>
    </div>
    );
}

export default FormComponent
