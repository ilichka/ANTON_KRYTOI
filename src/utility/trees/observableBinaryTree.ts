import { Node, SearchableBaseTree } from "./types";

type TreeChangedCallback<T> = (updatedTree: SearchableBaseTree<T>) => void;

export class ObservableBinaryTree<T> implements SearchableBaseTree<T> {
  private listeners: TreeChangedCallback<T>[] = [];
  root: Node<T> | null;

  constructor(private binaryTree: SearchableBaseTree<T>) {
    this.root = this.binaryTree.root;
  }

  insert(value: T) {
    this.binaryTree.insert(value);
    this.notify();
  }

  remove(value: T) {
    this.binaryTree.remove(value);
    this.notify();
  }

  search(value: T) {
    return this.binaryTree.search(value);
  }

  notify() {
    this.listeners.forEach((callback) => {
      callback(this.binaryTree);
    });
  }

  subscribe(callback: TreeChangedCallback<T>) {
    this.listeners.push(callback);
  }

  unsubscribe(callback: TreeChangedCallback<T>) {
    this.listeners = this.listeners.filter((listener) => listener !== callback);
  }
}

export function makeTreeObservable<T>(tree: SearchableBaseTree<T>) {
  return new ObservableBinaryTree<T>(tree);
}
