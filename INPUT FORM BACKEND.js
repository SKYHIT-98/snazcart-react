import React from 'react'
import axios from 'axios';



class Accessories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: '', refer: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(event) {
        this.setState({category: event.target.value});
        console.log(this.state.category)
      }
      handleChange2(event) {
        this.setState({refer: event.target.value});
        console.log(this.state.category)
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.category + this.state.refer);
        event.preventDefault();
        const data ={
            "category": this.state.category,
            "refer": this.state.refer
        }
        console.log(data)
        axios.post(`http://localhost:3005/categories`, { 
            "category": this.state.category,
            "refer": this.state.refer
         })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      }

     
    render() {
        
        return (
            <section className="col-6 container-custom">
            <form onSubmit={this.handleSubmit}>
        <label>
          CATEGORY:
          <input type="text" value={this.state.category} onChange={this.handleChange1} />
        </label>
        <label>
          URL:
          <input type="text" value={this.state.refer} onChange={this.handleChange2} />
        </label>
        <input type="submit" value="Submit" />
      </form></section>
        );
    }
}

export default Accessories;
