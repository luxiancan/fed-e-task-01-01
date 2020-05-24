// 类型声明 declare

import { camelCase } from 'lodash';
import qs from 'query-string';

// declare function camelCase (input: string): string;

const res = camelCase('hello typed');

qs.parse('?key=value&key2=value2');

export {} // 确保跟其他示例没有成员冲突