import { Node } from "../trees/types";

export class TreeIterator<T> {
  strategy: (node: Node<T> | null, cb: (value: number) => void) => void;

  constructor(
    strategy: (node: Node<T> | null, cb: (value: number) => void) => void
  ) {
    this.strategy = strategy;
  }

  iterate(node: Node<T> | null, cb: (value: number) => void) {
    this.strategy(node, cb);
  }

  setStrategy(
    strategy: (node: Node<T> | null, cb: (value: number) => void) => void
  ) {
    this.strategy = strategy;
  }
}
