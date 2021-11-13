function Developer(name, tech){
  this.name = name;
  this.tech = tech;
  this.intro = ()=>{
    console.log(`Hi my name ${name} I love ${tech}`)
  }
}


const will = new Developer("will", "JS")
const leah = new Developer("Leah", "HTML")

leah.intro()
will.intro()

Developer.prototype.moves = function(){
  console.log(`${this.name} Moves like Jagger`)
}

will.moves()
leah.moves()