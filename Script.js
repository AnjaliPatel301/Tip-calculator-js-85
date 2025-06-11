const buttn=document.querySelector('button');
var total=document.querySelector('.total');
const bill_amount=document.querySelector('#bill-amot-input')
const tip_amount=document.querySelector('#tip-amot-input')

console.log(buttn,bill_amount,total,tip_amount);


buttn.addEventListener('click',()=>{
    if(bill_amount.value==0 && tip_amount.value==0){
        alert("Please enter your amount🤦‍♂️")
    }

    else if(bill_amount.value<0 && tip_amount.value<0){
        alert("Please enter a possive amount😒")
    }

    else{

    const totalBill=parseFloat(bill_amount.value)

    const totalTip=parseFloat(tip_amount.value)

    const result=totalBill*(totalTip/100);

    const total_result=result+totalBill;

    console.log(total_result)

    total.innerHTML=total_result

    }
    

})
