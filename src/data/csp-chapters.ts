/**
 * CSP-J/S 初赛知识点章节数据
 *
 * 后续可在此文件中添加/修改章节，每个章节包含:
 *   - id: 章节编号（用于 URL 路径）
 *   - title: 章节标题
 *   - knowledge: 知识点描述
 *   - practice: 练习描述
 *   - icon: emoji 图标
 *   - color: 主题色 (Tailwind 类前缀)
 */

export interface CspChapter {
  id: string;
  title: string;
  knowledge: string;
  practice: string;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'cyan' | 'amber' | 'indigo';
  /** 所属组别：J = CSP-J 入门级（普及组），S = CSP-S 提高级（提高组） */
  group: 'J' | 'S';
}

export const CSP_CHAPTERS: CspChapter[] = [
  {
    id: '1',
    title: '计算机与网络基础知识',
    knowledge: '计算机发展史、硬件组成、操作系统基础、网络协议与互联网应用',
    practice: '计算机常识、进制转换、存储单位、网络协议等选择题练习',
    icon: '💻',
    color: 'blue',
    group: 'J',
  },
  {
    id: '2',
    title: '算法知识',
    knowledge: '算法的概念、时间/空间复杂度、常用算法思想（枚举、模拟、递推、递归）',
    practice: '复杂度分析、基础算法应用题目',
    icon: '🧮',
    color: 'green',
    group: 'J',
  },
  {
    id: '3',
    title: '栈和队列',
    knowledge: '栈与队列的基本概念、LIFO/FIFO 特性、常见操作与典型应用场景',
    practice: '栈/队列基础操作题、应用场景分析题',
    icon: '📚',
    color: 'purple',
    group: 'J',
  },
  {
    id: '4',
    title: '链表及链式栈、链式队列',
    knowledge: '链表的结构与操作、单/双链表、链式栈与链式队列的实现',
    practice: '链表遍历、插入删除、链式结构应用题',
    icon: '🔗',
    color: 'orange',
    group: 'J',
  },
  {
    id: '5',
    title: '树和二叉树',
    knowledge: '树的基本概念、二叉树的遍历（前序/中序/后序/层序）、特殊二叉树',
    practice: '二叉树遍历题、树的性质计算题',
    icon: '🌳',
    color: 'pink',
    group: 'J',
  },
  {
    id: '6',
    title: '图',
    knowledge: '图的基本概念、存储方式（邻接矩阵/邻接表）、遍历（DFS/BFS）',
    practice: '图的存储、遍历、最短路径基础题',
    icon: '🕸️',
    color: 'cyan',
    group: 'J',
  },
  {
    id: '7',
    title: '排列组合',
    knowledge: '加法/乘法原理、排列与组合、容斥原理、常见计数模型',
    practice: '排列组合计算、计数原理应用题',
    icon: '🎲',
    color: 'amber',
    group: 'J',
  },
  {
    id: '8',
    title: '逻辑',
    knowledge: '命题逻辑、逻辑运算（与/或/非）、真值表、逻辑推理',
    practice: '命题判断、逻辑运算、真值表绘制题',
    icon: '🧠',
    color: 'indigo',
    group: 'J',
  },
  {
    id: '9',
    title: 'Linux 编程环境',
    knowledge: 'Linux 终端常用命令、Vim 编辑器、g++ 编译选项、time 计时、GDB 调试工具',
    practice: '历年 CSP-S / NOIP 初赛 Linux 环境真题演练',
    icon: '🐧',
    color: 'orange',
    group: 'S',
  },
  {
    id: '10',
    title: '最小生成树',
    knowledge: '生成树与最小生成树概念、Kruskal（加边法）、Prim（加点法）、两种算法的复杂度与适用场景',
    practice: 'Kruskal / Prim 构造最小生成树真题演练',
    icon: '🌲',
    color: 'green',
    group: 'S',
  },
  {
    id: '11',
    title: 'Hash 散列表',
    knowledge: '散列函数（直接定址/除留余数）、冲突处理（开放地址法/链地址法）、ASL 分析与装填因子',
    practice: '历年 CSP-S 哈希表真题演练（线性探查、ASL 计算、函数选择）',
    icon: '🔑',
    color: 'purple',
    group: 'S',
  },
  {
    id: '12',
    title: '欧拉图与一笔画',
    knowledge: '欧拉通路/欧拉回路、无向图与有向图充要条件、奇度点判定、Fleury 与 Hierholzer 算法',
    practice: '一笔画判断、最少笔画数计算、欧拉图概念辨析与建模应用题',
    icon: '✏️',
    color: 'cyan',
    group: 'S',
  },
  {
    id: '13',
    title: 'Master 定理',
    knowledge: '分治递归式 T(n)=aT(n/b)+O(n^c) 三种情况的复杂度判定、递归树推导、带 log 因子的扩展形式',
    practice: 'Master 定理三种情况判定练习、递归式复杂度计算与历年真题演练',
    icon: '📐',
    color: 'blue',
    group: 'S',
  },
];

export function getChapterById(id: string): CspChapter | undefined {
  return CSP_CHAPTERS.find((c) => c.id === id);
}

/** 按组别获取章节（J = 普及组，S = 提高组） */
export function getChaptersByGroup(group: 'J' | 'S'): CspChapter[] {
  return CSP_CHAPTERS.filter((c) => c.group === group);
}
