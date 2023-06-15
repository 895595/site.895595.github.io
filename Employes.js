import './Employes.css';
import {Components, startTransition, useEffect} from 'react';
import { useState } from 'react';
import { useTransition } from 'react';
import Container from '../Container';








function Employes(){
  const [coments,setcoments]=useState([])
  const [search,setsearch]=useState("")
  const [isPending,startTransition]=useTransition()

  const filtersearch=(e,s)=>{
    return (
      e.filter(iteam=>iteam.name.concat(iteam.body).includes(s))
    )
  }
  useEffect(()=>{
    fetch("https:/rocky-temple-83495.herokuapp.com/employees/").then((result)=>result.json()).then((data)=>setcoments(data))
  })
  

  const headersearch=(e)=>{
    startTransition(()=>{
      setsearch(e.target.value)
    })
  }
  

  const [people,setpeople]=useState([
    
    {
    name: "asdf",
    surname: "asdfa",
    email: "asdfasdf",
    position: "asdf",
    id: 25
  },
  {
    name: "asdfasdf",
    surnam: "asdfasdf",
    email: "asdf",
    position: "asdfasdf",
    id: 26
  },
  {
    name: "arman",
    surName: "ayvazyan",
    email: "armayv",
    "position": "junior",
    id: 27
  },
  {
    name: "Gor ",
    surname: "Avetisyan",
    email: "gor@mail.ru",
    position: "PO",
    id: 28
  },
  {
    name: "Arm",
    surname: "Armenia",
    email: "Arm@mail.ru",
    position: "HAY",
    id: 30
  },
  {
    id: 31
  },
  {
    name: "Jane",
    urname: "Poxosyan",
    email: "prog@mail.ru",
    position: "HR",
    id: 32
  },
  {
    name: "Hovo",
    surname: "Smith",
    email: "ishxan@mail.ru",
    position: "programmer",
    id: 33
  },
  {
    name: "Hovo",
    surname: "Poxosyan",
    email: "programmer@mail.ru",
    position: "developer",
    id: 34
  },
  {
    name: "Anna",
    surname: "Muradi",
    email: "anul@mail.ru",
    position: "HGG",
    id: 35
  }

  ])
  const [newname,setnewname]=useState("")
  const [newsurname,setnewsurname]=useState("")
  const [newposition,setnewpositio]=useState("")
  const [newid,setnewid]=useState("")
  // const [updatedata,setupdatedata]=useState("")


  function Addinfo(){
    if(newname!==""&&newsurname!==""&&newposition!==""&&newid!==""){
      let newid=people.length+1
      let newinfo={id:newid,name:newname,surname:newsurname,position:newposition}
      setpeople([newinfo,...people])
      setnewname("")
      setnewsurname("")
      setnewpositio("")
      setnewid("")
    }
  }
  function Deletetask(id){
    let newtask=people.filter(task=>task.id!==id)
    setpeople(newtask)
  }
  return (

    <div className="App">
      <div className="addinfo">
        <input value={newname} onChange={(e)=>setnewname(e.target.value)} type="text" placeholder="Id"/>
        <input value={newsurname} onChange={(e)=>setnewsurname(e.target.value)} type="text" placeholder="Name"/>
        <input value={newposition} onChange={(e)=>setnewpositio(e.target.value)} type="text" placeholder="Surname"/>
        <input value={newid} onChange={(e)=>setnewid(e.target.value)} type="text" placeholder="Position"/>
        <button onClick={Addinfo}>Add Info</button>
        
      </div>
      <div className="store">
        <div className="info">
          {
            people.map(e=>{
              return (
                <div key={e.id}>
                  <span className={e.status?"complet":""}>{e.id} {e.name} | {e.surname} | {e.position}</span>
                  {/* <button onClick={()=>setupdatedata(e.id)}>Up Date</button> */}
                  <button onClick={()=>Deletetask(e.id)}>Delete</button>
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
}


export default Employes