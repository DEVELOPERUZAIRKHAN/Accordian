const questionEls=document.querySelectorAll(".accordian__question")

for (let i = 0; i < questionEls.length; i++) {
    let elem =questionEls[i]

    elem.addEventListener("click",function() {

        if(this.nextElementSibling.style.maxHeight){
           this.nextElementSibling.style.maxHeight=null
           this.lastElementChild.innerHTML = "+"
        }
        else{

            this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+"px"
            this.lastElementChild.innerHTML = "-"

          }
    })
    }
