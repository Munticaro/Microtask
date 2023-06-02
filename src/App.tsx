import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

type MessageType = {
    message: string
}

function App() {
    let [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('')
    }
    return (
        <div className="App">
            <Input
                title={title}
                setTitle={setTitle}
            />
            <Button
                name={'+'}
                callBack={callBackButtonHandler}
            />
            {message.map((el, i) => {
                return (
                    <div key={i}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;

