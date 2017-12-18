import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.updateTime(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    updateTime() {
        let time = this.state.time;
        time = new Date().toLocaleTimeString();
        this.setState({ time: time });
    }

    render() {
        return (
            <h1 style={{margin:'10% auto', fontSize: '6em', textAlign: 'center'}}>The time is: {this.state.time}</h1>
        );
    }
}
export default Clock;