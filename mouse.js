function Mouse(name){
    this.name = name;
}

Mouse.prototype.sleep = () => {
    console.log('zzzz');
}

module.export = Mouse;
