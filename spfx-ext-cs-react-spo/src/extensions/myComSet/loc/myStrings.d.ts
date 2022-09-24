declare interface IMyComSetCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'MyComSetCommandSetStrings' {
  const strings: IMyComSetCommandSetStrings;
  export = strings;
}
