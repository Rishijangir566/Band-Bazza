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






