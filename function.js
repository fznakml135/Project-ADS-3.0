const uname = document.getElementById("uname")
const pass = document.getElementById("pass")
const submit = document.getElementById("submit-btn")
let inputData = [[uname, "Email atau Username"], [pass, "Password"]]
let kosong = []
let printAlert = ""

function gantiBaris(fromInput, toInput){
  fromInput.addEventListener("keypress",function onEvent(event){
    if(event.key == "Enter"){
      event.preventDefault();
      toInput.focus();
    }
  });
}

gantiBaris(uname, pass)

submit.addEventListener("click", function(event){
  if(uname.value == "" || pass.value == ""){
    event.preventDefault()
    printAlert = ""
    kosong = []
    for(let i = 0; i < inputData.length; i++){
      if(inputData[i][0].value == ""){
        kosong.push(inputData[i][1])
      }
    }
    for(let i = 0; i < kosong.length; i++){
      if(i == kosong.length - 1){
        printAlert += kosong[i] + " "
      }else{
        printAlert += kosong[i] + ", "
      }
    }
    alert(printAlert + "harus diinput")
    return false;
  }else{
    return true;
  }
})
