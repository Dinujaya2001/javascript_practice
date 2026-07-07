let userList = [];

function signUp() {
 let FirstName =  document.getElementById("txtFirstName").value;
 let LastName = document.getElementById("txtLastName").value;
 let txtEmailOrPhoneNumber =document.getElementById("txtEmailOrPhoneNumber").value;
 let Password = document.getElementById("txtPassword").value;
 let Day = document.getElementById("txtDay").value;
 let Month = document.getElementById("txtMonth").value;
 let Year = document.getElementById("txtYear").value;
 let birthday = Day + "/" + Month + "/" + Year;
 let Gender = document.querySelector('input[name="selectGender"]:checked').value;

 if(txtEmailOrPhoneNumber.includes("@")){
    var Email = txtEmailOrPhoneNumber;
 }else if(txtEmailOrPhoneNumber.length === 10 ){
    var phoneNumber = txtEmailOrPhoneNumber;
 }else{
    alert("Please enter a valid email or phone number.");
    return;
 }


 let user = {
    FirstName: FirstName,
    LastName: LastName,
    txtEmailOrPhoneNumber: txtEmailOrPhoneNumber,
    Password: Password,
    birthday: birthday,
    Gender: Gender
 };

 userList.push(user);


 console.log(FirstName);
 console.log(LastName);
 console.log(txtEmailOrPhoneNumber);
 console.log(Password);
 console.log(birthday);
 console.log(Gender);
 


}