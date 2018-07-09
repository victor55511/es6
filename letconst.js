/*jslint node: true */
"use strict";


/*
    1、let定义的变量，只在定义所在的代码块中有效。很适合用于for循环中。
    2、经典的for循环例子，要注意的是循环变量是个父作用域，循环体内是子作用域。
    3、不存在变量提升，也就是说，必须先声明再使用。
    4、暂时性死区TDZ，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
    5、不允许重复声明，
    6、块级作用域，三条规则：
        -允许在块级作用域内声明函数。
        -函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
        -同时，函数声明还会提升到所在的块级作用域的头部。
    7、const，本质：const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。

*/
const a = ["aaa"];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错