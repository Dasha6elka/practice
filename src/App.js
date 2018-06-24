import React, {Component, Fragment} from "react";
import {AddModalWindow, FormContent, HeadTableRow, TableRow} from "./components";

export default class App extends Component {
    static addSchema = [
        {
            type: "text",
            name: "fullName",
            placeholder: "ФИО",
        },
        {
            type: "text",
            name: "email",
            placeholder: "Email",
        },
        {
            type: "text",
            name: "phone",
            placeholder: "Телефон",
        },
    ];
    addModalRef = React.createRef();
    state = {
        head: ["№", "ФИО", "Сумма"],
        data: [
            ["Старыгин Константин Александрович", "1 234"],
            ["Цепелева Татьяна Александровна", "1 235"],
            ["Кузин Никита Олегович", "1 236"],
            ["Ведушев Алексей Анатольевич", "1 237"],
            ["Тимакова Елена Сергеевна", "1 238"],
            ["Егошин Роман Николаевич", "1 239"],
        ],
    };

    constructor(props) {
        super(props);
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    }

    static getFormContent(schema) {
        const ref = React.createRef();
        return {
            ref,
            value: <FormContent ref={ref} schema={schema}/>,
        };
    }

    render() {
        return (
            <Fragment>
                <table className={"highlight centered"}>
                    <thead>
                    <HeadTableRow
                        length={this.state.data.length}
                        head={this.state.head}
                        onAddButtonClick={this.onAddButtonClick}
                    />
                    </thead>
                    <tbody>
                    {this.state.data.map((row, index) => (
                        <TableRow
                            key={index}
                            index={index + 1}
                            data={row}
                            onDeleteButtonClick={this.onDeleteButtonClick}
                        />
                    ))}
                    </tbody>
                </table>
                <AddModalWindow
                    ref={this.addModalRef}
                    formContent={App.getFormContent(App.addSchema)}
                />
            </Fragment>
        );
    }

    onAddButtonClick() {
        if (!this.addModalRef.current) {
            return;
        }
        this.addModalRef.current.toggleVisibility();
    }

    onDeleteButtonClick(index) {
        this.state.data.splice(index - 1, 1);
        this.setState({data: this.state.data});
    }
}