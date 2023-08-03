a = [4, 2, 9, 3, 1, 8,5,7,0,10,5,3,9];


for(var i=0; i<a.length-1; i++){
    for(var j=i+1; j<a.length; j++){
        if(a[i]>a[j]){
            a[i]=a[i]+a[j];
            a[j]=a[i]-a[j];
            a[i]=a[i]-a[j];
        }
        nowArr(a);
    }
}



function nowArr(ar) {
    class Box {
        constructor(value) {
            this.container = document.querySelector('.container')
            this.value = value
        }


        draw() {
            this.div = document.createElement('div')
            this.div.className = 'box'
            this.div.innerText = this.value
            this.div.style.height = `${this.value * 50}px`
            //console.log(this.div.style.height)
            this.container.append(this.div)
        }
    }

    for (const i of ar) {

        b = new Box(i)
        b.draw()
    }
} 
