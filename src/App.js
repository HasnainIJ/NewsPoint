
import './App.css';
import React, { Component} from 'react'
import Navbar from './Component/Nav';
import News   from './Component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  
  state={progress: 0}

  setProgress=(progress) => {
   this.setState({progress:progress})

  }
 
 
 
  render() {

    return (


      <Router>      
        <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
     
          <Navbar/>
          
       <Switch>
          <Route exact path="/">
          <News  setProgress={this.setProgress}  country="in" category="general" key="general" />
          </Route>

          <Route exact path="/business">
          <News  setProgress={this.setProgress}  country="in" category="business" key="business" />
          </Route>

          <Route exact path="/entertainment">
          <News  setProgress={this.setProgress}  country="in" category="entertainment" key="entertainment" />
          </Route>
         
          <Route exact path="/general">
          <News  setProgress={this.setProgress}  country="in" category="general" key="general"/>
          </Route>

          <Route exact path="/health">
          <News  setProgress={this.setProgress}  country="in" category="health" key="health" />
          </Route>


          <Route exact path="/science">
          <News  setProgress={this.setProgress}  country="in" category="science" key="science" />
          </Route>

          
          <Route exact path="/sports">
          <News  setProgress={this.setProgress}  country="in" category="sports" key="sports" />
          </Route>

          
          <Route exact path="/technology">
          <News  setProgress={this.setProgress}  country="in" category="technology" key="technology" />
          </Route>





        </Switch>

      </div>
      </Router>


    )
  }
}
