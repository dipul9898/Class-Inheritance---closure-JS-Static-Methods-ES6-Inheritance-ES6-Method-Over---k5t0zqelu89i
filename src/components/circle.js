// import using require

// declare class


// export class using module.exports
var Shape = require('./shape.js');
// declare class

class Circle extends Shape{
    constructor(color){
        super();
    }
    calculateArea(){

    }
}
// export class usoing modula.export
module.exports = Circle;
