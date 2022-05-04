const Initial = document.querySelector("#initialPrice");
const Total = document.querySelector("#totalStocks");
const Current = document.querySelector("#currentPrice");
 
const button = document.querySelector("#button");

const output = document.querySelector("#output")

function calculateProfitLoss(){
    const ip = Initial.value;
    const tot = Total.value;
    const cp = Current.value;

    calculate(ip,tot,cp);
}
function calculate(initial , total , current){
    
    if(initial > current){
        console.log("texted");

        const loss = ( initial - current ) * total;
        const lossPercent = loss / initial * 100;

        console.log(`Hey! Your loss is ${loss} and loss percentage is ${lossPercent}`);

    }
    else if (current > initial){

        const profit = (current  - initial ) * total;
        const profitPercent = profit / initial * 100;

        console.log(`hey! your profit is ${profit} and your profitPercentage is ${profitPercent}`);
    }
    else{
        console.log("No profit , No Loss")
    }
}

button.addEventListener("click" , calculateProfitLoss)