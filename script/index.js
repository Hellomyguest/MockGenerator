function Randomizer(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function generateUUID() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function randomDate(
  start = new Date("2021, 01, 01"),
  end = new Date(),
  startHour = 08,
  endHour = 18
) {
  let date = new Date(+start + Math.random() * (end - start));
  return date.toISOString();
}

function getOrderNumber() {
  let order = "";
  for (let i = 0; i < 6; i++) {
    order += Randomizer(0, 9);
  }
  return order;
}

function getOrder(length) {
  let arr = [];
  let arrCheck = [];
  for (let i = 0; i < length; i++) {
    let rand = Randomizer(0, 166);
    while (arrCheck.includes(rand)) {
      rand = Randomizer(0, 166);
    }
    arrCheck.push(rand);
    arr.push(ITEMS[rand]);
  }
  return arr;
}

function getLoyality(sum) {
  if (sum > 250000) return "legend";
  if (sum > 100000) return "professional";
  if (sum > 50000) return "amateur";
  return "newbie";
}

function genOrders(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    let amount = Randomizer(1, 5);
    let order = getOrder(amount);
    let sum = order.reduce((sum, item) => (sum += item.price), 0);
    let id = generateUUID();
    while (arr.some((item) => item.id === id)) {
      console.log("совпадение");
      id = generateUUID();
    }

    arr.push({
      id: id,
      customer: `${SURNAMES[Randomizer(0, 196)]} ${NAMES[Randomizer(0, 196)]} ${
        PATRONYMICS[Randomizer(0, 199)]
      }`,
      date: randomDate(),
      status: STATUS[Randomizer(0, 5)],
      amount: amount,
      orderNumber: getOrderNumber(),
      order: order,
      sum: sum,
      loyality: getLoyality(sum),
    });
  }
  return arr;
}

let input = document.getElementById("length");
let textarea = document.getElementById("mocks");

submit.onclick = function () {
  let length = input.value;
  textarea.innerHTML = JSON.stringify(
    length ? genOrders(length) : "Введите кол-во записей"
  );
  clear.style.display = "flex";
};

clear.onclick = function () {
  textarea.innerHTML = "";
  clear.style.display = "none";
};
