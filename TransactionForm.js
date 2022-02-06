import React, { Component } from 'react'
import "../App.css"
class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                bAccountNo: '',
                iFSC: '',
                bName: '',
                amount: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            // <form onSubmit={this.handleSubmit} autoComplete="off">
            //     <input name="bAccountNo" placeholder="Account Number" onChange={this.handleInputChange} value={this.state.bAccountNo} /><br />
            //     < input name="iFSC" placeholder="IFSC" onChange={this.handleInputChange} value={this.state.iFSC} /><br />
            //     < input name="bName" placeholder="A/C Holder Name" onChange={this.handleInputChange} value={this.state.bName} /><br />
            //     < input name="amount" placeholder="Amount" onChange={this.handleInputChange} value={this.state.amount} /><br />
            //     <button type="submit">Submit</button>
            // </form>
            <form id='hospitalform' onSubmit={this.handleSubmit} autoComplete="off">
 
    {/* <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    {/* <input name="bAccountNo" className="form-control" id="formGroupExampleInput" placeholder="Name of the Hospital" onChange={this.handleInputChange} value={this.state.bAccountNo} /><br />
    
     < input name="bName" className="form-control" id="formGroupExampleInput" placeholder="Contact Number" onChange={this.handleInputChange} value={this.state.bName} /><br />
     < input name="amount" className="form-control" id="formGroupExampleInput" placeholder="Number of available beds" onChange={this.handleInputChange} value={this.state.amount} /><br /> */}
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">Name of the Hospital</label>
    <input type="text" class="form-control" name="bAccountNo" id="validationCustom03" placeholder="Name of the Hospital" onChange={this.handleInputChange} value={this.state.bAccountNo} required/>
    <div className="invalid-feedback">
      Please provide a valid Data.
    </div>
</div>
<div className="col-md-6">
    <label for="validationCustom03" className="form-label">Hospital Contact Number</label>
    <input type="text" class="form-control" name="bName" id="validationCustom03" placeholder="Contact Number" onChange={this.handleInputChange} value={this.state.bName} required/>
    <div className="invalid-feedback">
      Please provide a valid Data.
    </div>
</div>
<div className="col-md-6">
    <label for="validationCustom03" className="form-label">Avaialable beds in the hospital</label>
    <input type="text" class="form-control" name="amount" id="validationCustom03" placeholder="Number of available beds" onChange={this.handleInputChange} value={this.state.amount} required/>
    <div className="invalid-feedback">
      Please provide a valid Data.
    </div>
</div>
  
 <button class="btn btn-primary" id='submithospital' type="submit">Add or Edit Hospital</button>

</form>

        )
    }
}

export default TransactionForm