window.onload = function(){

    var bt = document.getElementsByClassName('bt')
    /*
    for (var i=0 ; i<bt.length ; i++){
        bt[i].innerHTML = "測試"
        bt[i].style.cssText = "padding-top: 20px; font-size: 30px;"
    }
    */

    var max = 12
    var min = 1
    var r = parseInt(Math.random() * (max - min + 1) + 1)
    ans = 's'+r
    console.log('[答案]：'+ans)

    for (var i=0 ; i<bt.length ; i++){
        var s = document.getElementsByClassName('s'+(i+1))
        s[0].innerHTML = "選擇"+(i+1)
        s[0].style.cssText = "padding-top: 20px; font-size: 30px;"

        s[0].onmouseenter = function(){
            this.style.fontSize = "40px"
        }
        s[0].onmouseleave = function(){
            this.style.fontSize = "30px"
        }

        s[0].onclick = function(){
            var sc = this.className.split(/\s+/)[1]
            var image = document.getElementsByClassName('image')

            if (sc == ans){
                image[0].style.backgroundImage = "url(no_music_no_life.jpg)"
            }
            console.log('[選擇]：'+sc)
            if (sc != ans){
                this.innerHTML = "錯誤"
            }
            else{
                this.innerHTML = "正確"
                this.style.color = "yellow"
                this.style.fontSize = "100px"
                alert('[恭喜] 答案正確, 答案是：'+r)
            }
            this.style.fontSize = "50px"
            this.style.paddingLeft = "-200px"
        }
    }
    //console.log(bt)

}
