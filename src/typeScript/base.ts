export default class Fetch {
  constructor(public name: string, public age: number) {
    
  }

  public getName (): string {
    return this.name;
  }

  private sayHello (): string {
    return '我是什么' + this.name;
  }

  protected setshen (): number {
    return this.age;
  }
}