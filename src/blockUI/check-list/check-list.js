
class LabelIn {
    constructor(labelArr, topArr, time) {
        this.LabelArr = labelArr;
        this.TopArr = topArr;
        this.Time = time;
    }

    topAction(check) {
        var pixTime = Math.floor(this.Time / this.TopArr[this.TopArr.length - 1]);
        console.log(pixTime);

        if (check) {
            for (var t = 0; t < this.TopArr[this.TopArr.length - 1]; t++) {
                setTimeout(this.Action, pixTime * t, t, this.LabelArr, this.TopArr);
            }
        }
        else {
            for (var t = this.TopArr[this.TopArr.length - 1]; t >= 0; t--) {
                setTimeout(this.Action2, pixTime * t, this.LabelArr,t,this.TopArr[this.TopArr.length - 1]);

            }
        }
    }

    Action(ltop, list, size,) {
        for (var i = 0; i < list.length; i++) {
            if (ltop < size[i]) {
                list[i].style.top = String(ltop) + 'px';
            }
        }
    }

    Action2(list,iter,iterm) {
        for (var i = 0; i < list.length; i++) {
            if (parseInt(list[i].style.top) > 0) {
                list[i].style.top = String((parseInt(list[i].style.top) - 1)) + 'px';
                if (iter = iterm) {
                    list[i].parentElement.style.opacity = '0';
                    console.log('Genan');
                }
                //console.log((parseInt(list[i].style.top)-1));
            }
        }
    }
}



var check = true;
let labelIn = null;

function showCheckboxes() {
    var divList = document.getElementsByClassName("check-list__div-list")[0];
    var listLabel = divList.childNodes;
    var topArr = [];
    var labelArr = [];
    var count = 0;

    if (check) {
        for (var i = 0; i < listLabel.length; i++) {
            if (listLabel[i].tagName == "DIV") {
                var he = listLabel[i].offsetHeight;
                var top = count * he;
                topArr[count] = top;
                labelArr[count] = listLabel[i];
                //console.log(labelArr[count].tagName);
                count++;
            }
        }


        divList.style.opacity = '100';
        labelIn = new LabelIn(labelArr, topArr, 500);
        labelIn.topAction(check);
        check = false;
    }
    else {
        labelIn.topAction(check);
        check = true;

    }
}


function SearchEvenCklick()
{
    var divListEvent = document.getElementsByClassName("check-list")[0];//находим элемент
    divListEvent.addEventListener( "click" , showCheckboxes);//вешаем обработчик события
}
// export {showCheckboxes} ;

SearchEvenCklick();