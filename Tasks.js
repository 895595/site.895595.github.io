import React from "react"
import './Tasks.css'
import { useState } from "react"
import { useTransition } from "react"
import { useEffect } from "react"
import Container from "../Container"



function Tasks(){


  const [coments,setcoments]=useState([])
  const [search,setsearch]=useState("")
  const [isPending,startTransition]=useTransition()

  const filtersearch=(e,s)=>{
    return (
      e.filter(iteam=>iteam.name.concat(iteam.body).includes(s))
    )
  }
  useEffect(()=>{
    fetch("https://rocky-temple-83495.herokuapp.com/tasks").then((result)=>result.json()).then((data)=>setcoments(data))
  })
  

  const headersearch=(e)=>{
    startTransition(()=>{
      setsearch(e.target.value)
    })
  }
  

  const [tasks,settasks]=useState([

    {
        name: "afdgasdg",
        description: "asdgasdg",
        startDate: "",
        endDate: "",
        id: 0.7293381669363883,
        employeeId: 1
      },
      {
        name: "sdfhsdfghs",
        description: "dfhsdfhsdf",
        startDate: "",
        endDate: "",
        id: 0.4005027891874915,
        employeeId: 1
      },
      {
        name: "rtyirty",
        description: "rtyirty",
        startDate: "",
        endDate: "",
        id: 0.8467721379067392,
        employeeId: 2
      },
      {
        name: "asdfasdf",
        description: "asdfasdf",
        startDate: "",
        endDate: "",
        id: 0.725553530932153,
        employeeId: 15
      }

  ])
  const [newname,setnewname]=useState("")
  const [newposition,setnewposition]=useState("")
  const [newstartdate,setnewstartdate]=useState("")
  const [newid,setnewid]=useState("")
  const [newemployeeId,setnewemployeeId]=useState("")
  const [newenddate,setnewenddate]=useState("")
//   const [updatedata,setupdatedata]=useState("")


  function Addinfo(){
    if(newname!==""&&newposition!==""&&newemployeeId!==""&&newid!==""&&newstartdate!==""&&newenddate!==""){
      let newid=tasks.length+1
      let newinfo={id:newemployeeId,name:newname,description:newposition,startdate:newstartdate,endtdate:newenddate,employeeId:newemployeeId}
      settasks([newinfo,...tasks])
      setnewemployeeId("")
      setnewstartdate("")
      setnewenddate("")
      setnewposition("")
      setnewid("")
      setnewname("")

    }
  }
  function Deletetask(id){
    let newtask=tasks.filter(task=>task.id!==id)
    settasks(newtask)
  }
  return (

    <div className="App">
      <div className="addinfo">
        <input value={newname} onChange={(e)=>setnewname(e.target.value)} type="text" placeholder="Name"/>
        <input value={newposition} onChange={(e)=>setnewposition(e.target.value)} type="text" placeholder="Position"/>
        <input value={newemployeeId} onChange={(e)=>setnewemployeeId(e.target.value)} type="text" placeholder="EmployeeId"/>
        <input value={newid} onChange={(e)=>setnewid(e.target.value)} type="text" placeholder="Id"/>
        <input value={newstartdate} onChange={(e)=>setnewstartdate(e.target.value)} type="text" placeholder="Start Date"/>
        <input value={newenddate} onChange={(e)=>setnewenddate(e.target.value)} type="text" placeholder="End Date"/>

        <button onClick={Addinfo}>Add Task</button>
        
      </div>
      <div className="store">
        <div className="info">
          {
            tasks.map(e=>{
              return (
                <div key={e.id}>
                  <span className={e.status?"complet":""}>{e.employeeId}|{e.name} | {e.startDate} | {e.newposition}|{e.endDate}|{e.id}</span>
                  {/* <button onClick={()=>setupdatedata(e.id)}>Up Date</button> */}
                  <button onClick={()=>Deletetask(e.id)}>Delete Task</button>
                </div>
              )
            })
          }
              
        </div>
        
      </div>

        <div>
          <input  placeholder='search'  onChange={headersearch}/>
            {
              isPending && (<h2>Loading...</h2>)
            }
            <Container arr={filtersearch(coments,search)}/>
        </div>

    </div>
  )
    return (
        <div>
            
        </div>
    )
}


export default Tasks