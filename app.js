a = [6, 4, 5, 4, 3, 2,8,3,2,5];


  

for(var i=0; i<10; i++){
    for(var j=i+1; j<10; j++){
        if(a[i]>a[j]){
            a[i]=a[i]+a[j];
            a[j]=a[i]-a[j];
            a[i]=a[i]-a[j];
        }
        nowArr(a);
    }
}



function nowArr(ar){
    

class Box{
    constructor(value){
        this.container = document.querySelector('.container')
        this.value = value
    }
    

    draw(){
        this.div = document.createElement('div')
        this.div.className = 'box'
        this.div.innerText = this.value
        this.div.style.height = `${this.value*50}px`
        console.log(this.div.style.height)
        this.container.append(this.div)
    }
}

for(const i of ar){

    b = new Box(i)
    b.draw()
    
}
} 
