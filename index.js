const Node = (value = null, ownID = null, nextID = null) => {
  return { value, ownID, nextID };
};

const LinkedList = () => {
  let headID = null;
  let lastUsedID = null;
  let nodes = [];

  const append = (nodeVal) => {
    // First node on the list
    if (headID == null) {
      const node = Node(nodeVal, 0);
      nodes.push(node);
      lastUsedID = 0;
      headID = 0;
    }
    // Otherwise, iterate the list until the end
    else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        currentID = nodes[currentID].nextID;
      }
      // Once last noce reached, insert the new right after it.
      const node = Node(nodeVal, lastUsedID + 1);
      nodes.push(node);
      // update used IDs counter
      lastUsedID = node.ownID;
      // Modify the nexID value of previous last node
      nodes[currentID].nextID = node.ownID;
    }
    console.log(nodes);
  };

  const prepend = (nodeVal) => {
    // First node on the list
    if (headID == null) {
      const node = Node(nodeVal, 0);
      nodes.push(node);
      lastUsedID = 0;
      headID = 0;
    } else {
      const node = Node(nodeVal, lastUsedID + 1);
      node.nextID = headID;
      nodes.push(node);
      // update used IDs counter
      lastUsedID = node.ownID;
      // This node becomes the new head node
      headID = node.ownID;
    }
    console.log(nodes);
  };

  return { append, prepend };
};

const myLinkedList = LinkedList();

myLinkedList.append("hola");
myLinkedList.append("Pola");
myLinkedList.append("Bola");
myLinkedList.prepend("mola");
