import Base from "./base";
// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "Jane", lastName: "User" };

// let list: number[] = [1, 2, 3];

// let tupe: [string, object] = ['908', {ding: 777}];
// enum Color {Red, Green = 99, Blue}
// let colorName: string = Color[99];

// console.log(list, colorName);

// interface LabelObj {
//   price?: number;
//   readonly title: string;
// }

// function getshoem (obj: LabelObj) {
//   obj.price = 789;
//   console.log(obj);
// }

// let objectshne: LabelObj = {price: 9090, title: '山东煎饼'};
// let onlyArr: ReadonlyArray<number> = [12,34];

// let dinglun: any[] = [12, [887, 99]];
// let lun = [...dinglun, 666];

// function sayshnem([a, b, c]: any[]): void {
//   console.log(a, '-', ...b, c);
// }

// sayshnem(lun);

// let obj1 = {
//   a: 1,
//   b: '222',
//   c: 454
// };

// let { a: newa, b: newai }: {a: number, b: any} = obj1;

// console.log(newa, newai);

// interface DingLunConfig {
//   name: string
//   age: number
//   [propName: string]: any
// }

// interface returnCon {
//   result: string
// }

// function getHello(params: DingLunConfig): returnCon {
//   let {name, age, names} = params;
//   return {result: name};
// }
// // getHello({names: '丁伦', age: 26});

// interface StringArray {
//   [ding: number]: string
//   [lun: string]: any
// }

// let myList: StringArray
// myList = ['nin', '号'];

// let names = myList[0];
// myList[9] = '90';

// interface ObjString {
//   (name: String, ages: number): boolean
// }

// let getsgen: ObjString = function (a, b) {
//   return b > Number(a);
// }

// class Animal {
//   constructor(private name: string) {}

//   move () {
//     return this.name;
//   }
// }

// class Duck extends Animal {
//   readonly step: number
//   constructor(name: string, step: number) {
//     super(name)
//     this.step = step;
//   }

//   sayStep (din: number): boolean {
//     console.log(`走到了${this.step}m`);
//     return din > 9;
//   }
// }

// let myAdd: (baseValue: number, increment: number) => any =
//     function(x: number, y: number): number { return x + y; };

// let cat = new Animal('鸡鸡');

class SingleBase extends Base {
  constructor (name: string, age: number) {
    super(name, age);
  }
  public sayJob ():string {
    return '子类的工作是' + this.name;
  }
}

let instance = new SingleBase('程序猿', 26);

//函数重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): any {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

function getLength(something: string | number): number {
  if ((<string>something).length) {
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}

jQuery('#foo');


// document.body.innerHTML = greeter(user);