const registerUser = async (
    username,
    password,
    confirmPassword,
    email
  ) => {
    try {
      const res=await fetch('/register',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({username,password,confirmPassword,email})
      })

      const resData=await res.json();
      

      if(resData.success){
        window.location.href=resData.redirectUrl
      }else{
        notyf.error(resData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

const loginUser = async (
    email,
    password,
  ) => {
    console.log("fdf");
    
    try {
      const res=await fetch('/login',{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
          "content-type":"application/json"
        }
      })

      const resData=await res.json();
      
      if(resData.success){
        window.location.href=resData.redirectUrl
      }else{
        notyf.error(resData.message);
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    window.location = "/logout";
  };