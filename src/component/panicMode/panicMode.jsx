import { useState } from "react";
import Modal from '../modal/modal';
import { PanicModeStepper } from "./panicModeStepper/panicModeStepper";

function PanicMode(props){
    

    const innerComp = <PanicModeStepper/>
    const [isModalActive, setIsModalActive] = useState(false);
    return(
        <div>
            <button onClick={()=>{setIsModalActive(true)}} >panic mode</button>
                <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} innerComp={innerComp} />
            </div>
    )
}

export default PanicMode;