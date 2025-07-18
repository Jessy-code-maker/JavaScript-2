let Upskill_profile = {
    fullName: { lastName: "Anusi", firstName: "Unoaku" },
    age: "27",
    best_hobbies: ["Reading", "Singing", "Surfing the Web"],


  greet: function () {
    //An arrow function is used to access the `this` context of the parent object
    const name = () => `${this.fullName.firstName} ${this.fullName.lastName}`;
     console.log(
       `Hi, my name is ${name()} and my 3 best hobbies are ${Upskill_profile.best_hobbies.join(", ")}.`
    );
  }
};

Upskill_profile.greet();              //Hi, my name is Unoaku Anusi and my 3 best hobbies are Reading, Singing, Surfing the Web.

console.log(
  `My second best hobby is ${Upskill_profile.best_hobbies[1]}.`);     //My second best hobby is Singing.



//Callback function example with a learning scenario
let Web_dev = {topic:["HTML", "CSS", "JAVASCRIPT"]};

const learn = (topic_choice,Learning_done) => {
  setTimeout(() => {
   console.log (`Learning ${Web_dev.topic[topic_choice]} was chosen. Start classes immediately!`);
  Learning_done();
}, 2000);           // 2 seconds
};

//callback function to be executed after the learning is done
const Learning_done = () => {
  setTimeout(() => {
    console.log("Finished the Lesson!");
}, 3000);          // 3 seconds
};

learn(2,Learning_done);

//Output after 2 seconds: Learning JAVASCRIPT was chosen. Start classes immediately!
//Output after 3 seconds: Finished the Lesson!