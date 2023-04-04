function Cat(name){
    this.name = name;
}
Cat.prototype.eat = () => console.log('eat');

const tom = new Cat('tom')
tom.sleep();
console.log(tom)
module.export = Cat;
