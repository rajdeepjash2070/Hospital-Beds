import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import "../App.css"
import Navbar from './Navbar'
class TransactionList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }


    render() {
        return (
            <div>
                <Navbar/>
                <TransactionForm
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <hr />
                {/* <table>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.bAccountNo}</td>
                                <td>{item.bName}</td>
                                <td>{item.amount}</td>
                                <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table> */}
                 <table className="table bg-secondary text-light ">
  <thead className="bg-primary">
    <tr>
      <th scope="col">Hospital id</th>
      <th scope="col">Name of the Hospital</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Number of available beds</th>
      <th scope='col' className='text-center' id='edithead'>Edit</th>
      <th scope='col' className='text-center' id='deletehead'> Delete</th>
    </tr>
  </thead>
  <tbody>
  {this.state.list.map((item, index) => {
                            return <tr key={index} scope="row">
                                <td> {index+1}</td>
                                <td className='clm1'>{item.bAccountNo}</td>
                                <td className='clm2'>{item.bName}</td>
                                <td className='clm3 p-4'> {item.amount}</td>
                                <td><button onClick={() => this.handleEdit(index)} className="btn btn-primary " id='editbtn'>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)} className="btn btn-warning text-light" id='deletebtn'>Delete</button></td>
                            </tr>
                            
                        })}
  </tbody>
</table>
            </div>
        )
    }
}

export default TransactionList