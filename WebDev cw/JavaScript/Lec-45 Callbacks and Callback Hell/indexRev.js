function searchFood(item, cb1){
    console.log("Searching List of", item, ".....");
    setTimeout(function timer1(){
        let data = "List of " + item;
        cb1(item, data);
    }, 3000)
}

function orderFood(item, cb2){
    console.log("Select", item);
    setTimeout(function timer2(){
        let id = Math.floor(Math.random() * 999999);
        cb2(id);
    }, 4000)
}

function payment(item, id, cb3){
    console.log('Payment Initiating for',item,"with id no -",id);
    setTimeout(function timer3() {
        let status = true;
        cb3(status);
    }, 5000)
}

let res = searchFood("Burger", function fun1(item,data){
    console.log(data);
    orderFood(item, function fun2(orderId){
        console.log("Order created successfully with id no - ",orderId);
        payment(item, orderId, function fun3(status){
            if(status === true) console.log("Payment Completed!");
            else console.log("Payment Declined!");
        })
    })
});