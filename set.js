//Performance analysis of array and set
let b=[1,2,4,6,7,68,79]
let a =[]
let snew= new set ()
for (var i=0;i<b.length;i++){
	console.timeEnd('Array')
	console.time('set')
	snew.add(a[i])
	console.timeEnd('set')
} 
 console.time ('Array')
 for(i=0;i<b.length;i++){
 	if(b[i]==4){
 		b[i]=5
 	}
 }
 console.timeEnd('array')
 console.time('set')
 if(snew.has(4)){
 	snew.delete(68)
 	snew.add(10)
 }
 console.timeEnd('set')
 if(snew.has(4)){
 	snew.delete(68)
 	snew.add(10)
 }
 console.timeEnd('set')
 console.log(b)
 console.log(snew)

 let ob1={id:1,name:'appu'}
 let ob2={id:2,name:'skan'}
 let s=new set();
 s.add(ob1);
 s.add(ab2);
 console.log(s);