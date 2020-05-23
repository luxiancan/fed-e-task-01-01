/**
 * 特殊类型
 * 
 * @flow
 */


// 字面量类型

const a: 'foo' = 'foo';

const type: 'success' | 'warning' | 'danger' = 'success';

type StringOrNumber = string | number;

const b: StringOrNumber = 'string'; // 100


// maybe 类型

const gender: ?number = undefined;

const bar: number | null | void = undefined;