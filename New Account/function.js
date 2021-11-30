const email = document.getElementById("email")
const namaD = document.getElementById("nama-depan")
const namaB = document.getElementById("nama-belakang")
const uname = document.getElementById("uname")
const noHP = document.getElementById("no-telp")
const password = document.getElementById("password")
const submit = document.getElementById("submit-btn")
let inputData = [[email, "Email"], [namaD, "Nama Depan"], [namaB, "Nama Belakang"], [uname, "Username"], [noHP, "No. Handphone"], [password, "Password"]]
let kosong = []
let printAlert = ""

function gantiBaris(fromInput, toInput){
  fromInput.addEventListener("keypress",function onEvent(event){
    if(event.key == "Enter"){
      event.preventDefault();
      toInput.focus();
    }
  })
}

gantiBaris(email, namaD)
gantiBaris(namaD, namaB)
gantiBaris(namaB, uname)
gantiBaris(uname, noHP)
gantiBaris(noHP, password)

submit.addEventListener("click", function(event){
  if(email.value == "" || namaD.value == "" || namaB.value == "" || uname.value == "" || noHP.value == "" || password.value == ""){
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
