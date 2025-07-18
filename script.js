let Upskill_profile = {
  fullName: { lastName: "Anusi", firstName: "Unoaku" },
  age: "27",
  best_hobbies: ["Reading", "Singing", "Surfing the Web"],
  greet: function () {
    //An arrow function is used to inherit lexical `this`
    const name = () => `${this.fullName.firstName} ${this.fullName.lastName}`;

    console.log(
      `Hi, my name is ${name()} and my 3 best hobbies are ${Upskill_profile.best_hobbies.join(", ")}.`
    );
  }
};

Upskill_profile.greet();              //Hi, my name is Unoaku Anusi and my 3 best hobbies are Reading, Singing, Surfing the Web.

console.log(
Upskill_profile.best_hobbies[1]      //Singing
);

//Callback function
let Web_dev = {topic:["HTML", "CSS", "JAVASCRIPT"]};
const learn = (topic_choice,Learning_done) => {
  setTimeout(() => {
  console.log (`Learning ${Web_dev.topic[topic_choice]
    } was chosen. Start classes immediately!`
  )
  Learning_done();
},
 3000);
}

//callback
const Learning_done = () => {
  setTimeout(() => {
    console.log("Finished the Lesson!")
},
 5000);
}

learn(2,Learning_done);