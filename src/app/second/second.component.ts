import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConditionalExpr } from "@angular/compiler";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"],
})
export class SecondComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  img = "assets/resources/images/initState.PNG";
  initState = { "6": "state1", "7": "state2", "8": "state3" };
  state1 = { "0": "initState", next: "state5" };
  state2 = { "0": "initState", "1": "state4_1","2":"state4_2","3":"state4_3","4":"state4_4","5":"state4_5"};
  state3 = { "0": "initState", next: "state2" };
  state4 = { "0": "state2", next: "state5" };
  state4_1 = { "0":"state2",next:"state5"};
  state4_2 = { "0":"state2",next:"state5"};
  state4_3 = { "0":"state2",next:"state5"};
  state4_4 = { "0":"state2",next:"state5"};
  state4_5 = { "0":"state2",next:"state5"};

  currbtn = [];
  insertedCoin = 0;
  refund = 0;
  clicked=0;
  isRefund = false;
  insertingCoin = false;
  isPlaying = false;
  isGrid = false;
  song = "";
  init = true;
  btnlist1 = [
    { name: "เลือกชื่อเพลง", option: "6" },
    { name: "เลือกชื่อศิลปิน", option: "7" },
    { name: "เลือกชื่อค่าย", option: "8" },
  ];
  btnlist2 = [
    { name: "แสงสวรรค์", option: "next" },
    { name: "เรือเล็กควรออกจากฝั่ง", option: "next" },
    { name: "คิดถึง", option: "next" },
    { name: "วิชาตัวเบา", option: "next" },
    { name: "ไม่แก่ตาย", option: "next" },
    { name: "เธอ", option: "next" },
    { name: "คุกเข่า", option: "next" },
    { name: "คู่ชีวิต", option: "next" },
    { name: "โปรดเถิดรัก", option: "next" },
    { name: "เธอทำให้ฉันเสียใจ", option: "next" },
    { name: "ไม่เคย", option: "next" },
    { name: "คนข้างๆ", option: "next" },
    { name: "เที่ยงคืนสิบห้านาที", option: "next" },
    { name: "ใบไม้", option: "next" },
    { name: "ทำได้เพียง", option: "next" },
    { name: "เปลือก", option: "next" },
    { name: "เคลิ้ม", option: "next" },
    { name: "บางสิ่ง", option: "next" },
    { name: "เหนื่อยบ้างไหม", option: "next" },
    { name: "โลกสมมุติ", option: "next" },
    { name: "เรื่องจริง", option: "next" },
    { name: "GOODBYE", option: "next" },
    { name: "Second Chance", option: "next" },
    { name: "นอยด์", option: "next" },
    { name: "นิรันดร์", option: "next" },
  ];

  btnlist3 = [
    { name: "Bodyslam", option: "1" },
    { name: "Cocktail", option: "2" },
    { name: "25 hours", option: "3" },
    { name: "Slot Machine", option: "4" },
    { name: "Singular", option: "5" },
  ];

  btnlist3_1 = [
    { name: "แสงสวรรค์", option: "next" },
    { name: "เรือเล็กควรออกจากฝั่ง", option: "next" },
    { name: "คิดถึง", option: "next" },
    { name: "วิชาตัวเบา", option: "next" },
    { name: "ไม่แก่ตาย", option: "next" },
  ];

  btnlist3_2 = [
    { name: "ไม่เคย", option: "next" },
    { name: "คนข้างๆ", option: "next" },
    { name: "เที่ยงคืนสิบห้านาที", option: "next" },
    { name: "ใบไม้", option: "next" },
    { name: "ทำได้เพียง", option: "next" },
  ];

  btnlist3_3 = [
    { name: "เธอ", option: "next" },
    { name: "คุกเข่า", option: "next" },
    { name: "คู่ชีวิต", option: "next" },
    { name: "โปรดเถิดรัก", option: "next" },
    { name: "เธอทำให้ฉันเสียใจ", option: "next" },
  ];

  btnlist3_4 = [
    { name: "เปลือก", option: "next" },
    { name: "เคลิ้ม", option: "next" },
    { name: "บางสิ่ง", option: "next" },
    { name: "เหนื่อยบ้างไหม", option: "next" },
    { name: "โลกสมมุติ", option: "next" },
  ];

  btnlist3_5 = [
    { name: "เรื่องจริง", option: "next" },
    { name: "GOODBYE", option: "next" },
    { name: "Second Chance", option: "next" },
    { name: "นอยด์", option: "next" },
    { name: "นิรันดร์", option: "next" },
  ];

  btnlist4 = [
    { name: "Genie records", option: "next" },
    { name: "Believe records", option: "next" },
    { name: "BEC-TERO MUSIC", option: "next" },
  ];

  coinbtnlist = [
    { name: "1 บาท", option: 1 },
    { name: "2 บาท", option: 2 },
    { name: "5 บาท", option: 5 },
  ];
  nextbtn = [{ name: "ต่อไป", option: "next" }];
  allbtn = {
    initState: this.btnlist1,
    state1: this.btnlist2,
    state2: this.btnlist3,
    state3: this.btnlist4,
    state4_1: this.btnlist3_1,
    state4_3: this.btnlist3_2,
    state4_2: this.btnlist3_3,
    state4_4: this.btnlist3_4,
    state4_5: this.btnlist3_5,
    state5: this.coinbtnlist,
  };

  links = {
    'แสงสวรรค์': "https://www.youtube.com/watch?v=Juup4SZs00s",
    'เรือเล็กควรออกจากฝั่ง': "https://www.youtube.com/watch?v=6RF1Zz5xcNg",
    'คิดถึง': "https://www.youtube.com/watch?v=jDe3UUFawqs",
    'วิชาตัวเบา': "https://www.youtube.com/watch?v=FNq-8bWfAwQ",
    'ไม่แก่ตาย': "https://www.youtube.com/watch?v=015VIADrQfI",
    'เธอ': "https://www.youtube.com/watch?v=nY9sHiZ4bTU",
    'คุกเข่า': "https://www.youtube.com/watch?v=dXf3sWxIhfY",
    'คู่ชีวิต': "https://www.youtube.com/watch?v=3mYVyVY-lU4",
    'โปรดเถิดรัก': "https://www.youtube.com/watch?v=JNKSzrrwyus",
    'เธอทำให้ฉันเสียใจ': "https://www.youtube.com/watch?v=jjAqxxSBi3Y",
    'ไม่เคย': "https://www.youtube.com/watch?v=v0UvOsCi8mc",
    'คนข้างๆ': "https://www.youtube.com/watch?v=1NKxalmq2VU",
    'เที่ยงคืนสิบห้านาที': "https://www.youtube.com/watch?v=uozAhIkHWhI",
    'ใบไม้': "https://www.youtube.com/watch?v=mrnVq9KSnKU",
    'ทำได้เพียง': "https://www.youtube.com/watch?v=JqRtEt9TzVo",
    'เปลือก': "https://www.youtube.com/watch?v=sKL3n_W7bOw",
    'เคลิ้ม': "https://www.youtube.com/watch?v=UZxDLz-li_c",
    'บางสิ่ง': "https://www.youtube.com/watch?v=CBP2PlqiOws",
    'เหนื่อยบ้างไหม': "https://www.youtube.com/watch?v=I-eCe-53AGU",
    'โลกสมมุติ': "https://www.youtube.com/watch?v=7-NbbnBhy1U",
    'เรื่องจริง': "https://www.youtube.com/watch?v=qnGTC8EUUes",
    'GOODBYE': "https://www.youtube.com/watch?v=akGVjsw8ZV0",
    'Second Chance': "https://www.youtube.com/watch?v=qoqvSTAy9EI",
    'นอยด์': "https://www.youtube.com/watch?v=IzgjS7i-t00",
    'นิรันดร์': "https://www.youtube.com/watch?v=qtG_Kfr77KM",
  };

  currentState = "initState";
  constructor() {}

  ngOnInit() {
    this.currbtn = this.btnlist1;
  }

  onClickbtn(name: string, value: string) {
    if (!this.insertingCoin) {
      this.init = false;
      console.log(value);
      this.currentState = eval("this." + this.currentState)[value];
      if( this.currentState == "initState"){
        this.init= true;
      }
      this.currbtn = this.allbtn[this.currentState];
      if (this.currentState == "state1") {
        this.isGrid = true;
      } else {
        this.isGrid = false;
      }
      this.updateDFA();
      console.log("state: " + this.currentState);
      if (this.currentState == "state5") {
        this.init=true;
        this.insertingCoin = true;
      }
      this.clicked++;
      this.song += name + "^";
    } else if (this.insertedCoin < 10) {
      console.log("insert : " + value);
      this.insertCoin(+value);
    } else if (this.insertedCoin > 10) {
      this.insertingCoin = false;
      this.currbtn = this.nextbtn;
      this.isPlaying = true;
      this.insertedCoin = 10;
      this.isRefund = false;
      this.currentState = "Now Paying . . .";
      this.img =
        "assets/resources/images/" + this.insertedCoin.toString() + ".PNG";
    }
  }

  updateDFA() {
    console.log(this.currentState);
    console.log(this.currentState.split('_')[0]);
    this.img = "assets/resources/images/" + this.currentState.split('_')[0] + ".PNG";
    console.log(this.img);
  }

  insertCoin(coin: number) {
    this.insertedCoin += coin;
    if (this.insertedCoin == 10) {
      console.log(this.song + this.clicked.toString());
      this.song = this.links[this.song.split("^")[this.clicked-1]];
      this.isPlaying = true;
      this.isRefund = false;
      this.insertingCoin = false;
      this.currentState = "Now Playing . . .";
    }
    if (this.insertedCoin > 10) {
      console.log(this.song + this.clicked.toString());
      this.song = this.links[this.song.split("^")[this.clicked-1]];
      console.log(this.song);
      this.isRefund = true;
      this.currbtn = this.nextbtn;
      this.refund = this.insertedCoin - 10;
    }
    this.img =
      "assets/resources/images/" + this.insertedCoin.toString() + ".PNG";
  }
}
