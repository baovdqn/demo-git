function Cat(name){
    this.name = name;
    console.log(name);
}

Cat.prototype.eat = () => console.log('Eatinggg');

module.export = Cat;
