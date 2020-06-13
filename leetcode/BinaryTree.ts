export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;
  constructor(value: number, parent: BinaryTree | null = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}
