const age = 25;
let numberOfTickets = 3;
let totalPrice = 0;

if (age <= 0) {
    console.log("Invalid Age");
} else if (numberOfTickets <= 0) {
    console.log("Invalid Number of Tickets");
} else if (age < 12) {
    totalPrice = numberOfTickets * 100;
} else if (age < 60) {
    totalPrice = numberOfTickets * 200;
} else {
    totalPrice = numberOfTickets * 120;
}

if (age > 0 && numberOfTickets > 0) {
    console.log(`Age: ${age}`);
    console.log(`Tickets: ${numberOfTickets}`);
    console.log("");
    console.log("--- Movie Ticket Details ---");
    console.log(`Total: ₹${totalPrice}`);
}