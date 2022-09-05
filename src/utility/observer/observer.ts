import { BaseTree } from "../trees/baseTree";

export class Observer {
  lastValueChanged: number;
  tree: BaseTree<unknown> | null;
  constructor() {
    this.lastValueChanged = 0;
    this.tree = null;
  }

  setValue(value: number) {
    this.lastValueChanged = value;
    this.notify();
  }

  notify() {
    this.tree?.inform(this.lastValueChanged);
  }

  register(observer: BaseTree<unknown>) {
    this.tree = observer;
  }

  unregister(observer: BaseTree<unknown>) {
    this.tree = null;
  }
}
