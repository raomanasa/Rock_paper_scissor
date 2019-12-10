import React from "react"
class Check extends React.Component {

    render() {
        let array = ["rock","paper","scissor"];
        let index = Math.floor(Math.random() * array.length);
        let computerSelect = array[index];
        let userSel = this.props.select;
        let result;
        if(userSel === computerSelect){
            result = "RESULT is TIE";
        }
        else {
            if(userSel === "paper" && computerSelect === "rock") {
                result = "YOU WIN";
            }
            else if(userSel === "rock" && computerSelect === "paper"){
                result = "COMPUTER WIN"
            }
            else if(userSel === "rock" && computerSelect === "scissor") {
                result = "YOU WIN";
            }
            else if(userSel === "scissor" && computerSelect === "rock"){
                result = "COMPUTER WIN"
            }
            else if(userSel === "scissor" && computerSelect === "paper") {
                result = "YOU WIN";
            }
            else if(userSel === "paper" && computerSelect === "scissor"){
                result = "COMPUTER WIN"
            }
            
        }
        return (
                <div>
                    <h1>You selected : {userSel}</h1>
                    <h1>Computer selected : {computerSelect}</h1>
                    <h1>{result}</h1>
                </div>                   
        )
    }
}
export default Check

