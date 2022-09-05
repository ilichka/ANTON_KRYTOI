export abstract class BaseTree<T> {
  root: T | null = null;

  abstract insert(value: number): void;

  abstract iterate(node: T, cb: any): void;

  abstract removeNode(node: T | null, value: number): T | null;

  abstract search(node: T, value: number): T | null;

  inform(message: number) {
    console.log(`OBSERVED: ${message}`);
  }
}
