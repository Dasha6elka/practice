import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

export default class FormContent extends Component {
    inputs = {};

    render() {
        return (
            <Fragment>
                {
                    this.props.schema.map((item, index) => {
                        if (item.type === "submit" || item.type === "button") {
                            throw new Error(`Input of type ${item.type} in not allowed`);
                        }
                        if (!item.name) {
                            throw new Error("Name of input is not specified");
                        }
                        const params = {
                            type: item.type || "text",
                            placeholder: item.placeholder || "",
                            name: item.name,
                            disabled: item.disabled || false,
                        };
                        if (item.value) {
                            params.defaultValue = item.value;
                        }
                        return <input
                            key={index}
                            ref={ref => this.inputs[item.name] = ref}
                            {...params}
                        />;
                    })
                }
            </Fragment>
        );
    }

    getValues() {
        const result = {};
        for (const key in this.inputs) {
            if (!this.inputs.hasOwnProperty(key)) {
                continue;
            }
            result[key] = this.inputs[key].value;
        }
        return result;
    }
}

FormContent.propTypes = {
    schema: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        value: PropTypes.string,
    })).isRequired,
};