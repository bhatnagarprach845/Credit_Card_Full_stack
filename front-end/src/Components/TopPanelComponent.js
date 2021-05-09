import react from 'react';
import {Component} from 'react';
import CreditCardService from '../Services/CreditCardService';

class TopPanelComponent extends Component {

    constructor(props){
    super(props);
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
    this.check = this.check.bind(this);
    this.state ={
            name:"",
            cardNumber:"",
            limit:"",
            valid: '',
            maxLength:19,
            }
    }

      componentDidUpdate(prevProps, prevState){
          if (prevState.cardNumber.length !== this.state.cardNumber.length
                      && this.state.cardNumber.length === this.state.maxLength ) {
                        this.setState({
                          valid: this.verifyNumber(this.state.cardNumber),
                        });
                  }

              }

    handleChange(event) {
    		console.log("handleChange clicked!!")
    		this.setState({
    			[event.target.name]: event.target.value
    		}, this.check())
    	}

    check(){
    	if (this.state.cardNumber.length !==0 && this.state.cardNumber.length <= this.state.maxLength ) {
                this.setState({
                  valid: this.verifyNumber(this.state.cardNumber),
                });
          }

    	}

verifyNumber = (value) => {
//	Credit card numbers will always be numeric
    if (/[^0-9-\s]+/.test(value)) return false;

    	// The Luhn Algorithm.
    	let nCheck = 0, bEven = false;
    	value = value.replace(/\D/g, "");

    	for (var n = value.length - 1; n >= 0; n--) {
    		var cDigit = value.charAt(n),
    			  nDigit = parseInt(cDigit, 10);

    		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    		nCheck += nDigit;
    		bEven = !bEven;
    	}

    	return (nCheck % 10) === 0;
  }

          getValidMessage = () => {
            if (this.state.valid !== '') {
              return this.state.valid
                ? 'Valid ✓'
                : 'Credit card number is invalid X';
            }

            return '';
          }



render(){
    return (

    <div>
        <table>
                <tbody className="inputHeading">
                    <tr>
                        <td>
                        <br/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" className="inputHeading">
                            Name
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <input name="name"
                            value={this.state.name}
                            onChange={this.handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <br/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            Card Number
                         </td>
                     </tr>
                    <tr>
                        <td>
                            <input name = "cardNumber" value={this.state.cardNumber}
                            placeholder="Enter Card Number"
                            maxLength={this.state.maxLength}
                            onChange={this.handleChange} onBlur={this.handleChange}></input>
                        </td>
                        <td>
                            <div className="error">
                                  <span className=
                                    { this.state.valid? 'error valid' : 'error invalid' }>
                                      { this.getValidMessage() }
                                  </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <br/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            Limit
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input placeholder="Enter limit"
                            name ="limit" value={this.state.limit}
                            onChange={this.handleChange} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <br/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <button
                            onClick={()=>this.props.temp(this.state)}
                            disabled={this.state.valid ? false:true}>
                            Add
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <br/>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" className="inputHeading2">
                            Existing Cards
                        </td>
                    </tr>
                </tbody>
        </table>
    </div>
    )
}
}

export default TopPanelComponent;