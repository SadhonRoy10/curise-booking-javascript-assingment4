
/********************************************************************
 *                      Javascript Milestone-(4)
*********************************************************************/



// First class  Positive activities
const FirstClassPositive = document.getElementById('increaseVolume1');
FirstClassPositive.addEventListener('click',function(){
CostHandle('firstClassCounter',true);
getTotalCalculation();
});

// First class  Negative activities
const FirstClassNegative = document.getElementById('decreaseVolume1');
FirstClassNegative.addEventListener('click',function(){
CostHandle('firstClassCounter', false);
getTotalCalculation();
});

// EconomyClass Positive activities
const EconomyClassPositive = document.getElementById('increaseVolume2');
EconomyClassPositive.addEventListener('click',function(){
CostHandle('economyCounter',true);
getTotalCalculation();
});


// EconomyClass Negative activities
const EconomyClassNegative = document.getElementById('decreaseVolume2');
EconomyClassNegative.addEventListener('click',function(){
CostHandle('economyCounter',false);
getTotalCalculation();
});



/********************************************************************
 * This function calculate total cost first class and economy class
*********************************************************************/

function getTotalCalculation(){
    // first class counting area
    let firstClassCounter = document.getElementById('firstClassCounter').value;
	let firstClassInteger = parseInt(firstClassCounter);
	let firstClassTotalCost = firstClassInteger*150;
    // economy counting area
	let economyCounter = document.getElementById('economyCounter').value;
	let economyInteger = parseInt(economyCounter);
	let economyTotalCost =  economyInteger*100;
    // sub total area
	let subtotal = document.getElementById('subtotal').innerText ;
	subtotal = firstClassTotalCost+economyTotalCost;
//  vat and total area
document.getElementById('subtotal').innerText = subtotal;
let vat = subtotal/10;
document.getElementById('vat').innerText = vat;
let total =subtotal+vat;
document.getElementById('total').innerText = total;
	
}


/********************************************************************
 * This function for increase or decrease first class and economy class
*********************************************************************/
function CostHandle(id,isIncrease){
let productItem = document.getElementById(id).value;
let ProductInteger = parseInt(productItem);
if (isIncrease == true){
	ProductInteger++;
}
if (isIncrease == false){
	if(ProductInteger >0){
		ProductInteger--;	
	}
}
        
document.getElementById(id).value=ProductInteger;
};

/********************************************************************
 * This is confirmation Book now button activities
*********************************************************************/

let bookNow=document.getElementById("bookNow");
bookNow.addEventListener("click",function(){
    
    let bookingContent=document.getElementById("booking");
    bookingContent.style="opacity:0; transition:2s";

    let bookingFrom=document.getElementById("bookingFrom");
    bookingFrom.style="opacity:0; transition:2s";
    
    let Massage=document.getElementById("Massage");
    Massage.style="opacity:1; transition:2s";



    const firstClassPassenger =document.getElementById('firstClassCounter').value;
    document.getElementById('firstClassPassenger').innerHTML=firstClassPassenger;
    
    const economyClassPassenger =document.getElementById('economyCounter').value;
    document.getElementById('economyPassenger').innerHTML=economyClassPassenger;
    
    const subCost =document.getElementById('subtotal').innerHTML;
    document.getElementById('subCost').innerHTML= subCost;
    
    const vatCost =document.getElementById('vat').innerHTML;
    document.getElementById('vatCost').innerHTML =vatCost;
    
    const total = document.getElementById('total').innerHTML;
    document.getElementById('totalCost').innerHTML=total;


 
})

let submit=document.getElementById('submit');
submit.addEventListener("click",function(){

    let bookingContent=document.getElementById("booking");
    bookingContent.style="opacity:1; transition:2s";

    let bookingFrom=document.getElementById("bookingFrom");
    bookingFrom.style="opacity:1; transition:2s";

    let Massage=document.getElementById("Massage");
    Massage.style="opacity:0; transition:2s";;

    alert("Happy journey!! Congratulations! your ticket has been approved!!")

})