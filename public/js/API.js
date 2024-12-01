const searchStudent=()=>{
    const search=document.getElementById('search').value;
    window.location.href=`/students?search=${search}`
  }

  const deleteStudent=async(studentID)=>{
    try{
      const res=await fetch(`/students/student/${studentID}`,{
        method:"DELETE",
        headers:{
          "content-type":'application/json'
        },
      })

      const resData=await res.json();
      

      if(resData.success){
        window.location.href=resData.redirectUrl
      }else{
        notyf.error(resData.message);
      }
    }catch(err){
      console.log(err)
    }
  }
  
  const getEditStudent=(studentID)=>{
    window.location.href=`/students/student/${studentID}`
  }