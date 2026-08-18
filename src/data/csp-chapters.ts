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
}

export const CSP_CHAPTERS: CspChapter[] = [
  {
    id: '1',
    title: '计算机与网络基础知识',
    knowledge: '计算机发展史、硬件组成、操作系统基础、网络协议与互联网应用',
    practice: '计算机常识、进制转换、存储单位、网络协议等选择题练习',
    icon: '💻',
    color: 'blue',
  },
  {
    id: '2',
    title: '算法知识',
    knowledge: '算法的概念、时间/空间复杂度、常用算法思想（枚举、模拟、递推、递归）',
    practice: '复杂度分析、基础算法应用题目',
    icon: '🧮',
    color: 'green',
  },
  {
    id: '3',
    title: '栈和队列',
    knowledge: '栈与队列的基本概念、LIFO/FIFO 特性、常见操作与典型应用场景',
    practice: '栈/队列基础操作题、应用场景分析题',
    icon: '📚',
    color: 'purple',
  },
  {
    id: '4',
    title: '链表及链式栈、链式队列',
    knowledge: '链表的结构与操作、单/双链表、链式栈与链式队列的实现',
    practice: '链表遍历、插入删除、链式结构应用题',
    icon: '🔗',
    color: 'orange',
  },
  {
    id: '5',
    title: '树和二叉树',
    knowledge: '树的基本概念、二叉树的遍历（前序/中序/后序/层序）、特殊二叉树',
    practice: '二叉树遍历题、树的性质计算题',
    icon: '🌳',
    color: 'pink',
  },
  {
    id: '6',
    title: '图',
    knowledge: '图的基本概念、存储方式（邻接矩阵/邻接表）、遍历（DFS/BFS）',
    practice: '图的存储、遍历、最短路径基础题',
    icon: '🕸️',
    color: 'cyan',
  },
  {
    id: '7',
    title: '排列组合',
    knowledge: '加法/乘法原理、排列与组合、容斥原理、常见计数模型',
    practice: '排列组合计算、计数原理应用题',
    icon: '🎲',
    color: 'amber',
  },
  {
    id: '8',
    title: '逻辑',
    knowledge: '命题逻辑、逻辑运算（与/或/非）、真值表、逻辑推理',
    practice: '命题判断、逻辑运算、真值表绘制题',
    icon: '🧠',
    color: 'indigo',
  },
];

export function getChapterById(id: string): CspChapter | undefined {
  return CSP_CHAPTERS.find((c) => c.id === id);
}
