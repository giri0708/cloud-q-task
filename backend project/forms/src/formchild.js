import React from "react";
import '../src/form.css';
import axios from 'axios';


class FormChild extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            age:'',
            email: '',
            otp:'',
            onclick: false,
        }
    }
    // nameChange=(event)=>{
    //     this.setState({name:event.target.value})
    // }
    Eventhide=()=>{
        this.setState({onclick:true})
    }
    Changename=(event)=>{
         this.setState({fname:event.target.value})
    }
    ChangeAge=(event)=>{
        this.setState({age:event.target.value});
    }
    Email=(event)=>{
        this.setState({email:event.target.value})
    }
    otp=(event)=>{
        this.setState({otp:event.target.value})
    }
    Submit=(event)=>{
        event.preventDefault();
        const {fname,age,email,otp}=this.state;

        if(!String(otp)){
            alert("Wrong Registration")
        }else{
            alert('registered sucessfully');
        }
        axios({
            method:'POST',
            url: `http://localhost:4000/insert`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                    fname: fname,
                    age: age,
                    email: email
        
                }
        })
       
        .catch(err=> console.log(err))
        
        
    }
    
    render() {
        if (!this.state.onclick) {
            return (
                <div className="box">
                    <h5>register your Name:</h5>
                    <input className="input" type="text" placeholder="Enter a name" onChange={this.Changename} />
                    <br/>
                    <h5>Registerer Age</h5>
                    <input className="input" type="text" placeholder="Enter a Age" onChange={this.ChangeAge} />
                    <br/>
                    <br/>
                    <div className="ratio">
                    <input type="radio" /><span>Male</span>
                    <span>
                    <input type="radio"/><span>Female</span>
                    </span>
                    </div>
                    <h5>enter your email:</h5>
                        <input className="input" type="email"  placeholder="Enter a Email" onChange={this.Email}/>
                        <br/>
                    <button className="btn" onClick={this.Eventhide}>Next</button>
                    <br/>
                </div>
            )
        } else {
            return (
                <div>
                    <form className="box2" onSubmit={this.Submit}>
                         <h1>Email ID</h1>
                        <hr />
                        
                        <h5> Please enter the OTP to continue</h5>
                        <input type='text'className="input" onChange={this.otp} />
                        <br/>
                        <br/>
                        <div>
                        <input type="button" value="Back" onClick={()=>this.setState({onclick:false})} className="btn2"/>
                        <span>
                        <input type="submit" value="Verify"  className="btn2"/>
                        </span>
                       <br/>
                       </div>
                       <br/>
                       <br/>
                    </form>
                    {/* <button className="btn2">SUBMIT NOW</button> */}
                </div>

            )
        }
    }
}

export default FormChild;