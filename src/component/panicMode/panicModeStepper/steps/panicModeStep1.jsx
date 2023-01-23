import { useState , useRef, useEffect } from "react"

export function PanicModeStep1(props) {
    const ref = useRef(null)
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    const [userInput , setUserInput] = useState()
    const [count, setCount] = useState(0)
    
    const element = ref.current
   
    function addItem (){
        setCount(count + 1)
        setBrainDumpList([...brainDumpList, {title: userInput, key: count}])
        setUserInput("")
        element.value = ""
    }

    useEffect(()=>{
        console.log(brainDumpList, userInput)
    },[brainDumpList, userInput])

    
    

    return (
        <div className="pb-10  flex flex-col justify-between h-full" >
            <div className="overflow-y-auto h-96 p-4 m-2 " >{
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
            <div className="flex flex-row justify-between border p-2" >
                <input ref={ref} id="userInputElement" onChange={(e)=>{
                    setUserInput(e.target.value);
                      
                }} />
                <button onClick={addItem}>add</button>
            </div>
        </div>
    )

}