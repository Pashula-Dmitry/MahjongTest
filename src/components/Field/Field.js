import React from "react";
import cls from "./styles.module.css";






const Card = ({visible, number, onClick}) => {
    return (<>
        {visible? (<ShowCart numbers={number} visible={visible} />)

            : (<ShowCart numbers={number} visible={visible} onCustomClick={onClick}/>)
        }
        </>)
}

const ShowCart = ({numbers, visible, onCustomClick}) => {
    debugger
    return <div className={cls.Card} onClick={onCustomClick ? onCustomClick : null}>
        <div className={cls.Number} style={ {display: !visible? 'none' : 'block' }} >
            {numbers}
        </div>
    </div>
}



export default Card;