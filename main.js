function randomInteger(min, max) {
  // получить случайное число от минимума до максимума
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
function N(sigma) {
  let m = randomInteger(0, 50);
  let newSigma = randomInteger(0, sigma);
  return m + newSigma;
}
function Nresponsibility() {
  return randomInteger(0.1, 2);
}
function Uresponsibility() {
  let i = 5;
  return randomInteger(0, i) + i;
}
function Nhealth(first, second) {
    return randomInteger(1,first) + randomInteger(-1,second)
}
function Eresponsibility() {
  return randomInteger(0.1, 0.5);
}
function U(sigma) {
  let m = randomInteger(0, 50);
  let newSigma = randomInteger(0, sigma);
  return m + newSigma;
}

let countries = {
  Belarus: "",
  Canada: "",
  France: "",
  Germany: "",
  USA: "",
};

let statuses = ["healthy", "sick!Knows", "sickKnows", "inTreatment"];
let agents = [];
let startNumberOfInfected = 6;
//  +prompt('Введите начальное число инфицированных в интервале от 5 до 10:')
if (startNumberOfInfected >= 5 && startNumberOfInfected <= 10) {
  for (let c = 0; c <= 4; c++) {
    function add(object, array) {
      array.push(object);
    }

    for (let i = 0; i < 1000; i++) {
      let agent = {
        number: i,
        socialContacts: Math.floor(Math.random() * 50),
        responsibility: "",
        health: "",
        status: "",
        ifInfected: false,
      };
      add(agent, agents);
    }
    let infectedPeople = [];
    for (let j = 0; j < startNumberOfInfected; j++) {
      let infected = Math.ceil(Math.random() * 1000);
      infectedPeople.push(infected);
    }

    infectedPeople.forEach((infectedHuman) => {
      for (let k = 0; k < 1000; k++) {
        if (agents[k].number === infectedHuman) {
          agents[k].ifInfected = true;
        }
      }
    });

    infectedPeople = [];

    for (let k = 0; k < 1000; k++) {
      if (agents[k].ifInfected) {
        add(agents[k], infectedPeople);
      }
    }

    agents.forEach((agent) => {
      if (agent.ifInfected == false) {
        agent.status = statuses[randomInteger(0, 1)];
      } else {
        agent.status = statuses[randomInteger(1, 3)];
      }
    });

    agents.forEach((agent) => {
      if (agent.status == "healthy") {
        let sigma = 5;
        agent.socialContacts = N(sigma);
        agent.responsibility = Uresponsibility();
        agent.health = Nhealth(10,1.5);
      } else if (agent.status == "sick!Knows") {
        let sigma = 10;
        agent.socialContacts = N(sigma);
        agent.responsibility = Uresponsibility();
        agent.health = Nhealth(8,1.5);
      } else if (agent.status == "sickKnows") {
        let sigma = 3;
        agent.socialContacts = U(sigma);
        agent.responsibility = Eresponsibility();
        agent.health = Nhealth(6,0.5);
      } else if (agent.status == "inTreatment") {
        let sigma = 6;
        agent.socialContacts = N(sigma);
        agent.responsibility = 10 - Eresponsibility();
        agent.health = Nhealth(4,1.5);
      }
    });

    if (c == 0) {
      countries.Belarus = agents;
    } else if (c == 1) {
      countries.Canada = agents;
    } else if (c == 2) {
      countries.France = agents;
    } else if (c == 3) {
      countries.Germany = agents;
    } else if (c == 4) {
      countries.USA = agents;
    }
  }
  countries.Belarus = countries.Belarus.slice(0, 1000);
  countries.Canada = countries.Canada.slice(1000, 2000);
  countries.France = countries.France.slice(2000, 3000);
  countries.Germany = countries.Germany.slice(3000, 4000);
  countries.USA = countries.USA.slice(4000, 5000);
  console.log(countries);
} else {
  alert("Недопустимое начальное значение инфицированных!");
}
