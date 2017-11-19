//奇葩  看他们的解释
//两个对象的值是否相同，取决于它们是否指向相同的底层
var a = {name: "andrew"},
b = {name: "andrew"};

a === b; // false

//对于引用类型，设置b=a，并没有创建新对象，而是创建了一个对其他对象的引用；只是将变量b指向a，当改变b的name属性时，同样改变了a的name属性
var a = {name: "andrew"},
b = a;

b.name = "robbins";

a === b; // true

//对于对基本类型，是不可变的。
var a = "Andrew",
b = a;

b = "Robbins";

a === b; // false

//基本类型的属性是只读和临时的
var hello = 'hello';
hello.slice(1);   // 'ello'
hello;    //'hello'

typeof 's';  //'string'
typeof null; //object;
typeof undefined;  //'undefined'
typeof new String(s);  //'object'

//js值分为两种类型：基本类型和对象类型
//基本类型：String Number Boolen,Symbol,undefined,null
//对象类型：Function Object Array

function Cat(name,color){
    this.name = name;
    this.color = color;
}

Cat.prototype.type = '猫科动物';
Cat.prototype.eat = function(){alert('吃鱼')};
var cat1 = new Cat('大毛','黄色');
var cat2 = new Cat('二毛','黑色');

console.log(cat1.hasOwnProperty('name'));    //判断 name属性是实例对象cat1的自身属性  true
console.log(cat1.hasOwnProperty('eat'));    //判断 eat方法是实例对象cat1的自身属性 false，是继承自prototype原型上的
console.log(cat1 instanceof Cat);           //判断 cat1是否是Cat的实例  true
console.log('name' in cat1);                //判断 cat1是否具有name属性，不管是自身的还是继承自prototype的  true
console.log('eat' in cat1);                 //true

