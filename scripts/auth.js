

class user{
    constructor(n){
        // this.n = n;
    }

    #checkUserName(){
       let value= username.includes("#") ? false : true; 
       return value;
    }
  #checkpassword(password){
    let value= password.length>8 ? true : false;
    return value;
  }
    
 async signup(u,p,e,n,m,d){
let isValid = this.#checkUserName(u) && this.#checkpassword(p);

// if user validated. store data in ES6 class
if(isValid){
   this.user=u;
   this.password=p;
   this.email=e;
   this.name=n;
   this.mobile=m;
   this.discription=d;
    let actualData = JSON.stringify(this)
    const reg_url=`https://masai-api-mocker.herokuapp.com/auth/register`;
    try{
        let res= await fetch(reg_url,{
      method: 'POST',
      body :actualData,
      headers: {
        'Content-Type': 'application/json'
      }
        });
        let data= await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
    
}
    }

    async login(u,p) {

    }
}

let u1=new user();

let register=()=>{
    const email=document.getElementById('email').value;
    const username=getInputValue('username').value;
    const password=getInputValue('password').value;
    const mobile=getInputValue('mobile').value;
    const name=getInputValue('name').value;
    const discription=getInputValue('discription').value;
    
u1.signup(email,username,password,mobile,name,discription)
}


let login=()=>{
    n1.login()
}