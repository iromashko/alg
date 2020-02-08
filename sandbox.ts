namespace DecoratorPattern {
  export interface Component {
    operation(): void;
  }
  export class ConcreteComponent implements Component {
    constructor(private s: string) {
      this.s = s;
    }
    public operation(): void {
      console.log(`concrete component ${this.s}`);
    }
  }
  export class Decorator implements Component {
    constructor(private id: number, private component: Component) {
      this.id = id;
      this.component = component;
    }
    public get Id(): number {
      return this.id;
    }
    public operation(): void {
      console.log(`decorator ${this.id}`);
      this.component.operation();
    }
  }
  export class ConcreteDecorator extends Decorator {
    constructor(id: number, component: Component) {
      super(id, component);
    }
    public operation(): void {
      super.operation();
      console.log(`concrete decorator ${this.Id}`);
    }
  }
}
