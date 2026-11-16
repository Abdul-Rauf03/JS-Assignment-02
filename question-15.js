alert("Section D — Problem-Solving Challenge")
document.write("<h1>Question 15: Employee Salary & Bonus System </h1><br>")


var salary = +prompt("Enter the basic salary")
var service = +prompt("Enter the Year Service")


if (salary >= 0 && salary <1000000) {


    var tax= (salary)*2/100
    console.log(salary,tax)

}
else if(salary>=1000000){

    
    var tax= (salary)*5/100
    console.log(salary,tax)



}
else {
    document.write("<br>Enter the correct salary")
}





if (service = 0 && service <= 1) {

    var bonus = "No Bonus"

}

else if(service > 1 && service <=3 ){

    var bonus=(salary)*5/100

}
else if(service > 3 && service <=5 ){

    var bonus=(salary)*10/100

}
else if(service > 5  ){

    var bonus=(salary)*15/100

}

else {
    document.write("<br>Enter the correct Service Year")

}


document.write("<br> <b> Basic Salary: Rs. "+salary)
document.write("<br><b> Bonus: Rs. "+bonus)
document.write("<br><b> Tax: Rs. "+tax)
document.write("<br><b> Tax: Rs. "+(salary+bonus-tax))
