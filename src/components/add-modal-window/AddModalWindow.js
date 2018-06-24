import React, {Component} from "react";
import {ModalWindow} from "../index";
import PropTypes from "prop-types";


export default class AddModalWindow extends Component {
    modalRef = React.createRef();
    formContentRef = React.createRef();

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        this.formContentRef = this.props.formContent.ref;
        return (
            <ModalWindow
                onSubmit={this.onSubmit}
                ref={this.modalRef}
                formContent={this.props.formContent.value}
            >
                <button
                    type={"submit"}
                    className={"button btn waves-effect waves-light"}
                >
                    Send
                </button>
            </ModalWindow>
        );
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.formContentRef.current.getValues());
    }

    toggleVisibility() {
        if (!this.modalRef.current) {
            return;
        }
        this.modalRef.current.toggleVisibility();
    }
}

AddModalWindow.propTypes = {
    formContent: PropTypes.shape({
        ref: PropTypes.object.isRequired,
        value: PropTypes.object.isRequired,
    }).isRequired,
};