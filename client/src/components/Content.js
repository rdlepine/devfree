import React, {Component} from 'react'
import { Switch as RouterSwitch, Route } from 'react-router-dom'
import Login from './security/Login'
import Register from './security/Register'
import Main from './Main'
import DisplayVideo from './DisplayVideo'
import About from './About'
import Success from './Success'



class Content extends Component {

    render() {
        return (
           <div>
            <RouterSwitch>
                <Route exact path='/' component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/video' component={DisplayVideo} />
                <Route path='/about' component={About} />
                <Route path='/Success' component={Success} />
            </RouterSwitch>
           </div>
        )
    } 
}

export default Content 