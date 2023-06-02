import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string,
    setTitle: (title: string) => void
}
export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler} />
        </div>
    );
};


// import React, {ChangeEvent, useState} from 'react';
// import {Input} from "./Input";
//
//
// export type MessageType = {
//     message: string
// }
//
// type PropsMessageType = {
//     message: MessageType[],
//     addMessage: (title: string) => void
//     setMessage: (setNewMessage: MessageType[]) => void
// }
//
// export const Fullinput = (props: PropsMessageType) => {
//
//     let [title, setTitle] = useState('')
//     const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
//         setTitle(event.currentTarget.value)
//     }
//
//     const addMessageHandler = () => {
//         props.addMessage(title);
//         setTitle('');
//     }
//
//
//     return (
//         <div>
//             <div>
//                 <input value={title} onChange={onChangeInputHandler}/>
//                 <button onClick={addMessageHandler}>+</button>
//             </div>
//         </div>
//     );
// };