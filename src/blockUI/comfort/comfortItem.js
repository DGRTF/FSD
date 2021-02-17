export default class ComfortItems {
  constructor(nameArr) {
    this.nameArr = nameArr;
    this.count = 0;
    this.resultStr = '';
  }

  counterPlus() {
    this.count += 1;
    this._equal();
  }

  counterMin() {
    this.count -= 1;
    this._equal();
  }

  _equal() {
    if (this.count > 0) {
      if (this.count > 1) {
        if (this.count > 4) {
          if (this.count > 20) {
            if (this.count % 10 > 0) {
              if (this.count % 10 > 1) {
                if (this.count % 10 > 4) {
                  this.resultStr = ` ${String(this.count)}${this.nameArr[2]}`;
                } else {
                  this.resultStr = ` ${String(this.count)}${this.nameArr[1]}`;
                }
              } else {
                this.resultStr = ` ${String(this.count)}${this.nameArr[0]}`;
              }
            } else {
              this.resultStr = ` ${String(this.count)}${this.nameArr[2]}`;
            }
          } else {
            this.resultStr = ` ${String(this.count)}${this.nameArr[2]}`;
          }
        } else {
          this.resultStr = ` ${String(this.count)}${this.nameArr[1]}`;
        }
      } else {
        this.resultStr = ` ${String(this.count)}${this.nameArr[0]}`;
      }
    } else {
      this.resultStr = '';
    }
  }
}
