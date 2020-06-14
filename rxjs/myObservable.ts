interface MyObserver<T> {
  next: (n: T) => void;
  error: (error: any) => void;
  complete: () => void;
}

class MyObservable<T> {
  constructor(private producer: (observer: MyObserver<T>) => void) {}
  subscribe(observer: MyObserver<T>) {
    this.producer(observer);
  }
}

const obs$ = new MyObservable<number>((observer: MyObserver<number>) => {
  observer.next(1);
  setTimeout(() => observer.next(2), 20);
  setTimeout(() => observer.complete(), 40);
});

obs$.subscribe({
  next: (n: number) => console.log(`next`, n),
  error: (error: any) => console.log(`error`, error),
  complete: () => console.log(`complete`),
});
