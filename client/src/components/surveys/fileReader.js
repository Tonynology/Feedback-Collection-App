import React, { Component } from 'react';
import * as Papa from 'papaparse';
import { Link } from 'react-router-dom';
//import SurveyForm from './SurveyForm';
import Table from 'react-bootstrap-table';
import ReactDOM from 'react-dom'

class FileReader extends Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined,
      data:null
    };
  //  this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: false
    });
  };

  updateData(result){
      var data = result.data;
      console.log(">>>>>")
      this.setState({
        data:data
      })
      console.log(data)
  }



  renderFile() {
    console.log(this.state.csvfile);
    return (
      <div className="App">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />


        <Link to="/surveys/new" onClick={this.importCSV}>
            read noww!!!
        </Link>

        <p />

      </div>
    );
  }

  render(){
   return(
       <table>
         <tbody>
           {
                this.data.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                         <td key={j}>{num}</td>
                      )
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>
   );
 }
}
ReactDOM.render(<Table/>,document.getElementById("root"));
