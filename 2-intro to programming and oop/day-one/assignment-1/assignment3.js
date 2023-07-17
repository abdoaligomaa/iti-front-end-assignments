function checkTemperature() {
    var temp1=prompt("Enter There Temprature Today : ")
    const temp=parseInt(temp1)
    console.log(temp);
    if(isNaN(temp)){
        document.write('no valid Number ')
    }else if(temp<30){
        document.write('Temprature is cold')

    }else if(temp>=30){
        document.write('Temprature is hot ')
    }
}

checkTemperature()