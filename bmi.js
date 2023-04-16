function bmiCalculate() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let res = (weight / Math.pow((height / 100), 2)).toFixed(3)
    document.getElementById("result").innerHTML = "Your BMI value is : " + res
    if (res >= 18.5 && res <= 25) {
        document.getElementById("status").innerHTML = " Status : Normal"
    } else if (res < 18) {
        document.getElementById("status").innerHTML = " Status : Underweight"
    } else if (res > 25 && res <= 30) {
        document.getElementById("status").innerHTML = " Status : Overweight"
    } else {
        if (res > 30)
            document.getElementById("status").innerHTML = " Status : Obesity"
    }

}


function ftTocm() {
    let feet = document.getElementById("he1").value
    let cm = (feet * 30.48).toFixed(2)
    document.getElementById("cm").innerHTML = "Your height is : " + cm + " cm."
}