function Cat(name){
    this.name = name;
}
Cat.prototype.sleep = () => console.log('mmmm');

const tom = new Cat('tom')
tom.sleep();
console.log(tom)
module.export = Cat;
