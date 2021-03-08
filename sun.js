class sun{
constructor(x,y,radius,color1,color2,color3){
  this.x = x
  this.y = y
  this.radius = radius
  this.color1 = color1
  this.color2 = color2
  this.color3 = color3

}
display(){
    fill(this.color1,this.color2,this.color3)
    ellipse(this.x,this.y,this.radius)
}
}