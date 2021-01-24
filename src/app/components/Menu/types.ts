interface Voice {
  regexp: RegExp,
  text: string,
  value: (x: any) => string
}

export default Voice;
