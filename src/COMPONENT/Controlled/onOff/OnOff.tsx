
type PropsOnOff = {
    valueOnOff: boolean
    changeColor:(on:boolean)=>void

}

export function OnOff(props:PropsOnOff) {


    const OnStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        // marginLeft:'5px',
        padding: '2px',
        display: 'inline-block',
        background: props.valueOnOff ? 'green' : 'white'
    }
    const OfStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        padding: '2px',
        // marginLeft:'5px',
        display: 'inline-block',
        background: props.valueOnOff  ? 'white' : 'red'
    }
    const OStyle = {
        width: '15px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        display: 'inline-block',
        background: props.valueOnOff  ? 'green' : 'red'

    }
    const onClickHandler = () => {
        props.changeColor(!props.valueOnOff)
    }

    return <div>
        <div style={OnStyle} onClick={onClickHandler}>on</div>
        <div style={OfStyle} onClick={onClickHandler}>off</div>
        <div style={OStyle} onClick={onClickHandler}></div>
    </div>
}