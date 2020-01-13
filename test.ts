namespace AdapterPattern {
  export class Adaptee {
    method(): void {
      console.log('method of adaptee');
    }
  }
  export interface Target {
    call(): void;
  }
  export class Adapter implements Target {
    call(): void {
      console.log(`method of adapter`);
      let adaptee = new Adaptee();
      adaptee.method();
    }
  }
}
