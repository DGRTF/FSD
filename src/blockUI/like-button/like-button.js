class LikeButton{
    constructor(){
        this._initialize();
    }

    _initialize(){
        this.mainElement=document.querySelectorAll(".like-button");
        this.mainElement.forEach(element =>{
            element.addEventListener("submit", this._changeContent )
        })
    }

    _changeContent(event){
        event.preventDefault();
        let number=parseInt(event.currentTarget.querySelector(".like-button__number").innerText)+1;
        event.currentTarget.querySelector(".like-button__number").parentElement.classList.toggle("like-button__button-like");
        event.currentTarget.querySelector(".like-button__number").innerText=String(number);
        
    }
}

let likeButton = new LikeButton();