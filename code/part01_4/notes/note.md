

### 显示中文错误提示
输入命令
yarn tsc --locale zh-CN

VSCode设置选项
settings => typescript locale => zh-CN


### 枚举
枚举的键不赋值的话，默认从 0 开始递增
双向键值对，可以通过键获取值，也可以通过值获取键
```javascript
enum PostStatus {
    Draft,
    Unpublished,
    Published
}
```

如果确认代码中不会使用索引器访问枚举，建议使用常量枚举 const

```javascript
const enum PostStatus {
    Draft,
    Unpublished,
    Published
}
```

### 接口

可以理解为一种规范/契约
一句话总结：接口就是用来约束对象的结构

只读成员：初始化完成之后就不允许修改了


### 类
用来描述一类具体对象的抽象成员

类的访问修饰符，可以控制类的成员的可访问级别
- public : 共有的，默认值
- private : 私有的，只能在当前类的内部访问
- protected : 受保护的，只能在当前类的内部和子类访问
- readonly : 只读属性

抽象类
abstract 关键字，本身不能执行 new 去创建实例，只能让子类去继承


### 泛型

以函数为例，泛型就是在声明某个函数时不指定具体的类型，在调用时再传递具体的类型
就是，把我们定义时不能明确的类型，变成一个参数，让我们在使用时再传递这个类型参数