export default function Modal(props){


    return(
        <>
            {props.isModalActive ? <div onClick={()=>{props.setIsModalActive(false)}} className="fixed inset-0 bg-slate-300/25 w-screen h-screen flex justify-center items-center  " >
                <div onClick={(e)=>{e.stopPropagation();}} className="bg-white w-1/2 h-1/2 flex flex-col items-center justify-center shrink-0 p-7 rounded" >
                    {props.innerComp}
                </div>
            </div>: null}
        </>
    )
}