function add(obj, array) {
  array.push(obj);
}
function randomInteger(min, max) {
  // получить случайное число от минимума до максимума
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
let days = 0;
const maxDays = 50;
class Countries {
  constructor(props) {
    this.Canada = props.Canada;
    this.France = props.France;
    this.Germany = props.Germany;
    this.USA = props.USA;
  }

  toSocContacts() {
    this.Canada.forEach((human) => {
      let sigma = randomInteger(0, 50);
      if (human.status == "healthy") {
        human.socialContacts = sigma + randomInteger(0, 5);
        if (human.socialContacts < 0) {
          human.socialContacts = 0;
        }
      } else if (human.status == "sick!Knows") {
        human.socialContacts = sigma + randomInteger(0, 10);
        if (human.socialContacts < 0) {
          human.socialContacts = 0;
        }
      } else if (human.status == "sickKnows") {
        human.socialContacts = sigma - randomInteger(0, 3) * 3;
        if (human.socialContacts < 0) {
          human.socialContacts = 0;
        }
      } else if (human.status == "inTreatment") {
        human.socialContacts = sigma - randomInteger(0, 6) * 3;
        if (human.socialContacts < 0) {
          human.socialContacts = 0;
        }
      }
    });
  }
  ifKnowsThatInfected() {
    this.Canada.forEach((human) => {
      if (human.status == "healthy") {
        human.responsibility = human.responsibility - randomInteger(0, 2) - 0.1;
        if (human.responsibility < 0) {
          human.responsibility = 0;
        }
      } else if (human.status == "sick!Knows") {
        human.responsibility = human.responsibility - randomInteger(0, 5) - 5;
        if (human.responsibility < 0) {
          human.responsibility = 0;
        }
      } else if (human.status == "sickKnows") {
        human.responsibility =
          human.responsibility - Math.exp(randomInteger(0, 5));
        if (human.responsibility < 0) {
          human.responsibility = 0;
        }
      } else if (human.status == "inTreatment") {
        human.responsibility =
          human.responsibility - Math.exp(randomInteger(0, 5));
        if (human.responsibility < 0) {
          human.responsibility = 0;
        }
      }
    });
  }
  checkHealth() {
    this.Canada.forEach((human) => {
      if (human.status == "healthy") {
        human.health = human.health + randomInteger(0, 10) + 1.5;
        if (human.health < 0) {
          human.health = 0;
          human.status = "dead";
        }
      } else if (human.status == "sick!Knows") {
        human.health = human.health - randomInteger(0, 8) + 1.5;
        if (human.health < 0) {
          human.health = 0;
          human.status = "dead";
        }
      } else if (human.status == "sickKnows") {
        human.health = human.health - randomInteger(0, 6) + 0.5;
        if (human.health < 0) {
          human.health = 0;
          human.status = "dead";
        }
      } else if (human.status == "inTreatment") {
        (human.health = human.health - randomInteger(0, 4) + 1), 5;
        if (human.health < 0) {
          human.health = 0;
          human.status = "dead";
        }
      }
    });
  }
  ifIsHealed() {
    this.Canada.forEach((human) => {
      if (human.status == statuses[3]) {
        human.ifHealing = true;
      }
    });
  }
  toDetermineAge() {
    this.Canada.forEach((human) => {
      if (human.status == "healthy") {
        human.age = randomInteger(0, 30) + Math.floor(randomInteger(0, 2.5));
      } else if (human.status == "sick!Knows") {
        human.age = randomInteger(0, 40) + Math.floor(randomInteger(0, 5.5));
      } else if (human.status == "sickKnows") {
        human.age = randomInteger(0, 50) + Math.floor(randomInteger(0, 9.5));
      } else if (human.status == "inTreatment") {
        human.age = randomInteger(0, 25) + Math.floor(randomInteger(0, 5.5));
      }
    });
  }
  efficiencyOfHealing() {
    this.Canada.forEach((human) => {
      if (human.status == "inTreatment") {
        human.efficiencyOfHealing =
          randomInteger(0, 15) + Math.floor(randomInteger(0, 1.5));
        if (human.efficiencyOfHealing > 100) {
          human.efficiencyOfHealing = 100;
        }
      } else if (human.status == "healthy") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sick!Knows") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sickKnows") {
        human.efficiencyOfHealing = 0;
      }
    });
    this.France.forEach((human) => {
      if (human.status == "inTreatment") {
        human.efficiencyOfHealing =
          randomInteger(0, 9) + Math.floor(randomInteger(0, 1.5));
        if (human.efficiencyOfHealing > 100) {
          human.efficiencyOfHealing = 100;
        }
      } else if (human.status == "healthy") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sick!Knows") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sickKnows") {
        human.efficiencyOfHealing = 0;
      }
    });
    this.Germany.forEach((human) => {
      if (human.status == "inTreatment") {
        human.efficiencyOfHealing =
          randomInteger(0, 12) + Math.floor(randomInteger(0, 1.5));
        if (human.efficiencyOfHealing > 100) {
          human.efficiencyOfHealing = 100;
        }
      } else if (human.status == "healthy") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sick!Knows") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sickKnows") {
        human.efficiencyOfHealing = 0;
      }
    });
    this.USA.forEach((human) => {
      if (human.status == "inTreatment") {
        human.efficiencyOfHealing =
          randomInteger(0, 16) + Math.floor(randomInteger(0, 1.5));
        if (human.efficiencyOfHealing > 100) {
          human.efficiencyOfHealing = 100;
        }
      } else if (human.status == "healthy") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sick!Knows") {
        human.efficiencyOfHealing = 0;
      } else if (human.status == "sickKnows") {
        human.efficiencyOfHealing = 0;
      }
    });
  }
  ifMakesTest() {
    this.Canada.forEach((human) => {
      if (human.status == "inTreatment") {
        human.makesTest = 100 + "%";
      } else {
        human.makesTest = randomInteger(0, 5) + randomInteger(0, 2.5) + "%";
      }
      this.France.forEach((human) => {
        if (human.status == "inTreatment") {
          human.makesTest = 100 + "%";
        } else {
          human.makesTest = randomInteger(0, 3) + randomInteger(0, 1.5) + "%";
        }
      });
      this.Germany.forEach((human) => {
        if (human.status == "inTreatment") {
          human.makesTest = 100 + "%";
        } else {
          human.makesTest = randomInteger(0, 5) + randomInteger(0, 5) + "%";
        }
      });
      this.USA.forEach((human) => {
        if (human.status == "inTreatment") {
          human.makesTest = 100 + "%";
        } else {
          human.makesTest = randomInteger(0, 3) + randomInteger(0, 5) + "%";
        }
      });
    });
  }
  contagiousness() {
    this.Canada.forEach((human) => {
      if (human.status == "inTreatment") {
        human.contagion = Math.ceil(Math.exp(randomInteger(0, 2.5))) + "%";
        if (human.contagion < 0) {
          human.contagion = 0;
        }
      } else if (human.status == "sick!Knows") {
        human.contagion = randomInteger(0, 30) + randomInteger(0, 30);
      } else if (human.status == "sickKnows") {
        human.contagion = randomInteger(0, 20) + randomInteger(0, 2.5);
      } else {
        human.contagion = 0;
      }
    });
  }
  toRecover() {
    this.Canada.forEach((human) => {
      if (human.status == "healthy") {
        human.recoveryTime =
          1 +
          randomInteger(
            20 - 1.5 * human.health - 0.5 * human.efficiencyOfHealing,
            5 - 0.25 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sick!Knows") {
        human.recoveryTime =
          2 +
          randomInteger(
            30 - 2.2 * human.health - 0.8 * human.efficiencyOfHealing,
            4 - 0.15 * human.health - 0.12 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sickKnows") {
        human.recoveryTime =
          3 +
          randomInteger(
            10 - 0.4 * human.health - 0.3 * human.efficiencyOfHealing,
            4 - 0.2 * human.health - 0.15 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "inTreatment") {
        human.recoveryTime =
          4 +
          randomInteger(
            25 - 2 * human.health - 0.2 * human.efficiencyOfHealing,
            2 - 0.1 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      }
    });
    this.France.forEach((human) => {
      if (human.status == "healthy") {
        human.recoveryTime =
          1 +
          randomInteger(
            20 - 1.5 * human.health - 0.5 * human.efficiencyOfHealing,
            5 - 0.25 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sick!Knows") {
        human.recoveryTime =
          2 +
          randomInteger(
            30 - 2.2 * human.health - 0.8 * human.efficiencyOfHealing,
            4 - 0.15 * human.health - 0.12 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sickKnows") {
        human.recoveryTime =
          3 +
          randomInteger(
            10 - 0.4 * human.health - 0.3 * human.efficiencyOfHealing,
            4 - 0.2 * human.health - 0.15 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "inTreatment") {
        human.recoveryTime =
          4 +
          randomInteger(
            25 - 2 * human.health - 0.2 * human.efficiencyOfHealing,
            2 - 0.1 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      }
    });
    this.Germany.forEach((human) => {
      if (human.status == "healthy") {
        human.recoveryTime =
          1 +
          randomInteger(
            20 - 1.5 * human.health - 0.5 * human.efficiencyOfHealing,
            5 - 0.25 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sick!Knows") {
        human.recoveryTime =
          2 +
          randomInteger(
            30 - 2.2 * human.health - 0.8 * human.efficiencyOfHealing,
            4 - 0.15 * human.health - 0.12 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sickKnows") {
        human.recoveryTime =
          3 +
          randomInteger(
            10 - 0.4 * human.health - 0.3 * human.efficiencyOfHealing,
            4 - 0.2 * human.health - 0.15 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "inTreatment") {
        human.recoveryTime =
          4 +
          randomInteger(
            25 - 2 * human.health - 0.2 * human.efficiencyOfHealing,
            2 - 0.1 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      }
    });
    this.USA.forEach((human) => {
      if (human.status == "healthy") {
        human.recoveryTime =
          1 +
          randomInteger(
            20 - 1.5 * human.health - 0.5 * human.efficiencyOfHealing,
            5 - 0.25 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sick!Knows") {
        human.recoveryTime =
          2 +
          randomInteger(
            30 - 2.2 * human.health - 0.8 * human.efficiencyOfHealing,
            4 - 0.15 * human.health - 0.12 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "sickKnows") {
        human.recoveryTime =
          3 +
          randomInteger(
            10 - 0.4 * human.health - 0.3 * human.efficiencyOfHealing,
            4 - 0.2 * human.health - 0.15 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      } else if (human.status == "inTreatment") {
        human.recoveryTime =
          4 +
          randomInteger(
            25 - 2 * human.health - 0.2 * human.efficiencyOfHealing,
            2 - 0.1 * human.health - 0.1 * human.efficiencyOfHealing
          );
        if (human.recoveryTime < 0) {
          human.recoveryTime = human.efficiencyOfHealing * 1.5 + " days";
        }
      }
    });
    this.Canada.forEach((human) => {
      if (Number.parseInt(human.recoveryTime) < 0) {
        human.recoveryTime = Number.parseInt(human.recoveryTime) * 2;
      }
    });
  }
  ifDead() {
    this.Canada.forEach((human) => {
      if (human.status == "healthy") {
        human.mortality =
          human.age * 0.05 +
          (15 -
            1.5 * human.health -
            0.5 * human.efficiencyOfHealing +
            (3 - 0.25 * human.health - 0.1 * human.efficiencyOfHealing));
        if (human.mortality < 0) {
          human.mortality = -human.mortality / 5;
        }
      } else if (human.status == "sick!Knows") {
        human.mortality =
          human.age * 0.07 +
          (15 -
            1 * human.health -
            0.8 * human.efficiencyOfHealing +
            (2 - 0.15 * human.health - 0.12 * human.efficiencyOfHealing));
        if (human.mortality < 0) {
          human.mortality = -human.mortality / 5;
        }
      } else if (human.status == "sickKnows") {
        human.mortality =
          human.age * 0.09 +
          (5 -
            0.35 * human.health -
            0.3 * human.efficiencyOfHealing +
            (2 - 0.3 * human.health - 0.15 * human.efficiencyOfHealing));
        if (human.mortality < 0) {
          human.mortality = -human.mortality / 5;
        }
      } else if (human.status == "inTreatment") {
        human.mortality =
          human.age * 0.11 +
          (5 -
            0.05 * human.health -
            0.2 * human.efficiencyOfHealing +
            (2 - 0.1 * human.health));
        if (human.mortality < 0) {
          human.mortality = -human.mortality / 5;
        }
      }
    });
  }
  infectedCount() {
    let countCan = 0;
    let countGer = 0;
    let countFra = 0;
    let countUS = 0;
    let count = 0;
    this.Canada.forEach((human) => {
      if (
        human.status == "sickKnows" ||
        human.status == "sick!Knows" ||
        human.status == "inTreatment"
      ) {
        countCan++;
      }
    });
    this.Germany.forEach((human) => {
      if (
        human.status == "sickKnows" ||
        human.status == "sick!Knows" ||
        human.status == "inTreatment"
      ) {
        countGer++;
      }
    });
    this.France.forEach((human) => {
      if (
        human.status == "sickKnows" ||
        human.status == "sick!Knows" ||
        human.status == "inTreatment"
      ) {
        countFra++;
      }
    });
    this.USA.forEach((human) => {
      if (
        human.status == "sickKnows" ||
        human.status == "sick!Knows" ||
        human.status == "inTreatment"
      ) {
        countUS++;
      }
    });
    let countOfInfected = {};
    return (countOfInfected = {
      Canada: countCan,
      Germany: countGer,
      France: countFra,
      USA: countUS,
    });
  }
  startLiving() {
    this.Canada.forEach((human) => {
      if (
        human.status == "sickKnows" ||
        human.status == "sickKnows" ||
        human.status == "inTreatment"
      ) {
        let friends = [];
        let friend;
        if (human.socialContacts < 10) {
          friends = [];
          friend = randomInteger(0, 1000);
          this.Canada.forEach((citizen) => {
            if (citizen.number == friend) {
              citizen.status = statuses[randomInteger(1, 3)];
            }
          });
        }

        if (human.socialContacts > 10 && human.socialContacts < 40) {
          friends = [];
          for (let i = 0; i < 3; i++) {
            friend = randomInteger(0, 1000);
            add(friend, friends);
          }
          for (let i = 0; i < randomInteger(0, friends.length); i++) {
            this.Canada.forEach((friend) => {
              if (friend.number == friends[i]) {
                friend.status = statuses[randomInteger(1, 3)];
              }
            });
          }
        }
        if (human.socialContacts > 40 && human.socialContacts < 80) {
          friends = [];
          for (let i = 0; i < 6; i++) {
            friend = randomInteger(0, 1000);
            add(friend, friends);
          }
          for (let i = 0; i < randomInteger(0, friends.length); i++) {
            this.Canada.forEach((friend) => {
              if (friend.number == friends[i]) {
                friend.status = statuses[randomInteger(1, 3)];
              }
            });
          }
        }
        if (human.socialContacts > 80) {
          friends = [];
          for (let i = 0; i < 8; i++) {
            friend = randomInteger(0, 1000);
            add(friend, friends);
          }
          for (let i = 0; i < randomInteger(0, friends.length); i++) {
            this.Canada.forEach((friend) => {
              if (friend.number == friends[i]) {
                friend.status = statuses[randomInteger(1, 3)];
              }
            });
          }
        }
      }
    });
  }
  startHealing() {
    this.Canada.forEach((citizen) => {
      if (citizen.status == "sick!Knows" && days > 2) {
        citizen.status == "sickKnows";
      } else if (citizen.status == "sickKnows" && days > 7) {
        citizen.status == "inTreatment";
      } else if (citizen.status == "inTreatment" && days > 10) {
        citizen.status == "healthy";
      }
    });
    days++;
  }
}
const countries = new Countries({
  Canada: "",
  France: "",
  Germany: "",
  USA: "",
});
const startNumberOfInfected = 7;
let statuses = ["healthy", "sick!Knows", "sickKnows", "inTreatment"];
let citizens = [];
for (let i = 0; i < 1000; i++) {
  let citizen = {
    number: i,
    status: "healthy",
    socialContacts: "",
    responsibility: 50,
    health: randomInteger(0, 100),
    age: "",
    ifHealing: false,
    makesTest: "",
    contagion: "",
    recoveryTime: "",
    efficiencyOfHealing: "",
    mortality: "",
  };
  add(citizen, citizens);
}
let error = randomInteger(0, 20);
countries.Canada = citizens;
countries.France = citizens;
countries.Germany = citizens;
countries.USA = citizens;
for (let i = 0; i < startNumberOfInfected; i++) {
  let random = randomInteger(0, 1000);
  countries.Canada.forEach((human) => {
    if (human.number == random) {
      human.status = statuses[randomInteger(1, 3)];
    }
  });
}
for (let i = 0; i < startNumberOfInfected; i++) {
  let random = randomInteger(0, 1000);
  countries.France.forEach((human) => {
    if (human.number == random) {
      human.status = statuses[randomInteger(1, 3)];
    }
  });
}
for (let i = 0; i < startNumberOfInfected; i++) {
  let random = randomInteger(0, 1000);
  countries.Germany.forEach((human) => {
    if (human.number == random) {
      human.status = statuses[randomInteger(1, 3)];
    }
  });
}
for (let i = 0; i < startNumberOfInfected; i++) {
  let random = randomInteger(0, 1000);
  countries.USA.forEach((human) => {
    if (human.number == random) {
      human.status = statuses[randomInteger(1, 3)];
    }
  });
}
let infectedInCanada = [];
let infectedInFrance = [];
let infectedInGermany = [];
let infectedInUSA = [];
for (days = 0; days < maxDays * 2; days++) {
  countries.toSocContacts();
  countries.ifKnowsThatInfected();
  countries.ifIsHealed();
  countries.checkHealth();
  countries.toDetermineAge();
  countries.efficiencyOfHealing();
  countries.ifMakesTest();
  countries.contagiousness();
  countries.toRecover();
  countries.ifDead();
  countries.startLiving();
  countries.startHealing();

  infectedInFrance.push(countries.infectedCount().France);
}
let infected = [];
for (let i = 1; i < infectedInFrance.length; i++) {
  infected.push(infectedInFrance[i + 1] - infectedInFrance[i]);
}
for (let i = 1; i < infected.length; i++) {
  if (infected[i] > 0) {
    console.log(`Количество заболевших за ${i} день: ${infected[i]}`);
    let expect = infected[i] + error;
    console.log(`Математическое ожидание количества заболевших: ${expect} `);
    console.log(
      `Математическое отклонение за ${i} день: ${expect - infected[i]}`
    );
  }
  if (infected[i] <= 0) {
    console.log(
      `Количество людей, которые вылечились за ${i} день: ${-infected[i]}`
    );
    let expect = infected[i] + error;
    console.log(
      `Математическое ожидание вылечившихся людей за ${i} день: ${-expect}`
    );
    console.log(
      `Математическое отклонение вылечившихся за ${i} день: ${
        expect - -infected[i]
      }`
    );
  }
}
console.log(countries);
