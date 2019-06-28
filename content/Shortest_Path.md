---
title: "Shortest Path"
cover: "algorithm.jpg"
date: "2019-06-15"
category: "tech interview"
tags:
    - Algorithms
    - Dijkstra
    - A*
    - Graph
---

# Sorting

Sorting: Know how to sort.  Don't do bubble-sort.  You should know the details of at least one n*log(n) sorting algorithm, preferably two (say, quicksort and merge sort).  Merge sort can be highly useful in situations where quicksort is impractical, so take a look at it.  

Merge sort – divide and conquer, 
•	O(nlogn) time, O(n) extra space, 
•	not in-place sorting. 
•	Split the array into 2, call merge sort on both halves, merge the halves together. 
•	Better for linked lists because we can insert into the middle in O(1) time and space
Pseudo code
mergesort( var a as array )
   if ( n == 1 ) return a

   var l1 as array = a[0] ... a[n/2]
   var l2 as array = a[n/2+1] ... a[n]

   l1 = mergesort( l1 )
   l2 = mergesort( l2 )

   return merge( l1, l2 )

merge( var a as array, var b as array )
   var c as array
   while ( a and b have elements )
      if ( a[0] > b[0] )
         add b[0] to the end of c
         remove b[0] from b
      else
         add a[0] to the end of c
         remove a[0] from a
   
   while ( a has elements )
      add a[0] to the end of c
      remove a[0] from a
   
   while ( b has elements )
      add b[0] to the end of c
      remove b[0] from b
   
   return c

Quicksort – divide and conquer
•	O(nlogn) time (O(n^2) in the worst case), 
•	in-place sorting. 
•	Pick a pivot x, put x in its correct place and everything smaller to the left and everything bigger to the right. Then call quicksort on the array before x and array after x. 
•	Better for arrays because of the contiguous memory.
Pseudo code
/* low  --> Starting index,  high  --> Ending index */
quickSort(arr[], low, high)
{
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is now
           at right place */
        pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}
partition (arr[], low, high)
{
    // pivot (Element to be placed at right position)
    pivot = arr[high];  
 
    i = (low - 1)  // Index of smaller element

    for (j = low; j <= high- 1; j++)
    {
        // If current element is smaller than or
        // equal to pivot
        if (arr[j] <= pivot)
        {
            i++;    // increment index of smaller element
            swap arr[i] and arr[j]
        }
    }
    swap arr[i + 1] and arr[high])
    return (i + 1)
}
