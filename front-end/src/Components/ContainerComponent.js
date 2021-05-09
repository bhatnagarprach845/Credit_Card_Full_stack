import {Component} from 'react';
import TopPanelComponent from './TopPanelComponent';
import CreditCardListComponent from './CreditCardListComponent';
import CreditCardService from '../Services/CreditCardService';

class ContainerComponent extends Component{

        constructor(props){
        super(props);
        this.state={data:[]};
        this.handleAdd=this.handleAdd.bind(this);
        this.retrieveAllCards=this.retrieveAllCards.bind(this);
        }

      componentDidMount() {
        this.retrieveAllCards();
        }

        handleAdd(value){
            this.retrieveAllCards();
            CreditCardService.addCard(value).then(console.log("inserted")).then(this.retrieveAllCards());
            alert("Card for : " + value.name + " with £0 balance inserted !!!")
            this.retrieveAllCards();
        }

         retrieveAllCards() {
                CreditCardService.retrieveAllCards()
                    .then(
                        response => {
                            this.setState({
                                data:response.data
                            });
                        }
                    )
            }

 render(){
         return (
                 <div>
                     <TopPanelComponent temp={this.handleAdd}/>
                     <CreditCardListComponent temp={this.state}/>
                 </div>
                )
         }
}

export default ContainerComponent;