let firstName = document.getElementById('fname').value;
console.log(firstName);
let lastName = document.getElementById('lname').value;
console.log(lastName);
let phoneNumber =  document.getElementById('pno').value;

let gender = document.querySelector('input[name="radios"]:checked').value;
console.log(gender);

let selection = [];
let choosed = document.getElementsByName('selection');
for(let i = 0; i<choosed.length; i++){
  if(choosed[i].checked){
    selected.push(choosed[i].value);
  }
}
