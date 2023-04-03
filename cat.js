function Cat(name, color, age){
    this.name = name;
    this.color = color;
    this.age = age
}
Cat.prototype.sleep = () => console.log('mmmm');

const tom = new Cat('tom')
tom.sleep();

console.log(tom)

module.export = Cat;
