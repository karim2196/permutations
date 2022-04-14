# permutations
permutations problem solved using a binary tree <br />
The time complexity for this binary tree is O(2^n), being n the number of * that have to be replaced.<br />
For every node in the tree, two nodes hang (except the leafs, that is, the final nodes). The height of the tree will be n (that is  the number of * to replace).<br />
In each layer of the tree, a * of the node value is being substituted by a 0 or a 1. On the next layer (node childs), the next * value is being substituted by a 0 or a 1, and so on and so forth. This is done recursivelly untill we are in a leaf (all the * are substituted). In this moment, we know that we found one string solution and we push it.<br />

![alt text](https://github.com/karim2196/permutations/blob/main/binarytree.png)
