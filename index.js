let container =document.getElementById("container")
let sejarah = document.getElementById("sejarah")
let positif = document.getElementById("positif")
let negatif = document.getElementById("negatif")
let pw = document.getElementById("pw")
let user = document.getElementById("user")
let kesimpulan = document.getElementById("kesimpulan")
let register = document.getElementById("register")
container.style.display = "none"
sejarah.style.display = "none"
positif.style.display = "none"
negatif.style.display = "none"
kesimpulan.style.display = "none"
function login() {
    if(pw.value == "123" && user.value == "raffi"){
container.style.display = "flex"
sejarah.style.display = "block"
positif.style.display = "flex"
negatif.style.display = "flex"
kesimpulan.style.display = "flex"
register.style.display = "none"

    }else{
return alert("gagal");
    }
}
