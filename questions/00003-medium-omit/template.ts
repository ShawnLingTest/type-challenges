type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Exclude<T, U> = T extends U ? never : T;

export type MyOmit<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>;
