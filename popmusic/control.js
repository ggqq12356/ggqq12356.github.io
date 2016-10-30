window.onload = function(){

    var bt = document.getElementsByClassName('bt')
    /*
    for (var i=0 ; i<bt.length ; i++){
        bt[i].innerHTML = "測試"
        bt[i].style.cssText = "padding-top: 20px; font-size: 30px;"
    }
    */
    for (var i=0 ; i<bt.length ; i++){
        var s = document.getElementsByClassName('s'+(i+1))
        s[0].textContent = "測試"
        s[0].style.cssText = "padding-top: 20px; font-size: 30px;"

        s[0].onmouseenter = function(){
            this.style.fontSize = "50px"
        }
        s[0].onmouseleave = function(){
            this.style.fontSize = "30px"
        }

    }
    console.log(s[0].style)
}
