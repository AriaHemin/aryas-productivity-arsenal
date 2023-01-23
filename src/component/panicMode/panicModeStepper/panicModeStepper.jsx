import { PanicModeStep1 } from "./panicModeStep1"
import { PanicModeStep2 } from "./panicModestep2"
import { PanicModeStep3 } from "./panicModeStep3"
import { useStepper } from "../../../hooks/useStepper"


export function PanicModeStepper(){

    const { currentStep ,step, goNextStep , goPreviousStep , steps} = useStepper([
        <PanicModeStep1/>,
        <PanicModeStep2/>,
        <PanicModeStep3/>
    ])

    return(
        <div className="relative shrink-0 w-full h-full" >
            <div className="p-5" >
                <div>{step}</div>
            </div>
            <div className="absolute bottom-0 right-0 " >
                <div className="inline mx-2 " >{currentStep + 1}/{steps.length}</div>
                <button className="bg-gray-200 rounded px-5 py-2 mx-1" onClick={goPreviousStep} >back</button>
                <button className="bg-gray-200 rounded px-5 py-2 mx-1" onClick={goNextStep} >next</button>
            </div>
        </div>
    )

}