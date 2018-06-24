import React, {Component, Fragment} from "react";
import TableRow from "./TableRow";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
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
    }

    render() {
        return (
            <Fragment>
                <table className={"highlight centered"}>
                    <thead>
                    <tr>
                        {this.state.head.map((item, index) => <th key={index}>{item}</th>)}
                        <th/>
                        <th/>
                        <th>
                            <a className="btn-floating btn-large waves-effect waves-light red">
                                <i className="material-icons">add</i>
                            </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((row, index) => (
                        <TableRow
                            key={index}
                            index={index + 1}
                            data={row}
                            onDeleteButtonClick={this.onDeleteButtonClick.bind(this)}
                        />
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }

    onDeleteButtonClick(index) {
        this.state.data.splice(index - 1, 1);
        this.setState({data: this.state.data});
    }
}