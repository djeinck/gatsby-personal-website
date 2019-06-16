---
title: "Data Structures"
cover: "data-structure.jpg"
date: "2019-06-15"
category: "tech interview"
tags:
    - Array
    - ArrayList
    - HashTable
    - Tree
    - Graph
---

## Array
Dynamically allocated array => ArrayList in java.
- Amertized constant time adding and deleting

## Linked Lists
- Doubly and singly

## Stack
last in first out (LIFO)

## Queue
first in first out (FIFO)

## Heap
largest or smallest number on top, used in implementing priority queues
- Building a heap is O(n)
- supports insert(), delete() and extractmax(), decreaseKey() operations in O(logn) time.
- Binomoial Heap and Fibonacci Heap are variations of Binary Heap. These variations perform union also in O(logn) time which is a O(n) operation in Binary Heap
- Implemented as an array Arr[0] being the root
    - Arr[(i-1)/2] Returns the parent node.
Arr[(2*i)+1] Returns the left child node.
Arr[(2*i)+2] Returns the right child node.
- Heapify (percolate down / bubble up) swapping out of place node with child or parent until heap is good

## ** HashTable **
Arguably the most powerfull data structure of all time!!

## Graph / Tree
BFS and DFS are really important! (aka breath first search and depth first search)
### Graph
- a set of edges and nodes
- the edges can have properties like direction and weight
- different ways to represent the graph
    - Objects and pointers - This approach is commonly used for object oriented implementations, since it is more readable and convenient for object oriented users
    - Matrix - This requires O(N^2) space complexity. This is rather inefficient when the graph is sparse. O(1) time to check the distance between two connected nodes. 
        -int[][] adjacencyMatrix = new int[SIZE][SIZE]; // SIZE is the number of vertices
    - Adjacency list – store adjacent nodes in a list, maximum space usage is always smaller than N^2. Need to loop through the list to see if nodes are connected
        - HashMap<Vertex, List<Vertex>>

#### Common algos
- BFS / DFS
- Dijkstra
- A*
- Topological sort
- Minimum spanning tree
- Max flow
- Union find

### Tree
A tree is just a graph with no cycles
- binary
- trie
- balancing (AVL or Red Black)

