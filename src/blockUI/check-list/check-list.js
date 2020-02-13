
class LabelIn {
    constructor(labelArr, topArr, time) {
        this.LabelArr = labelArr;
        this.TopArr = topArr;
        this.Time = time;
    }

    topAction() {
        var pixTime = Math.floor(this.Time / this.TopArr[this.TopArr.length - 1]);
        var parr = this.LabelArr[0].parentElement;
        parr.parentElement.getElementsByClassName("check-list__span-icons")[0].innerText = "keyboard_arrow_up";
        for (var t = 0; t < this.TopArr[this.TopArr.length - 1]; t++) {
            setTimeout(this.Action, pixTime * t, t, this.LabelArr, this.TopArr);
        }
    }

    topActionRev() {
        for (var i = 0; i < this.LabelArr.length; i++) {
            this.LabelArr[i].style.top = '0px';
        }
        var parr = this.LabelArr[0].parentElement;
        parr.style.opacity = '0';
        parr.parentElement.getElementsByClassName("check-list__span-icons")[0].innerText = "keyboard_arrow_down";
    }


    Action(ltop, list, size, ) {
        for (var i = 0; i < list.length; i++) {
            if (ltop < size[i]) {
                list[i].style.top = String(ltop) + 'px';
            }
        }
    }
}






function showCheckboxes(event) {
    var divList = this.nextSibling.nextSibling;
    var listLabel = divList.childNodes;
    var topArr = [];
    var labelArr = [];
    var count = 0;


    for (var i = 0; i < listLabel.length; i++) {
        if (listLabel[i].tagName == "DIV") {
            var he = listLabel[i].offsetHeight;
            var top = count * (he - 25);
            topArr[count] = top;
            labelArr[count] = listLabel[i];
            count++;
        }
    }
    var labelIn = new LabelIn(labelArr, topArr, 500);

    if (divList.style.opacity === '' || divList.style.opacity === '0') {
        divList.style.opacity = '100';        
        labelIn.topAction();
    }
    else {
        labelIn.topActionRev();
    }
}


function SearchEvenCklick() {
    var divListEvent = document.querySelectorAll(".check-list__div-head");//находим элементы
    divListEvent = [].slice.call(divListEvent);
    divListEvent.forEach(ite => {
        ite.addEventListener("click", showCheckboxes);//вешаем обработчик события
    });
}

SearchEvenCklick();