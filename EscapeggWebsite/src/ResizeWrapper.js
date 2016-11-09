import React, { Component } from 'react';


class ResizeWrapper extends Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.onRef = this.onRef.bind(this);
        
    }

    componentDidMount() {
        this.resizeElement.addEventListener("resize", this.handleResize);
        window.addEventListener("resize", this.handleResize);
        console.log("BILABOBOBOBOBOBOBOBOBOBOBOBOBOB:ELRJE:LRJERHERELRHE:LRHJ");
    }

    componentWillUnmount() {
        this.resizeElement.removeEventListener("resize", this.handleResize);
        console.log("THEREHREHRHERHEHREHRHERHEHREHRHR:ELRJE:LRJERHERELRHE:LRHJ");
    }

    onRef(r) {
        this.resizeElement = r;
        console.log("HEREEHRHERHEHREHRHER:ELRJE:LRJERHERELRHE:LRHJ");
    }

    render() {
        return (
            <div ref={this.onRef}>
                {this.props.children};
            </div>
        )
    }

    handleResize = (event) => {
        // Do something generic, if you have to
        console.log("ResizeWrapper's handleResize");

        // Call the passed-in prop
        if (this.props.onWindowResize) this.props.onWindowResize(event);
        return true;
    }


}

export default ResizeWrapper;
