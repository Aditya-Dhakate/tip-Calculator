const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
// const printBill = document.getElementById('printBill')



let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    // console.log(numberOfPeople)
    // console.log(billTotalInput.value)
    const  bill = Number(billTotalInput.value)
    // console.log({bill})

    const tip = Number(tipInput.value) / 100
    // console.log({tip})

     const tipAmount = bill * tip 
    //  console.log({tipAmount})

    const total = tipAmount + bill
    // console.log({total})

    const perPersonTotal = total / numberOfPeople
    // console.log({perPersonTotal})
  
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

}

const incerasePeople = () => {
    numberOfPeople += 1
   

    numberOfPeopleDiv.innerText = numberOfPeople


    calculateBill()
}
const decreasPeople = () => {


    if (numberOfPeople <= 1) {
        alert("hey you connot go below 1 person")
       return 
    }
   


    numberOfPeople -=1


    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
    // print(calculateBill())
}


