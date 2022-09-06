import { Node, SearchableBaseTree } from "./types";

export class BinaryTree implements SearchableBaseTree<number> {
  public root: Node<number> | null = null;

  insert(value: number) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  remove(value: number) {
    this.removeNode(this.root, value);
  }

  search(value: number): Node<number> | null {
    return this.searchNode(this.root, value);
  }

  private insertNode(node: Node<number> | null, newNode: Node<number>) {
    if (node === null) {
      return null;
    }
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  private minNode(node: Node<number> | null): any {
    if (node?.left === null) {
      return node;
    } else {
      return this.minNode(node?.left ?? null);
    }
  }

  private removeNode(
    node: Node<number> | null,
    value: number
  ): Node<number> | null {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let minNode = this.minNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  private searchNode(
    node: Node<number> | null,
    value: number
  ): Node<number> | null {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return node;
    }
  }
}
