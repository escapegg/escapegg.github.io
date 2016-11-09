var React = require("react");


class ScrollWrapper extends Component {

    propTypes = {onWindowScroll : React.PropTypes.func};

    componentDidMount() {
        if (this.props.onWindowScrool) window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div ref={r => this.>
                {this.props.children};
            </div>
    }

    handleScroll(event) {
        // Do something generic, if you have to
        console.log("ScrollWrapper's handleScroll");

        // Call the passed-in prop
        if (this.props.onWindowScroll) this.props.onWindowScroll(event);
    }

    componentWillUnmount() {
        if (this.props.onWindowScroll) window.removeEventListener("scroll", this.handleScroll);
    }
}

export default ScrollWrapper;
