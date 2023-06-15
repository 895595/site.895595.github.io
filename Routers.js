import Employes from "../Pages/Employes";
import Tasks from "../Pages/Tasks";
import {Routes,Route,Navigate} from 'react-router-dom'



function Routers(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<Navigate to="Employes"/>}/>
                <Route path='/Employes' element={<Employes/>}/>
                <Route path='/Tasks' element={<Tasks/>}/>
            </Routes>
        </div>
    )
}

export default Routers