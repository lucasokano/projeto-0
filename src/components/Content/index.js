import React from 'react'
import './index.css'
import {Switch, Route} from 'react-router-dom'

const Content = props => {
    return(
        <div className="Content">
            <Switch>
                <Route path="/Home">
                    <h1>Home</h1>
                    <p>aqui está o texto do Home</p>
                </Route>

                <Route path="/About">
                    <h1>About this fucking project</h1>
                    <p>Aqui está o texto do About</p>
                </Route>




            </Switch>
        </div>
    )
    
 }

export default Content;