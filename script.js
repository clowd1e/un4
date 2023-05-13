// Zadanie 1

class Rectangle {
    constructor(height, width, name) {
        this.height = height;
        this.width = width;
        this.name = name;
        this.obwod = 2 * (width + height);
        this.pole = width * height;
        this.consoleLog = function() {
            console.log("Name: " + this.name + ", height: " + height + ", width: " + width );
            console.log("Obwód tego prostokąta: " + this.obwod);
            console.log("Pole tego prostokąta: " + this.pole);
        };

        // Zadanie 6
        this.changeName = function(newName) {
            this.name = newName;
        }
    };
};

let rectangle1 = new Rectangle(5, 7, 'firstRect');
let rectangle2 = new Rectangle(34.2, 56.23, 'secondRect');
let rectangle3 = new Rectangle(24, 20, 'thirdRect');

rectangle1.changeName("Prostokąt1"); // zadanie 6 wynik
rectangle1.consoleLog();
rectangle2.consoleLog();
rectangle3.consoleLog();

function comparingTwoRec(rec1, rec2) {
    if (rec1.pole >= rec2.pole) {
        return rec1;
    } else {
        return rec2;
    };
};

console.log(comparingTwoRec(rectangle1, rectangle2));

// Zadanie 2

class Triangle {
    constructor (height, baseLength, name) {
        this.height = height;
        this.baseLength = baseLength;
        this.name = name;
        this.pole = (height + baseLength) / 2;
        this.consoleLog = function() {
            console.log("Name: " + name + ", height: " + height + ", baseLength: " + baseLength );
            console.log("Pole tego trójkąta: " + this.pole);
        };
    };
};

function comparingTwoTriag(triag1, triag2) {
    if (triag1.pole >= triag2.pole) {
        return triag1;
    } else {
        return triag2;
    };
};

let triangle1 = new Triangle(2, 5, "firstTriag");
let triangle2 = new Triangle(10.3, 12.64, "secondTriag");
let triangle3 = new Triangle(43, 54, "thirdTriag");

triangle1.consoleLog();
triangle2.consoleLog();
triangle3.consoleLog();

console.log(comparingTwoTriag(triangle2, triangle3));

// Zadanie 3

class Trapeze {
    constructor(height, base1, base2, name) {
        this.height = height;
        this.base1 = base1;
        this.base2 = base2;
        this.name = name;
        this.pole = 0.5 * (base1 + base2) * height;
        this.consoleLog = function() {
            console.log("Name: " + name + ", height: " + height + ", base1: " + base1 + ", base2: " + base2);
            console.log("Pole tej trapezy: " + this.pole);
        };
    };
};

let trapeze1 = new Trapeze(10, 5, 12, "firstTrap");
let trapeze2 = new Trapeze(23.2, 12.34, 24.87, "secondTrap");
let trapeze3 = new Trapeze(15, 8.5, 10, "thirdTrap");

trapeze1.consoleLog();
trapeze2.consoleLog();
trapeze3.consoleLog();

// Zadanie 4

function compareFigures(rect, triag, trap) {
    let pole = 0;
    let name;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].pole > pole) {
            pole = arguments[i].pole;
            name = arguments[i].name;
        };
    };
    return "Pole: " + pole + ", name: " + name;
};

console.log(compareFigures(rectangle2, triangle3, trapeze1));

// Zadanie 5

function compareObwodyProst(triag1, triag2) {
    if (triag1.obwod >= triag2.obwod) {
        return triag1;
    } else {
        return triag2;
    };
};

console.log(compareObwodyProst(triangle2, triangle1));
