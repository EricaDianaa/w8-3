//ESEMPIO
//TASSE=67% 1000=670(DETTO INPONIBILE) TASSE INPONIBILE=25%=670/4
//=
//REDDITO LORDO= 1000(euro mensile) - 167,5= 832,5(REDDITO NETTO)
//670/4 = 167.5(TASSA)

//CREAZIONE CLASSE PRINCIPALE
abstract class Tasse {
  imponibile!: number;
  tassa!: number;
  constructor(
    public codredd: number,
    public redditoannuolordo: number,
    public tasseinps: number,
    public tasseirpef: number
  ) {}
  getUtileTasse(tassa: number) {
    //imponibile
    return (
      "Utiletasse" +
      " " +
      (this.imponibile =
        this.redditoannuolordo - tassa - (this.tasseinps + this.tasseirpef))
    );
  }
  getTasseInps() {
    return "TassaInps" + " " + (this.tasseinps = this.tasseinps);
  }
  getTasseIrpef() {
    return "Tassairpef" + " " + (this.tasseirpef = this.tasseirpef);
  }
  getRedditoAnnuoNetto() {
    return "RedditoNetto" + " " + (this.redditoannuolordo - this.imponibile);
  }
}

class programattore extends Tasse {
  constructor() {
    super(1, 100000, 1000, 56);
  }
}

let developer = new programattore();
console.log(developer);
console.log(developer.getTasseInps());
console.log(developer.getTasseIrpef());
console.log(developer.getUtileTasse(10000));
console.log(developer.getRedditoAnnuoNetto());

class Barista extends Tasse {
  constructor() {
    super(1, 10000, 100, 50);
  }
}

let bar = new Barista();
console.log(bar);
console.log(bar.getTasseInps());
console.log(bar.getTasseIrpef());
console.log(bar.getUtileTasse(10000));
console.log(bar.getRedditoAnnuoNetto());

class Commerciale extends Tasse {
  constructor() {
    super(10, 20000, 1001, 30);
  }
}

let commercialista = new Commerciale();
console.log(commercialista);
console.log(commercialista.getTasseInps());
console.log(commercialista.getTasseIrpef());
console.log(commercialista.getUtileTasse(10000));
console.log(commercialista.getRedditoAnnuoNetto());
