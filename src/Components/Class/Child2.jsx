import { Component } from "react";
import GrandChild from "./GrandChild";

class Child2 extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h2>Child 2</h2>
                <GrandChild data={this.props.stock}/>
            </div>
        )
    }
}

export default Child2