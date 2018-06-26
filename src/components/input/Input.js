import React, {Component} from "react";

export default class Input extends Component {
    state = {
        value: "",
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getValue = this.getValue.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value});
    }

    onChange(event) {
        this.setValue(event.target.value);
    }

    getValue() {
        return this.state.value;
    }

    setValue(value) {
        this.setState({value});
    }

    render() {
        const {value, ...params} = this.props;
        return <input
            {...params}
            value={this.state.value || value}
            onChange={this.onChange}
        />;
    }
}