import { Component } from "react";

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    minBeli = 1

    render() {
        return (
            <div>
                <h2>Child Component</h2>
                <button onClick={() => this.props.beli_produk(this.minBeli)}>Beli</button>
                <p>Stock: {this.props.stock}</p>
            </div>
        )
    }
}

export default Child1