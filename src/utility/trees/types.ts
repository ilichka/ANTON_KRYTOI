export class Node<T> {
  value: T;
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export interface BaseTree<T> {
  root: Node<T> | null;
  insert: (value: T) => void;
  remove: (value: T) => void;
}

export interface SearchableBaseTree<T> extends BaseTree<T> {
  search: (value: T) => Node<T> | null;
}
