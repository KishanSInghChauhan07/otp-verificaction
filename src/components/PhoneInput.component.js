import React from 'react';
import {Card,Button} from '@material-ui/core'
import Phone from 'react-phone-number-input'; 
import 'react-phone-number-input/style.css';
import swal from 'sweetalert';

const PhoneInput = () =>{

    const [number,setNumber] = React.useState("")

    const handleSubmit = () => {
        if(!number){
            swal("Please add phone field", {
                button: false,
                timer:"2000"
            });
            return
        }
        else{
            let otp = window.prompt("Enter OTP")  
            if(otp == 1234){
                    swal("Good job!", "You can access!", "success");
            }
            else{
                swal("OTP is incorrect", "You can't access!", "warning");

            }
            
        }
             
        
    }
    return(
        <Card style={{width:'50%',textAlign:'center',padding:'40px',margin:'15% auto 0 auto'}} className="shadow" >
            <Phone className="Phone-Input"
                defaultCountry="IN"
                flagsImagePath='/path/to/images/flags.png'
                value= {number}
                onChange={ phone => setNumber(phone) } 
                style={{width:'80%',margin:'40px auto',height:'20px'}}
            />

            <Button onClick={handleSubmit} variant="contained" color="primary" style={{margin:'2px auto'}}>
                Send OTP
            </Button>
        </Card>
    )
}

export default PhoneInput;