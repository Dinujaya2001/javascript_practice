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
 loadTable();


 console.log(userList[0].FirstName);
 console.log(userList[0].LastName);
 console.log(userList[0].txtEmailOrPhoneNumber);
 console.log(userList[0].Password);
 console.log(userList[0].birthday);
 console.log(userList[0].Gender);
 


}

function loadTable(){
   let tableData = document.getElementById("trUserData");
   let tableContent = "";
   for(let i = 0; i<userList.length;i++){
      tableContent += `<tr >
        <td >${userList[i].FirstName}</td>
        <td >${userList[i].LastName}</td>
        <td >${userList[i].txtEmailOrPhoneNumber}</td>
        <td >${userList[i].Password}</td>
        <td >${userList[i].birthday}</td>
        <td >${userList[i].Gender}</td>
    </tr>`

    tableData.innerHTML = tableContent;

     console.log(tableData);
   }
}