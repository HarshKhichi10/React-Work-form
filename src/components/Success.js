import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';





class Success extends Component {
    
    continue =(e) =>{
        e.preventDefault();
        this.props.nextStep();   
 
    }


    back =(e) => {
        e.preventDefault();
        this.props.prevStep();   
 
    }
   
    render() {
  

         return (
            <MuiThemeProvider>
              <React.Fragment>   
               <AppBar title="Submission Successful" />
                    <h1> Thank You  Your Submission  is Done</h1>
                    <p> Come Again</p>
             </React.Fragment>
            </MuiThemeProvider>
                
            
        );
    }
}

const styles ={

    button:{
     margin : 15

    }
}
export default Success;