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
  };

  const size = () => {
    // First node on the list
    if (headID == null) {
      return 0;
    } else {
      let currentID = headID;
      // At least there is 0ne node since headID is not null
      let count = 1;
      while (!(nodes[currentID].nextID == null)) {
        currentID = nodes[currentID].nextID;
        count += 1;
      }
      // Once last node reached, return count
      return count;
    }
  };

  const head = () => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      return at(headID);
    }
  };

  const at = (inpID) => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        if (nodes[currentID].ownID == inpID) {
          return nodes[currentID];
        }
        currentID = nodes[currentID].nextID;
      }
      // If last node reached without match, error
      throw "None of the nodes on the list corresponds to this ID";
    }
  };

  const tail = () => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        currentID = nodes[currentID].nextID;
      }
      // When we reach the end of the list, return the last node
      return nodes[currentID];
    }
  };

  const pop = () => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        previousID = nodes[currentID].ownID;
        currentID = nodes[currentID].nextID;
      }
      // When we reach the end of the list, delete last node
      nodes[previousID].nextID = null;
    }
  };

  const contains = (inpVal) => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        if (nodes[currentID].value == inpVal) {
          return true;
        }
        currentID = nodes[currentID].nextID;
      }
      if (nodes[currentID].value == inpVal) {
        return true;
      } else {
        return false;
      }
    }
  };

  const find = (inpVal) => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        if (nodes[currentID].value == inpVal) {
          return nodes[currentID].ownID;
        }
        currentID = nodes[currentID].nextID;
      }
      if (nodes[currentID].value == inpVal) {
        return nodes[currentID].ownID;
      } else {
        return null;
      }
    }
  };

  const toString = () => {
    // First node on the list
    let outString = "";
    if (headID == null) {
      outString = "null";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        outString = outString.concat(`( ${nodes[currentID].value} ) -> `);
        currentID = nodes[currentID].nextID;
      }
      outString = outString.concat(`( ${nodes[currentID].value} ) -> null`);
    }
    return outString;
  };

  const insertAt = (inpVal, inpID) => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        previousID = nodes[currentID].ownID;
        currentID = nodes[currentID].nextID;
        if (currentID == inpID) {
          const node = Node(inpVal, lastUsedID + 1, inpID);
          nodes.push(node);
          lastUsedID = node.ownID;
          nodes[previousID].nextID = node.ownID;
          return;
        }
      }
      if (nodes[currentID].ownID == inpID) {
        append(inpVal);
      } else {
        throw "ID not found";
      }
    }
  };

  const removeAt = (inpID) => {
    // First node on the list
    if (headID == null) {
      throw "The list is empty";
    } else {
      let currentID = headID;
      while (!(nodes[currentID].nextID == null)) {
        previousID = nodes[currentID].ownID;
        currentID = nodes[currentID].nextID;
        if (currentID == inpID) {
          nodes[previousID].nextID = nodes[currentID].nextID;
          return;
        }
      }
      if (nodes[currentID].ownID == inpID) {
        nodes[previousID].nextID = null;
      } else {
        throw "ID not found";
      }
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    at,
    tail,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const myLinkedList = LinkedList();

myLinkedList.append("hola");
myLinkedList.append("Pola");
myLinkedList.append("Bola");
myLinkedList.append("mola");
console.log(myLinkedList.toString());
myLinkedList.insertAt("sola", 2);
console.log(myLinkedList.toString());
myLinkedList.removeAt(2);
console.log(myLinkedList.toString());
