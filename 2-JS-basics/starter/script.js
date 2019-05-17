var markMass = 71.214
var markHeight = 1.8288
var johnMass = 72.5748
var johnHeight = 1.95072

var markBmi = parseInt(markMass / (markHeight*markHeight))
var johnBmi = parseInt(johnMass / (johnHeight*johnHeight))
var markHigher = markBmi > johnBmi

if (markHigher === true){
    console.log("Marks bmi is higher")
}else{
    console.log("johns Bmi is bigger")
}


var bill


function calculateTip(bill){
    var percentage;

    if(bill < 50){
        percentage = .2
    }
    else if(bill >= 50 && bill <200){
        percentage = .15
    }
    else{
        percentage = .1
    }
    return percentage * bill
}

var familyOneBills = [124,48,268]
var tipsFamilyOne = [calculateTip(familyOneBills[0]),
            calculateTip(familyOneBills[1]),
            calculateTip(familyOneBills[2])];

var finalValuesFamilyOne = [familyOneBills[0] + tipsFamilyOne[0],
familyOneBills[1] + tipsFamilyOne[1],
familyOneBills[2] + tipsFamilyOne[2]]

console.log(tipsFamilyOne, finalValuesFamilyOne)

var familyTwoBills = [77,375,110,45]

// 5 different restaurants, $124, $48, $268, $180, and $42
// want to tip 20% of bill when bill<50 
// 15% bill >= 50 && bill <200
// else 10%

// Create object with an array for bill values
// Add method to calculate tip
// should include a loop to iterate over all the paid bills and
//do the tip calculations
// output: 
//array containing all tops
// array with final paid amounts(bill+tip))


// 77, 375, 110, 45
// 20% when bill <100
// 10% when bill is between 100-300
// 25% when bill is more than 300

function averageTips(tips){
    for(i=0; i<tips.length; i++){
        var sum = tips[i]
        average = sum/tips.length
        
    }
    console.log(average);
    return average;
}

averageTips(tipsFamilyOne); 


var jordan = {
    name: "Jordan Salisbury",
    bills: [124, 48,268, 180,42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
         
        for(i=0; i<this.bills.length; i++){
            var percentage;
            var bill = this.bills[i]
            if(bill < 50){
                percentage = .2;
            }else if(bill >= 50 && bill <200){
                percentage = .15;
            }else{
                percentage = .1;
            }
            
            var amountToTip = this.tips.push(bill*percentage)
            amountToTip.toFixed(2)
            this.finalValues.push(bill + amountToTip)

            // this.tips[i] = bill * percentage
            // this.finalValues[i] = bill + bill + percentage

        } 
    }
}


 jordan.calcTips()
 console.log(jordan)
