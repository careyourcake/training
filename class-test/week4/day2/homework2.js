/* 对下面的数组进行重整，输出一个新的数组
[
    {id: 1, name: '张三'},
    {id: 2, name: '李四'},
    {id: 3, name: '王五'},
    {id: 4, name: '赵六'},
]
新的数组为:
[
    {1: '张三'},
    {2: '李四'},
    {3: '王五'},
    {4: '赵六'},
] */
const Array1 = [
    {id: 1, name: '张三'},
    {id: 2, name: '李四'},
    {id: 3, name: '王五'},
    {id: 4, name: '赵六'},
];

for (const item of Array1) {
    console.log(`${item.id}: '${item.name}'`);//模板字面量
}
