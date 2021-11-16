const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }

  imARectangle(){
    console.log("im a RECTANGLE")
  }
}

const rectangle = new Rectangle(12, 9);
console.log(rectangle)
rectangle.printInfo();
rectangle.imARectangle()


class Square extends Shape {
  constructor(side){
    const area = side *side
    const permiter = side *4

    super(area,permiter)
    this.side = side
  }

  imASquare(){
    console.log("Im a SQUARE")
  }
}

const sq = new Square(5)
console.log(sq)
sq.printInfo()
sq.imASquare()