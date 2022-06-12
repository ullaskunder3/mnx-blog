---
title: 'Sort Visualization using p5.js'
desc: 'Bubble sort can be implemented as follows:'
id: 004
date: 'May 9, 2021'
---

## Sort Visualization

This is an example of bubble sort, I'll try to upload other Visualization practical
![example](https://github.com/ullaskunder3/Algorithm-Visualization/raw/main/example.png)

## Table Of Content

- [Bubble Sort Theory](#Bubble-Sort-Theory)
- [Practical Bubble Sort Visualization](#Practical-Bubble-Sort-Visualization)
- [File Structure](#file-structure)

## Bubble Sort Theory

Bubble Sort| Runtime O(n²) average and worst case. Memort: O(1).

O(n) (Best case) This time complexity can occur if the array is **already sorted**, and that means that no swap occurred and only 1 iteration of n elements

In bubble sort, we start at the beginning of the array and swap the first two elements if the first is greater than the second. Then, we go to the next pair, and so on, continuously making sweeps of the array until it is sorted. In doing so, the smaller items slowly"bubble" up to the beginning of the list.

Bubble sort can be implemented as follows:

```Pseudocode
Bubble-sort(a)

  for i = a.length() to 1
    for j = 1 to i-1
        if a[j]>a[j+1]
            swap(a[j],a[j+1]);
        end if
```

In the case of the standard version of the bubble sort, we need to do N iterations. In each iteration, we do the comparison and we perform swapping if required. Given an array of size N, the first iteration performs (N - 1) comparisons. The second iteration performs (N - 2) comparisons. In this way, the total number of comparison will be:

(N - 1) + (N - 2) + (N - 3) + .......+ 3 + 2 + 1 = N(N - 1)/2 = O(N^2)

Take an array of numbers " 5 1 4 2 8", and sort the array from lowest number to greatest number using bubble sort. In each step, elements written in **bold** are being compared. Three passes will be required

- **First Pass**

  - ( **5** **1** 4 2 8 ) → ( 1 5 4 2 8 ),
  - Here, algorithm compares the first two elements, and swaps since 5 > 1.
  - ( 1 **5** **4** 2 8 ) → ( 1 4 5 2 8 ), Swap since 5 > 4.
  - ( 1 4 **5** **2** 8 ) → ( 1 4 2 5 8 ), Swap since 5 > 2.
  - ( 1 4 2 **5** **8** ) → ( 1 4 2 5 8 ),
  - Now, since these elements are already in order (8 > 5), algorithm does not swap them.

- **Second Pass**

  - ( 1 4 2 5 8 ) → ( 1 4 2 5 8 )
  - ( 1 **4** **2** 5 8 ) → ( 1 2 4 5 8 ), Swap since 4 > 2.
  - ( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
  - ( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
  - Now, the array is already sorted, but the algorithm does not know if it is completed.

*The algorithm needs one additional whole pass without any swap to know it is sorted.*

- **Third Pass**
  - ( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
  - ( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
  - ( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
  - ( 1 2 4 5 8 ) → ( 1 2 4 5 8 )

## Practical Bubble Sort Visualization

All you need is a Vs code(Visual studio code) or any other editor or IDE

I'm using p5.js javascript library which is used for creative coding, Visualization, etc...\

## file structure

```file
Algorithm-Visualization:.
├── libraries
│    └──p5.min.js
│
├── style.css
├── script.js
├── jsconfig.json (not required if you dont use vs code p5 extension)
└── index.html

```

You can install p5 extension in vs code and run with live server extension

 OR

You just have to link the p5.min.js from [cdnjs](https://cdnjs.com/libraries/p5.js) in you script that's it!!!

Example
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.min.js">
</script>
```

Basic of p5.js

- `setup()`:\
 It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts

- `random()`\
Name itself define it's generate random floating point number between ranges given as the parameter

- `noise()`\
noise() cannot be called without parameter
if called it will return NaN.

The range is between 0 and 1
noise will always return floating point value
will not exced greater than 1
it will always cluster around 0.5
they dont have uniform distribution