import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';

class Login extends React.Component {
constructor(props, context){
  super(props, context);
  this.state={
  username:'',
  password:'',
  lat: "",
  lon: "",
  state: "false",
  }
  this.handleClick = this.handleClick.bind(this);
  this.storeLocation = this.storeLocation.bind(this);
  this.submitTask = this.submitTask.bind(this);
 }


 storeLocation(pos) {
   const crd = pos.coords;
   this.setState({
     lon: crd.longitude,
     lat: crd.latitude,}, () => {
       this.submitTask();
     });
 }

 submitTask() {
   var apiBaseUrl = "https://beaconhacktx18.herokuapp.com/login";
   var self = this;
   console.log("Button pressed");
   var payload={
   "uname":this.state.username,
   "pass":this.state.password,
   "gate":" ",
   "airl":" ",
   "lat":this.state.lat,
   "lon":this.state.lon,
   }
   axios.post(apiBaseUrl, payload)
   .then((response) => {
   console.log(response);
   if(response.data == "Success"){
   console.log("Login successfull");
<<<<<<< HEAD
   localStorage.setItem("currentUser",this.state.username);
=======
>>>>>>> 3f2b3f9bb38d6b85fde6afe65f1305ecde685d3e
   this.props.history.push('./');
   }
   else if(response.status == "Fail"){
   console.log("Check username/password");
   alert("Check username/password")
   }
   else{
   console.log("Username does not exists");
   alert("Username does not exist");
   }
   })
   .catch(function (error) {
   console.log(error);
   });
 }

 setLocationError(err) {
   console.warn(`ERROR(${err.code}): ${err.message}`);
 }

 handleClick(event){
   const options = {
     enableHighAccuracy: true,
     timeout: 5000,
     maximumAge: 0
   };
   navigator.geolocation.getCurrentPosition(this.storeLocation, this.setLocationError, options);
   if (this.state.valid == "true")
    this.props.history.push('./');
}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.handleClick()}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 3f2b3f9bb38d6b85fde6afe65f1305ecde685d3e
