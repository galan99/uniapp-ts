# typescript

```javascript
let isDone: boolean = false; // 布尔值
let decLiteral: number = 6; // 数字
let name: string = "bob"; // 字符串
let list: number[] = [1, 2, 3]; // 数组
let list: Array<number> = [1, 2, 3]; // 数组泛型语法
let list: (number | string)[] = [1, 's'] // 混合数组

let tuple: [number, string] = [0, '1'] // 元组
tuple = ['1', 0] // Error

// 数字枚举，初始值为 0, 逐步递增，也可以自定义初始值，之后根据初始值逐步递增
enum Role {
  Reporter = 1,
  Developer,
}
console.log(Role.Developer) // 2
console.log(Role[2]) // Developer

enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
console.log(Enum.A, Enum.C, Enum.F) // 0, "C", 9


// 字符串枚举
enum Message {
  Success = '成功',
  Fail = '失败'
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];

// 在ts2.4 版本，允许使用字符串枚举。在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}
let dirName = Direction[0]; // NORTH
let dirVal = Direction["NORTH"]; // 0

// 对象
let obj2: {  x: number, y: number } = { x: 1, y: 2 }
obj2.x = 3

// Null & Undefined, 若其他类型需要被赋值为 null 或 undefined 时， 在 tsconfig.json 中将 scriptNullChecks 设置为 false。或者 使用联合类型
let un: undefined = undefined
let nu: null = null


// Symbol
let s: symbol = Symbol()

// 断言
let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length; // 尽量不采用，react会把<>当做标签元素

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;


// 接口：接口规范首字母大写
interface Person {
  name: string
  age?: number
  readonly id: number // 属性名前使用 readonly 关键字制定为只读属性，初始化后不可更改。
  [x: string]: any // 用任意的字符串索引，使其可以得到任意的结果。
}

let man: Person = {
  id: 1,
  name: 'James',
  age: 30,
  sex: 'boy'
}

interface List {
  readonly id: number
  name: string
  age?: number
}

interface Result {
  data: List[]
}

function render (result: Result) {
  console.log(JSON.stringify(result))
}
render({
  data: [
    { id: 1, name: 'A', sex: 'male'},
    { id: 2, name: 'B' }
  ]
} as Result)
// render(<Result>{
//   data: [
//     { id: 1, name: 'A', sex: 'male'},
//     { id: 2, name: 'B' }
//   ]
// })

// 函数
// 可选参数
function add (x: number, y: number, z?: number) {
  return x + y
}
add(1, 2)

// 默认参数
function add (x: number, y = 2) {
  return x + y
}

// 剩余参数
function add (x: number, ...rest: number[]) {
  return x + rest.reduce((prev, curr) => prev + curr)
}
```

### vue typescript

```javascript
```
