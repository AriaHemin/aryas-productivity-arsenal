import { PanicModeStep1 } from "./steps/panicModeStep1"
import { PanicModeStep2 } from "./steps/panicModestep2"
import { PanicModeStep3 } from "./steps/panicModeStep3"
import { useStepper } from "../../../hooks/useStepper"
import {useState} from "react"

export function PanicModeStepper(){
    const [brainDumpList, setBrainDumpList] = useState([]);

    const { currentStep ,step, goNextStep , goPreviousStep , steps} = useStepper([
        <PanicModeStep1 brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />,
        <PanicModeStep2  />,
        <PanicModeStep3  />
    ])

    

    return(
        <div className="relative shrink-0 w-full h-full" >
            <div className="p-5" >
                <div className="w-96 h-96" >{step}</div>
            </div>
            <div className="absolute bottom-0 right-0 " >
                <div className="inline mx-2 " >{currentStep + 1}/{steps.length}</div>
                <button className="bg-gray-200 rounded px-5 py-2 mx-1" onClick={goPreviousStep} >back</button>
                <button className="bg-gray-200 rounded px-5 py-2 mx-1" onClick={goNextStep} >next</button>
            </div>
        </div>
    )

}