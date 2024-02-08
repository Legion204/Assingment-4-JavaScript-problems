//problem-1

function calculateMoney(ticketSell) {
  const totalTicketPrice = ticketSell * 120;
  const gurdsalary = 500;
  const staffLunch = 8 * 50;
  const totalEarn = totalTicketPrice - (gurdsalary + staffLunch);
  if(ticketSell<0){
    const error="invalid Number"
    return error;
  }
  else{
    return totalEarn;
  }
}


//problem-2

function checkName(){

}

