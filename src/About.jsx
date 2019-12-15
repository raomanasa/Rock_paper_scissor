import React from "react"
import { UndrawGaming} from 'react-undraw-illustrations';
const About = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawGaming />
                </div>
                <div class="column">
                    <h1 className="ui header">About Game</h1>
                    <p id="rule0">Rule of the game!</p>
                    <p>Rock vs Paper -> Paper wins! </p>
                    <p>Rock vs Scissors -> Rocks wins!</p>
                    <p>Paper vs Scissors -> Scissors wins! </p>
                </div>
            </div>
        </div>
    )
}
export default About

