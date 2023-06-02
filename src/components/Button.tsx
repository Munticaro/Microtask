import React from 'react';

type ButtonPropsType = {
    name: string,
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const addMessageHandler = () => {
        props.callBack()
    }

    return (
        <div>
           <button onClick={addMessageHandler}>{props.name}</button>
        </div>
    );
};
