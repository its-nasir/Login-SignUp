// for images adding
const image_input = document.querySelector(".image_input");
console.log(image_input);
image_input.addEventListener("change", function () {
  const render = new FileReader();
  render.addEventListener("load", () => {
    uploaded_image = render.result;
    document.querySelector(
      "#display_image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  render.readAsDataURL(this.files[0]);
});


        //    register page localStorage data 
function validateForm(){
    

    let data=window.localStorage.getItem('data') ? JSON.parse(window.localStorage.getItem('data')) : [];;
    let formData ={
            "name":document.getElementById("uName").value,
            "lname":document.getElementById("lName").value,
            "email":document.getElementById("uEmail").value,
            "DOB":document.getElementById("DOB").value,
            "password":document.getElementById("uPassword").value,
            "address":document.getElementById("address").value,
            "confirmpassword":document.getElementById("confirmPassword").value
        }
        data.push(formData);
        console.log(formData);
        console.log(document.getElementById("uName").value);


        if(window.localStorage){
            window.localStorage.setItem("data", JSON.stringify(data));
        } 
}
var hdn = document.querySelector('hdn');
function verifyPassword(input){
    if(input.value != document.getElementById("uPassword").value){
        // hdn.classList.remove('hdn')
        
        // input.getElementById('pass-hidden').style.display = "none";
        // return a=0;
        input.setCustomValidity("Please check you password");
    }else{
        // hdn.classList.add('hdn')
        input.setCustomValidity("");
    }
}







