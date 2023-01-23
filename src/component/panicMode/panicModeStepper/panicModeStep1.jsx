import { useState , useRef } from "react"

export function PanicModeStep1(props) {
    const ref = useRef(null)
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    const [userInput , setUserInput] = useState()
    const [count, setCount] = useState(0)

    function addItem (){
        setCount(count + 1)
        setBrainDumpList([...brainDumpList, {title: userInput, key: count}])
        const element = ref.current
        setUserInput("")
        element.value = ""
    }

    return (
        <div>
            <div>{
                brainDumpList.map((item)=>{
                    return(
                        <div key={item.key} className="flex flex-row justify-between" >
                            <p>{item.title}</p>
                            <button> x </button>
                        </div>

                    )
                })    
            }
            </div>
            <div>
                <input ref={ref} id="userInputElement" onChange={(e)=>{
                    setUserInput(e.target.value);
                      
                }} />
                <button onClick={addItem}>add</button>
            </div>
        </div>
    )

}