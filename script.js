var data = [
  {
    color:"red"
  },
  {
    color:"blue"
  },
  {
    color:"orange"
  }
]
var boxes =[];

function box(color){
  var that = this;
  this.color=color;
  this.number=0;
  this.ele=document.createElement("div");
  this.ele.style.backgroundColor=this.color;
  this.ele.style.height="100px";
  this.ele.style.width="200px";
  this.ele.style.textalign="center";
  this.ele.style.borderradius="10px";
  this.numberEle=document.createElement("div");
  this.numberEle.classList.add("box");
  this.numberEle.style.fontSize="18px";  this.numberEle.style.textAlign="center";
  this.numberEle.style.padding = "30px";
  this.numberEle.innerHTML=this.number;
  this.ele.appendChild(this.numberEle);
  
  this.ele.addEventListener("click", function(){
    that.addUp();
  });
  
  document.body.appendChild(this.ele);

}

box.prototype.addUp = function(){
  this.number++;
  this.numberEle.innerHTML=this.number;
}

for(var i=0; i<data.length; i++){
  boxes.push(new box(data[i].color))
}