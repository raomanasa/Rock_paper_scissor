import React from "react"
//import React, { Component } from "react"
import { Route,Link, Switch,BrowserRouter } from "react-router-dom"
import Check from "./Check"
//const Game = () => {
class Game extends React.Component { 
    //let displaycontent = "Rock"
    render () {
        return (
            <div className="ui main container">
                <div class="ui stackable two column grid">
                    <div class="column">
                        <h1 className="ui header">Press any button!</h1> 
                        <BrowserRouter>
                        <button class="ui secondary button"><Link to="/game/rock">Rock</Link></button>
                        <button class="ui secondary button"><Link to="/game/paper">Paper</Link></button>
                        <button class="ui secondary button"><Link to="/game/scissor">Scissor</Link></button>
                        <Switch>
                            <Route path="/game/rock"><Check select="rock"/></Route>
                            <Route path="/game/paper"><Check select="paper" /></Route>
                            <Route path="/game/scissor"><Check select="scissor" /></Route>
                        </Switch>
                        </BrowserRouter> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Game

