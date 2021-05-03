import { Component } from "react";

class GrandChild extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h2>GrandChild</h2>
                <p>{this.props.data}</p>
            </div>
        )
    }
}

export default GrandChild