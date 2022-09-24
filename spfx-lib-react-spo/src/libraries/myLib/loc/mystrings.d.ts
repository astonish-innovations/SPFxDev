declare interface IMyLibLibraryStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyLibLibraryStrings' {
  const strings: IMyLibLibraryStrings;
  export = strings;
}
