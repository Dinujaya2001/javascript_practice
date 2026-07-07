let userList = [];

function signUp() {
 let FirstName =  document.getElementById("txtFirstName").value;
 let LastName = document.getElementById("txtLastName").value;
 let Email =document.getElementById("txtEmail").value;
 let Password = document.getElementById("txtPassword").value;
 let Day = document.getElementById("txtDay").value;
 let Month = document.getElementById("txtMonth").value;
 let Year = document.getElementById("txtYear").value;
 let birthday = Day + "/" + Month + "/" + Year;
 let Gender = document.querySelector('input[name="selectGender"]:checked').value;


 let user = {
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Password: Password,
    birthday: birthday,
    Gender: Gender
 };

 userList.push(user);


 console.log(FirstName);
 console.log(LastName);
 console.log(Email);
 console.log(Password);
 console.log(birthday);
 console.log(Gender);
 


}