 const soundItem = document.querySelector("#itemImg")
 const crash = document.querySelector("#crashmp3")
 const snare = document.querySelector("#snaremp3")
 const kick = document.querySelector("#kickmp3")
 const tom = document.querySelector("#tommp3")
 
soundItem.addEventListener("keyup",function(e){
      if(e.key==="a" ){
        crash.play()  
      }
      else if(e.key==="s"){
        snare.play()  
      }
      else if(e.key==="d"){
        kick.play()  
      }
      else if(e.key==="f"){
        tom.play()  
      }
      
     
    }) 
    soundItem.tabIndex=0
    soundItem.focus()
    
    
    soundItem.addEventListener("click",function(e){
      if(e.target.nodeName==="IMG"){

        if(e.target.id==="crash"){
          crash.play()        
      }
    else if(e.target.id==="kick"){
      kick.play()        
    }
    else if(e.target.id==="snare"){
      snare.play()        
    }
    else if(e.target.id==="tom"){
    tom.play()        
  }
  }
  
}) 








 // soundItem.addEventListener("click",function(e){
 //    if(e.target.nodeName==="IMG"){
 //         playMugic(e.target.id)
 //    }
 //  }) 
 
 //   function playMugic(id){
 //     let audio = new Audio(`${id}.mp3`)
 //     audio.play()
 //   }
   



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
