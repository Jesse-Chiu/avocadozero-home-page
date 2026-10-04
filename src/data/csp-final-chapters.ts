/**
 * CSP-J/S 复赛（第二轮上机测试）章节数据
 *
 * 结构与初赛保持一致，后续补充内容时：
 *   - 在此数组追加章节，group 填 'J'（入门级）、'S'（提高级）或 'both'（两组通用）
 *   - 章节 id 使用 f 前缀（如 f1、f2），内容文件放 src/data/csp-content/f1-knowledge.html
 *     避免与初赛的 1~16 号内容文件重名
 *   - 复赛内容页路由为 /csp/final/[id]/[type]
 */

import type { CspChapter } from './csp-chapters';

/** 复赛章节：group 支持 'both'，表示 J/S 两组通用 */
export interface FinalChapter extends Omit<CspChapter, 'group'> {
  group: 'J' | 'S' | 'both';
}

/** 复赛章节列表 */
export const FINAL_CHAPTERS: FinalChapter[] = [
  {
    id: 'f1',
    title: '复赛做题技巧与注意事项',
    knowledge: '考试环境与文件命名规范、高危变量名规避、爆零情况清单、竞赛基本数据常识、Windows/Linux 兼容性问题、考场流程与做题步骤',
    practice: '做题流程演练：读题 → 构建算法 → 编程 → 调错 → 离开前检查，基础模板与 freopen 规范自查',
    icon: '📋',
    color: 'indigo',
    group: 'both',
  },
  {
    id: 'f2',
    title: '输入输出（I/O）',
    knowledge: 'cin/cout 与 scanf/printf 两大模块、IO 加速、换行刷新、string 读入方案（getline/ignore/fgets/char[] 中转）、格式控制与 I/O 选型策略',
    practice: '两套 I/O 写法模板练习、string 输入坑点辨析（getline 残留回车、%c 空白符）、格式控制与选型演练',
    icon: '⌨️',
    color: 'teal',
    group: 'both',
  },
  {
    id: 'f3',
    title: '代码避坑指南',
    knowledge: 'size_t 无符号下溢、int 溢出与浮点判等、爆栈与 memset 误用、STL 容器陷阱、string::size() 与 strlen 复杂度、0x3f/0x7f 无穷大初始化',
    practice: '九大陷阱代码辨析、错误示范找 bug、memset 填充值计算与教练复赛终极叮嘱演练',
    icon: '🐞',
    color: 'rose',
    group: 'both',
  },
  {
    id: 'f4',
    title: 'Dev-C++ 使用技巧',
    knowledge: 'Dev-C++ 版本沿革、常用快捷键（文件/格式/行操作/跳转/运行/调试）、调试流程、编译选项配置（-Wall/-Ox/-std）、开大栈与定义宏等实用技巧',
    practice: '快捷键操作演练、调试流程实操、编译选项配置（开警告/开调试/开优化/换语言标准）、开大栈与 LOCAL 宏本地评测',
    icon: '🛠️',
    color: 'amber',
    group: 'both',
  },
];

/** 按组别获取复赛章节（含 'both' 通用章节） */
export function getFinalChaptersByGroup(group: 'J' | 'S'): FinalChapter[] {
  return FINAL_CHAPTERS.filter((c) => c.group === group || c.group === 'both');
}
