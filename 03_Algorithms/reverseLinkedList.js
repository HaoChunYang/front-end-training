var reverseList = function (head) {
  let prev = null,
    curr = head;
  while (curr !== null) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};


function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
ListNode.prototype.read = function () {
  console.log(this.val)
  if (this.next) {
    this.next.read()
  }
}

var node1 = new ListNode(1, null)
var node2 = new ListNode(2, node1)
var node3 = new ListNode(3, node2)
var node4 = new ListNode(4, node3)
var node5 = new ListNode(5, node4)

console.log('反转前：')
node5.read()
reverseList(node5)
console.log('反转后：')
node1.read()