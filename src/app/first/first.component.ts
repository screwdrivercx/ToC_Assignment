import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent implements OnInit {
  constructor() {}

  title = "Theory of Computation Assignment";
  img = "assets/resources/images/blank.PNG";
  initState = { "6": "state1", "7": "state2", "8": "state3" };
  state1 = { "0": "initState", next: "state5" };
  state2 = { "0": "initState", next: "state4" };
  state3 = { "0": "initState", next: "state2" };
  state4 = { "0": "state2", next: "state5" };
  currentState = "initState";
  inputString = "";
  autoPlayText = "Auto Play";
  isDisableInput = false;
  isDisableButton = true;
  isPlaying = false;
  curr = 0;
  insertingCoin = false;
  insertedCoin = 0;

  ngOnInit() {}

  readInputString() {
    this.isDisableButton = false;
    this.isDisableInput = true;
    this.img = "assets/resources/images/initState.PNG";
    return this.inputString;
  }

  readNextInput() {
    const currInput = this.inputString[this.curr];
    if (!this.insertingCoin) {
      if (!isNaN(+currInput)) {
        if (this.currentState == "state5") {
          if (+currInput == 1 || +currInput == 2 || +currInput == 5) {
            this.insertingCoin = true;
            this.insertCoin(+currInput);
          }
        } else {
          if (eval("this." + this.currentState)[currInput] != null) {
            this.currentState = eval("this." + this.currentState)[currInput];
            console.dir(this.currentState);
            this.updateDFA();
          }
        }
      } else if (currInput >= "a" && currInput <= "z") {
        if (
          // tslint:disable-next-line: triple-equals
          this.currentState == "state1" ||
          // tslint:disable-next-line: triple-equals
          this.currentState == "state2" ||
          // tslint:disable-next-line: triple-equals
          this.currentState == "state3" ||
          // tslint:disable-next-line: triple-equals
          this.currentState == "state4"
        ) {
          this.currentState = eval("this." + this.currentState)["next"];
          this.updateDFA();
          console.log(this.currentState);
        } else {
          console.log("Error2");
        }
      } else {
        console.log("Error1");
      }
    } else {
      if (this.currentState == "trap") {
        console.log("trap");
      } else if (this.insertedCoin < 10) {
        const coin = +currInput;
        // tslint:disable-next-line: triple-equals
        if (coin == 1 || coin == 2 || coin == 5) {
          this.insertCoin(coin);
        }
        // tslint:disable-next-line: triple-equals
      } else if (this.insertedCoin == 10) {
        if (((+currInput>=0&&+currInput<=9)&&+currInput!=3&&+currInput!=4) || currInput >= "a" && currInput <= "z" ){
          this.currentState = "trap";
          this.img = "assets/resources/images/trap.PNG";
        }
      } else if (this.insertedCoin > 10) {
        if (+currInput==9) {
          console.log("ทอน"+(this.insertedCoin-10)+"บาท");
          this.img = "assets/resources/images/10.PNG";
          this.insertedCoin = 10;
        }
      }
    }
    this.curr++;
  }

  insertCoin(coin: number) {
    this.insertedCoin += coin;
    this.img =
      "assets/resources/images/" + this.insertedCoin.toString() + ".PNG";
  }

  updateDFA() {
    this.img = "assets/resources/images/" + this.currentState + ".PNG";
    console.log(this.img);
  }

  reset() {
    this.currentState = "initState";
    this.img = "assets/resources/images/blank.PNG";
    this.inputString = "";
    this.autoPlayText = "Auto Play";
    this.isDisableInput = false;
    this.isDisableButton = true;
    this.isPlaying = false;
    this.curr = 0;
    this.insertingCoin = false;
    this.insertedCoin = 0;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onClickAutoPlay() {
    this.isPlaying
      ? (this.autoPlayText = "Auto Play")
      : (this.autoPlayText = "Pause");
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.autoPlay();
      this.isDisableButton = true;
    } else {
      this.isDisableButton = false;
    }
  }

  async autoPlay() {
    if (this.isPlaying) {
      this.readNextInput();
      await this.delay(1000);
      if (this.curr < this.inputString.length) {
        this.autoPlay();
      }
    }
  }
}
