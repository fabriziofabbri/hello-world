function Rabbit(type)
{
  this.type = type;
  this.speak = function speak(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
  }
}

  var whiteRabbit = new Rabbit("white");
  var fatRabbit = new Rabbit("fat");
  
  whiteRabbit.speak("Oh my ears and whiskers, " +
                    "how late it's getting!");
  // → The white rabbit says 'Oh my ears and whiskers, how
  //   late it's getting!'
  fatRabbit.speak("I could sure use a carrot right now.");

Rabbit.prototype.talk =  function(line) { console.log("The " + this.type + " rabbit speak '" +
  line + "'");  };

  whiteRabbit.talk("Eureka");