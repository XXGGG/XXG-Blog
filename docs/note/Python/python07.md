---
title: 🐍『Python06 - 函数』🐍
---

## Python内置函数

- abs() 求绝对值
```py
>>> abs(-20)
20
```

- max() 求最大值
```py
>>> max(2, 3, 1, -5)
3
```

###  数据类型转换

- int 把其他类型转换成 整数类型
- float 把其他类型转换成 浮点类型（有小数点）
- str 整数类型转换成 字符串类型
- bool 其他类型转换成 布尔类型
```py
>>> int('123')
123
# 注意'123'可以用int转换成123，但是'abc'是字符串不能强转成整数，会报错。

>>> float('12.34')
12.34

>>> str(1.23)
'1.23'

>>> bool(1)
True
```

## 定义函数
定义函数的时候，我们把参数的名字和位置确定下来，函数的接口定义就完成了。对于函数的调用者来说，只需要知道如何传递正确的参数，以及函数将返回什么样的值就够了，函数内部的复杂逻辑被封装起来，调用者无需了解。

用def 来定义函数
```py
def my_abs(x):
    if x > 0:
        return x
    else:
        return -x
```

### 空函数
如果想定义一个什么事也不做的空函数，可以用pass语句：
```py
def nop():
    pass
```
>pass语句什么都不做，那有什么用？实际上pass可以用来作为占位符，比如现在还没想好怎么写函数的代码，就可以先放一个pass，让代码能运行起来。

### isinstance()检查类型
```py
isinstance(x,(int,float))
# 检查x 是不是int类型 或者float 如果不是 抛出False
```

## 递归函数
在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。