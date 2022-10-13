import React from 'react';



class Form extends React.Component{
    constructor()
    {
        super();
        this.state={
            username:"null", password:"null", confrimpwd:"null", mobile:"null",
            usernameError:"", passwordError:"", confrimpwdError:"", mobileError:""
        }

    }
    valid(){
    if(!this.state.username.includes("@") && this.state.password.length < 8 &&  this.state.confrimpwd == this.state.password && this.state.mobile.length  == 10 ){
        this.setState(
            {usernameError: "Invalid Email" , passwordError: "Password length Should been greter than 8" , confrimpwdError: "Password not match" ,mobileError:"Mobile lenght should be 10 digit" }
        )

    }
    else if(!this.state.name.includes("@")){
        this.setState(
            {usernameError: "Invalid Email"})
        }

    else if(this.state.password.length <8){
        this.setState(
           { passwordError: "Password lenght Should been greter than 8"}
        )
    }   
    else{
        return true
    }
}
submit(){
    this.setState(
        {usernameError:"", passwordError:"", confrimpwdError:"" , mobileError:""}
    )
    if(this.valid()){
        alert("Form has been submit")

    }
    console.warn(this.state);
   
}

render(){
    return (
        <div>
           <section>
            <div className='register'>
                <div className="col-1">
                    <h2 className='h1'>SING IN</h2>
                    <span>Register Now</span>
                    <form id='form' className='flex flex-col'>
                        <input type="text" name='username'  placeholder='username@example.com' 
                        onChange={(e)=>{this.setState({username:e.target.value})}}/>
                        <p style={{color:"red", fontSize: "14px"}}>{this.state.usernameError}</p>

                        <input type="text"  placeholder='password@321' 
                        onChange={(e)=>{this.setState({password:e.target.value})}}/>
                       <p style={{color:"red", fontSize: "14px"}}>{this.state.passwordError}</p>

                        <input type="text"  placeholder='password@321' 
                        onChange={(e)=>{this.setState({confrimpwd:e.target.value})}}/>
                        <p style={{color:"red", fontSize: "14px"}}>{this.state.confrimpwdError}</p>




                        <input type="text"  placeholder='9656582421' 
                        onChange={(e)=>{this.setState({mobile:e.target.value})}}/>
                        <p style={{color:"red", fontSize: "14px"}}>{this.state.mobileError}</p>

                        <button onClick={()=>this.submit()} className='btn'>Sing In</button>
                        <span> <a href="">  Have already account Sing up </a> </span>


                    </form>

                </div>

            </div>
           </section>
        </div>
    );
}
}

export default Form;