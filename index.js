 const soundItem = document.querySelector("#itemImg")

 soundItem.addEventListener("click",function(e){
    if(e.target.nodeName==="IMG"){
         playMugic(e.target.id)
    }
  }) 
 
   function playMugic(id){
     let audio = new Audio(`${id}.mp3`)
     audio.play()
   }
   



 // soundItem.addEventListener("click",function(e){
 //   if(e.target.nodeName==="IMG"){
 //    if(e.target.id==="crash"){
 //        playMugic1()
 //    }
 //    if(e.target.id==="kick"){
 //        playMugic2()
 //    }
 //    if(e.target.id==="snare"){
 //        playMugic3()
 //    }
 //    if(e.target.id==="tom"){
 //        playMugic4()
 //    }
 //   }
   
 // }) 



 //  function playMugic1(){
 //    let audio = new Audio("crash.mp3")
 //    audio.play()
 //  }
 //  function playMugic2(){
 //    let audio = new Audio("kick.mp3")
 //    audio.play()
 //  }
 //  function playMugic3(){
 //    let audio = new Audio("snare.mp3")
 //    audio.play()
 //  }
 //  function playMugic4(){
 //    let audio = new Audio("tom.mp3")
 //    audio.play()
 //  }
