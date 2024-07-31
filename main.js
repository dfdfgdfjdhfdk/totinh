// Thay đổi nội dung búc thư ở đây
var letterContent ="Hé lu bạn nhỏ cụa tớ nha ,tớ biết thời gian gần đây tớ khó chịu với cọc với bạn nhỏ nên tớ xin lỗi bạn nhỏ cụa tớ nhiều lắm ,nhưng mà tớ yêu bạn nhỏ nhiều lắm tớ muốn bạn nhỏ quan tâm tớ hơn đừng phất lờ tớ nữa hong ,hmm bạn nhỏ làm vậy biết tớ buồn lắm hum tớ cũm muốn hiểu bạn nhỏ và yêu bạn nhỏ hơn nhưng mà tớ cảm giác bạn nhỏ hong muốn tớ sợ phiền bạn nhỏ lắm có chuyện gì thì cứ nói với tớ được không ,đừng dùng silent treatment với tớ tội tớ lắm mqh trước của tớ đã không ra gì rồi nên đừng đối xử với tớ như vậy được không tớ cũng không muốn khó chịu với bạn nhỏ tí nào cả nma quan tâm tớ được không tớ cũng muốn được bạn nhỏ yêu tớ mà .Mà tự nhiên tớ có 1 cô bồ siu siu đáng iu và chinh đẹp ở đâu đến bên cạnh tớ nên tớ rất trân trọng và mún cảm ơn vì bạn nhỏ đã đến nha ,có thể bây giờ bạn nhỏ không tin những lời tớ nói lắm với tớ cũng không thích nói nhiều nói mà làm không được cũng như không nên bạn nhỏ cho tớ thời gian để chứng minh cho bạn nhỏ thấy nha và cuối cùng tớ mún nói là tớ iu bạn nhỏ nhìu lắm lắm lunnnn 🫶"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})