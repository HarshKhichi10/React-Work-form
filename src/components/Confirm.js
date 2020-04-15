import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List , ListItem} from  'material-ui/List'; 
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class Confirm extends Component {
    
   continue =(e) =>{
       e.preventDefault();
       this.props.nextStep();  
   }   
   back =(e) =>{
       e.preventDefault();
       this.props.prevStep();   

}   

    render() {
        const { values: { firstName,lastName,email,occupation,city,bio }} = this.props;

         return (
            <MuiThemeProvider>
              <React.Fragment>   
               <AppBar title="Confirm User Detail" />
                <List >
                  <ListItem
                    primaryText="FirstName"
                    secondaryText= { firstName }
                  />
 
                  <ListItem
                    primaryText="LastName"
                    secondaryText={ lastName }
                   />
                   <ListItem
                    primaryText="City"
                    secondaryText={ email }
                    />
                   <ListItem
                    primaryText="Occcupation"
                    secondaryText={ occupation }
                  />  
                   <ListItem
                    primaryText="Email"
                    secondaryText={ city }
                  /> 
                     <ListItem
                    primaryText="Bio"
                    secondaryText={ bio }
                  />

                 </List>             
                           
                <br/>           
               <RaisedButton 
               label ='Confirm & Continue'
               primary= {true}
               style = {styles.button}
               onClick = {this.continue}
               />
               <RaisedButton 
               label ='Back'
               primary= {true}
               style = {styles.button}
               onClick = {this.back}
               />

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
export default Confirm;