export default class ComfortItems {
  constructor(names) {
    this.names = names;
    this.count = 0;
    this.resultStr = '';
  }

  countPlus() {
    this.count += 1;
    this._equal();
  }

  countMin() {
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
                  this.resultStr = ` ${String(this.count)}${this.names[2]}`;
                } else {
                  this.resultStr = ` ${String(this.count)}${this.names[1]}`;
                }
              } else {
                this.resultStr = ` ${String(this.count)}${this.names[0]}`;
              }
            } else {
              this.resultStr = ` ${String(this.count)}${this.names[2]}`;
            }
          } else {
            this.resultStr = ` ${String(this.count)}${this.names[2]}`;
          }
        } else {
          this.resultStr = ` ${String(this.count)}${this.names[1]}`;
        }
      } else {
        this.resultStr = ` ${String(this.count)}${this.names[0]}`;
      }
    } else {
      this.resultStr = '';
    }
  }
}
