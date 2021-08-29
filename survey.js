const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello! What\'s your name? (Nicknames are okay too) ', (name) => {
  console.log(`Hello ${name}!`);

  rl.question(`What do you like to do for fun ${name}? `, (activity) => {
    console.log(`${activity} is a great choice. `);

    rl.question(`What do you like to listen to while ${activity}? `, (music) => {
      console.log(`I've never heard of ${music}.`);
      
      rl.question(`What meal is your favourite? (dinner, brunch, etc.) `, (meal) => {
        console.log(`Your answer is ${meal}`);
        
        rl.question(`What's your favorite thing to eat for ${meal}? `, (thing) => {
          console.log(`I would love to try ${thing}.`);
          
          rl.question(`Which sport is your favorite? `, (sport)=> {
            console.log(`${sport} is great to watch.`);

            rl.question(`What is your superpower? What are you amazing at? `, (superpower) => {
              console.log(`Your superpower is ${superpower}`);
              
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${thing} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          
          });
          
        });
        
      });
      
    });
    
  });

});