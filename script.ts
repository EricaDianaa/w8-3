//ESEMPIO
//TASSE=67% 1000=670(DETTO INPONIBILE) TASSE INPONIBILE=25%=670/4
//=
//REDDITO LORDO= 1000(euro mensile) - 167,5= 832,5(REDDITO NETTO)
//670/4 = 167.5(TASSA)

//CREAZIONE CLASSE PRINCIPALE
abstract class Tasse {
  abstract imponibile: number;
  abstract tassa: number;
  constructor(
    public codredd: number,
    public redditoannuolordo: number,
    public tasseinps: number,
    public tasseirpef: number
  ) {}
  getUtileTasse(lordo: number, tassa: number) {
    //imponibile
    return (
      "Imponibile" +
      " " +
      (this.imponibile = lordo - tassa - (this.tasseinps + this.tasseirpef))
    );
  }
  getTasseInps(inps: number) {
    if (this.codredd >= 100000) {
      return "TassaInps" + " " + (this.tasseinps = inps);
    } else {
      return "TassaInps" + " " + (this.tasseinps = this.tasseinps);
    }
  }
  getTasseIrpef(irpef: number) {
    if (this.codredd >= 100000) {
      return "Tassairpef" + " " + (this.tasseirpef = irpef);
    } else {
      return "Tassairpef" + " " + (this.tasseirpef = this.tasseirpef);
    }
  }
  getRedditoAnnuoNetto() {
    return (
      "Redditoannuonetto" + " " + (this.redditoannuolordo - this.imponibile)
    );
  }
}

class programattore extends Tasse {
  imponibile: number = 0;
  tassa: number = 0;
  constructor() {
    super(1, 1000, 10, 20);
  }
}
let developer = new programattore();
console.log(developer);
console.log(developer.getTasseInps(10));
console.log(developer.getTasseIrpef(15));
console.log(developer.getUtileTasse(10000, 67));
console.log(developer.getRedditoAnnuoNetto());
