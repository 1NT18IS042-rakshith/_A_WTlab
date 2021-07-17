class stack{
    constructor(){
    this.items=[];
    }
    add(element){
    return this.items.push(element);
    }
    remove(){
    if(this.items.length > 0){
    return this.items.pop();
    }
    }
    isempty(){
    return this.items.length==0;
    }
    clear(){
    this.items=[];
    }
    }
    let stack=new stack ();
    stack.add(15);
    stack.add(20);
    stack.add(25);
    stack.add(10);
    console.log(stack.items);
    stack.remove();
    console.log(stack.items);
    console.log(stack.isempty);
    stack.clear();
    console.log(stack.items)