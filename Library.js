function IsTouching(UFO1, object2){

  
    if (UFO1.x - object2.x < object2.width/2 + UFO1.width/2 && object2.x - UFO1.x < object2.width/2 + UFO1.width/2 && UFO1.y - object2.y < object2.height/2 + UFO1.height/2 && object2.y - UFO1.y < object2.height/2 + UFO1.height/2) {
     return true;
  }
  else {
   
    return false;
  }
  
  }