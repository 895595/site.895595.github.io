import { useDeferredValue } from "react"


function Container({arr=[]}){
    const values = useDeferredValue(arr)
    
    return (
        <div className="Container">
            {
                values.map((e,i)=>{
                    return (
                        <div key={i}>
                            <p>{e.id}</p>
                            <h1>{e.name}</h1>
                            <h1>{e.surname}</h1>
                            <h2>{e.email}</h2>
                            <p>{e.position}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}


export default Container




