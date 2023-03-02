import {useState} from "react";



export function UncontrolledOnOff(){

    const [on, setOn] = useState<boolean>(true)

    const OnStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        // marginLeft:'5px',
        padding: '2px',
        display: 'inline-block',
        background: on ? 'green' : 'white'
    }
    const OfStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        padding: '2px',
        // marginLeft:'5px',
        display: 'inline-block',
        background: on ? 'white' : 'red'
    }
    const OStyle = {
        width: '15px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        display: 'inline-block',
        background: on ? 'green' : 'red'

    }
    const onClickHandler = () => {
        setOn(!on)
    }

    return <div>
        <div style={OnStyle} onClick={onClickHandler}>on</div>
        <div style={OfStyle} onClick={onClickHandler}>off</div>
        <div style={OStyle} onClick={onClickHandler}></div>
    </div>
}