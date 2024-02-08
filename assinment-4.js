//problem-1

function calculateMoney(ticketSell) {
  const totalTicketPrice = ticketSell * 120;
  const guardSalary = 500;
  const staffLunch = 8 * 50;
  const totalEarn = totalTicketPrice - (guardSalary + staffLunch);
  if (ticketSell < 0) {
    const error = "invalid Number";
    return error;
  } else {
    return totalEarn;
  }
}

//problem-2

function checkName(name) {
  if (typeof name !== "string") {
    const error = "invalid";
    return error;
  } else {
    for (letter of name) {
      if (
        name[name.length - 1] === "a" ||
        name[name.length - 1] === "y" ||
        name[name.length - 1] === "i" ||
        name[name.length - 1] === "e" ||
        name[name.length - 1] === "o" ||
        name[name.length - 1] === "u" ||
        name[name.length - 1] === "w" ||
        name[name.length - 1] === "A" ||
        name[name.length - 1] === "Y" ||
        name[name.length - 1] === "I" ||
        name[name.length - 1] === "E" ||
        name[name.length - 1] === "O" ||
        name[name.length - 1] === "U" ||
        name[name.length - 1] === "W"
      ) {
        const good = "Good Name";
        return good;
      } else {
        const bad = "Bad Name";
        return bad;
      }
    }
  }
}

//problem-3

function deleteInvalids(){

}

const result = deleteInvalids('badamo');
console.log(result);