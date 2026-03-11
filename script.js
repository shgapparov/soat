let time = document.getElementById('time')
let datee = document.getElementById('datee')
setInterval(()=>{
    const vaqt = new Date()
    let soat = vaqt.getHours().toString().padStart(2,0)
    let minut = vaqt.getMinutes().toString().padStart(2,0)
    let sekund = vaqt.getSeconds().toString().padStart(2,0)
    let haftaKuni =vaqt.getDay()
    let kun = vaqt.getDate().toString().padStart(2,0)
    let oy = vaqt.getMonth()+1
    let yil = vaqt.getFullYear()
    let hafta =""
    if(haftaKuni===1){
        hafta="Dushanba"
    }
    else if(haftaKuni===2){
        hafta="Seshanba"
    }
    else if(haftaKuni===3){
        hafta="Chorshanba"
    }
    else if(haftaKuni===4){
        hafta="Payshanba"
    }
    else if(haftaKuni===5){
        hafta="Juma"
    }
    else if(haftaKuni===6){
        hafta="Shanba"
    }
    else if(haftaKuni===7){
        hafta="Yakshanba"
    }
    time.innerText=`${soat}:${minut}:${sekund}`
    datee.innerText=`${hafta}  ${kun}.${oy.toString().padStart(2,0)}.${yil}`

},1000)