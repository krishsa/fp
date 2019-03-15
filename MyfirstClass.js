const makeSaluteClass = term =>
          class {
              constructor(x) {
                 this.x = x;
              }
              salute(y) {
                 console.log(`${this.x} says "${term}" to ${y}`);
               }
          };
const spanish = makeSaluteClass("Hola")
new spanish("Kayle").salute("Carol")

const english  = makeSaluteClass("Hello")
new english("George").salute("Kripa")

const fullSalute = (c,x,y) => new c(x).salute(y)
const french = makeSaluteClass("Bon jour")
fullSalute(french,"Billsion", "Zita")