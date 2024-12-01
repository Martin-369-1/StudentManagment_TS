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

  const postAddStudent = async (name,DOB,gender,grade,admissionNo,enrollmentDate) => {
    try {
      const res = await fetch("/students/student", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          DOB,
          gender,
          grade,
          admissionNo,
          enrollmentDate,
        }),
      });

      const resData = await res.json();
      
      if(resData.success){
        window.location.href=resData.redirectUrl
      }else{
        notyf.error(resData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editStudent = async (studentID,name,DOB,gender,grade,admissionNo,enrollmentDate) => {
    try {
        console.log(studentID);
        
      const res = await fetch(`/students/student/${studentID}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          DOB,
          gender,
          grade,
          admissionNo,
          enrollmentDate,
        }),
      });

      const resData = await res.json();
      console.log(resData)
      if(resData.success){
        window.location.href=resData.redirectUrl
      }else{
        notyf.error(resData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };