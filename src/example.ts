/* eslint-disable spaced-comment,@typescript-eslint/no-unused-vars */
//type alias
type StringOrNumber = string | number;
type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | object | [];

// Массивы в TS
type TsArr = number | string;

// const tsArr: TsArr[] = [1,2,3];
// const tsArr2: Array<StringOrNumber> = [1,2,3];

// Объект, Interface
interface MyFirstInterface {
  readonly name: string;
  birthDay: number | string;
  male?: string;
  lastname: string;
}

const tsObj: MyFirstInterface = {
  name: 'Zar',
  birthDay: 24,
  lastname: 'Zakharov',
};

interface IndexInterface {
  [n: string]: string | number;
}

const data: IndexInterface = {
  key1: 'key',
  key2: 2,
};

const val = data.key3;

// Функции в TS
// calculate("add", 2, 3) => 5;

// eslint-disable-next-line no-shadow
enum MethodEnum {
  add = 'add',
  sub = 'sub',
}

// eslint-disable-next-line consistent-return
function calculate(method: MethodEnum, first: number, second: number): number {
  switch (method) {
    case MethodEnum.add:
      return first + second;
    case MethodEnum.sub:
      return first - second;
  }
}

calculate(MethodEnum.sub, 2, 3);
// --------
type TypeFn = () => number;
type TypeDefaultFn = () => void;

const ArrowFunc: TypeDefaultFn = () => 2;

// Generics
function identity<T>(value: T): T {
  return value;
}

identity(1);
identity('sub');

const tsArr1: MyArray<number> = [1, 2, 3, 4];
const tsArr3: Array<number | string> = [1, 2, 3, 4];

tsArr1.map((i) => `${i} + 1`);
tsArr1.reduce((a, b) => a + b);
tsArr3.reduce((a, b) => {
  return `${a} + b)`;
});
function getLen<T extends Array<any>>(arr: T): number {
  return arr.length;
}

// HW: Работа с простыми типами
// concat('Hello ', 'World') // -> Hello World;
const concat = (str: StringOrNumber, str2: StringOrNumber) => `${str}${str2}`;
concat('Hello ', 2);

// HW: Работа с интерфейсами
interface Hometask {
  howIDoIt: string;
  simeArray: Array<StringOrNumber>; // StringOrNumber[]
  withData: [WithData];
}
interface WithData {
  howIDoIt: string;
  simeArray: StringOrNumber[]; // Array<StringOrNumber>
}

const myHometask: Hometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [
    {
      howIDoIt: 'I Do It Wel',
      simeArray: ['string one', 23],
    },
  ],
};

// HW: Типизация функций, используя Generic
interface MyArray<T> {
  [n: number]: T;

  map<U>(param: (i: T) => U): Array<U>;
  reduce<U>(param: (a: T, b: T) => U): U;
}
