import { useEffect, useState } from 'react'
import Data from './data'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Add from "./add"



function App() {

    const [dat, setData] = useState("")

    //Using axios's get method for default route
    useEffect(() => {

      axios.get("http://localhost:6969/")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])
      
    
    //Using react-router-dom 
    return(
      <div>

        <BrowserRouter>
              <Routes>
                <Route index 
                      element={<> 
                                {dat} <br />
                                <Link to="/data">click here for data page</Link><br/> 
                                <Link to="/data/add">click here for adding data</Link><br/> 
                              </>}>
                </Route>
                <Route path='data' 
                      element={<>
                                <Data/>
                                <Link to="/">click her for home page</Link>
                              </>
                            }></Route>
                <Route path='data/add' 
                      element={<>
                                  <Add/>
                                  <Link to="/">click her for home page</Link>
                                </>
                              }></Route>
              </Routes>
        </BrowserRouter>

      </div>
    )
}

export default App
