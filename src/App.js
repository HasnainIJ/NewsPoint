
import './App.css';
import React, { useState} from 'react'
import Navbar from './Component/Nav';
import News   from './Component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

 const App=()=> {
  const pageSize= 5;

 const apikey = "fbdb6916499944a18441734fdd407700";

 const [progress, setProgress] = useState(0)
 
 
 
  

    return (


      <Router>      
        <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
     
          <Navbar/>
          
       <Switch>
          <Route exact path="/">
          <News  setProgress={setProgress}  apikey={apikey}  country="in" category="general"pageSize={pageSize} key ="general" />
          </Route>

          <Route exact path="/business">
          <News  setProgress={setProgress}  apikey={apikey} country="in" category="business"pageSize={pageSize} key ="business" />
          </Route>

          <Route exact path="/entertainment">
          <News  setProgress={setProgress}  apikey={apikey} country="in" category="entertainment"pageSize={pageSize} key ="entertainment" />
          </Route>
         
          <Route exact path="/general">
          <News  setProgress={setProgress}  apikey={apikey} country="in" category="general"pageSize={pageSize} key ="general"/>
          </Route>

          <Route exact path="/health">
          <News  setProgress={setProgress}  apikey={apikey} country="in" category="health"pageSize={pageSize} key ="health" />
          </Route>


          <Route exact path="/science">
          <News  setProgress={setProgress}  apikey={apikey} country="in" category="science"pageSize={pageSize} key ="science" />
          </Route>

          
          <Route exact path="/sports">
          <News  setProgress={setProgress}  apikey={apikey} country="in" category="sports"pageSize={pageSize} key ="sports" />
          </Route>

          
          <Route exact path="/technology">
          <News  setProgress={setProgress}  apikey={apikey} country="in" category="technology"pageSize={pageSize} key ="technology" />
          </Route>





        </Switch>

      </div>
      </Router>


    )
  
}
export default App