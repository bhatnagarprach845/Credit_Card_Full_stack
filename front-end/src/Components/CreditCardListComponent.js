import CreditCardService from '../Services/CreditCardService';
import {Component} from 'react';

class CreditCardListComponent extends Component {

    constructor(props) {
        super(props);
        this.state={data:[]};
    }

    componentDidMount() {
        this.setState({data: this.props.temp.data});
    }

    render(){
        return (<div>
        <br/>
            <table width = "95%" align='center'
            border='.50' border-color='black'
            className="table-striped table-hover">
                <thead className="CreditCardHeader">
                            <tr >
                                <th>Name</th>
                                <th>Card Number</th>
                                <th>Balance</th>
                                <th>Limit</th>
                            </tr>
                </thead>
                <tbody className="tableBody">
                            {this.props.temp.data.map(card=>
                               <tr key={card.id}>
                                   <td>{card.name}</td>
                                   <td>{card.cardNumber}</td>
                                   <td className={card.balance < 0 ? "redColColor" :"Black"}>£{card.balance === null ? 0.0 : card.balance}</td>
                                   <td className={card.limit <= 0 ? "redColColor" :"Black"}>£{card.limit}</td>
                               </tr>
                                )}
                </tbody>
            </table>
        </div>
        );
    }
}

export default CreditCardListComponent;