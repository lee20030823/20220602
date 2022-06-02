var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){   //預設值
		this.p=args.p || {x:random(width/2),y:random(height/2)}
		this.v=args.v || {x:random(-1,1),y:random(-1,1)}//物件移動的速度
		this.r=args.r || random(200) // ||符號主要設定優先使用args.r參數，若沒有接收到則用下一個
		this.a=args.a || {x:0,y:0.2}
		this.color=random(colors)
	}	
	draw(){
		push()
		  translate(this.p.x, this.p.y)
		  fill(this.color)//繪製函數
		  ellipse(0,0, this.r);
		
		  ellipse(-this.r/2,-this.r/2,this.r/2)
		  ellipse(this.r/2,-this.r/2,this.r/2)
		
		  fill(255)
		  noStroke()
		  ellipse(0,0,this.r*2/3)
		
		  
		  fill(123,87,90)
		  noStroke()
		  arc(0,0,this.r/3,this.r/3,0,PI)
		
		  fill(0)
		  ellipse(-this.r/6,-this.r/6,this.r/6)
		  ellipse(this.r/6,-this.r/6,this.r/6)
		
		pop()
	}
	update(){
		this.p.x= this.p.x + this.v.x//移動（動作）
		this.p.y= this.p.y + this.v.y
		this.v.x=this.v.x+this.a.x
		this.v.y=this.v.y+this.a.y
		this.v.x=this.v.x*0.999
		this.v.y=this.v.y*0.999
		if(this.p.y>height){
			 this.v.y = -abs(this.v.y)
		}
	}
}	


var ball
var balls=[]//宣告一個陣列
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i =0;i<200;i++){//數字是球的數量
	   ball=new Ball({a:{x:0,y:0.3},p:{x:width/2,y:0}})
		 balls.push(ball)//產生新的球
	//宣告一個圓的屬性，p是位置，v是速度，r是直徑，color是顏色
	//ball={ p:{x:50,y:50},
				// v:{x:0,y:1},
				// r:100,
				// color:color(255,68,68)
			 //}
}
}

function draw() {
			background(100)
	for(var i=0;i<balls.length;i++){
		ball =balls[i]
		//繪製
		ball.draw()
		//移動（動作）
		ball.update()
	}
}