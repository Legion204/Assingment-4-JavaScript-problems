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

function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let numArray = [];
    let newArray = [];
    for (num of array) {
      if (typeof num === "number") {
        numArray.push(num);
      }
    }

    for (num of numArray) {
      if (!isNaN(num)) {
        newArray.push(num);
      }
    }
    return newArray;
  } else {
    const error = "Input is not an array";
    return error;
  }
}

function password(obj) {
  const keysINObj = Object.keys(obj);
  const Date = obj.birthYear.toString();
  if (typeof obj === "object" && keysINObj.length === 3 && Date.length === 4) {
    const webName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    const userName = obj.name;
    const birthDate = obj.birthYear;
    const password = `${webName}#${userName}@${birthDate}`;
    return password;
  } else {
    const error = "invalid";
    return error;
  }
}

function monthlySavings(array, livingCost) {
  if (Array.isArray(array) && typeof livingCost === "number") {
    let oldArray = [];
    let newArray = [];
    for (num of array) {
      if (num >= 3000) {
        const tax = (num * 20) / 100;
        const afterTax = num - tax;
        newArray.push(afterTax);
      }
    }

    for (num of array) {
      if (num < 3000) {
        oldArray.push(num);
      }
    }
    const joinArray = oldArray.concat(newArray);
    let sum = 0;
    for (num of joinArray) {
      sum = sum + num;
    }
    const totalSavings = sum - livingCost;
    if (totalSavings >= 0) {
      return totalSavings;
    } else {
      const x = "earn more";
      return x;
    }
  } else {
    const error = "invalid input";
    return error;
  }
}
