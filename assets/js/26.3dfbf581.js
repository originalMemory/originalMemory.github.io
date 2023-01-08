(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{455:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/string-to-integer-atoi/",target:"_blank",rel:"noopener noreferrer"}},[s._v("8. 字符串转换整数 (atoi)"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。")]),s._v(" "),a("p",[s._v("函数 myAtoi(string s) 的算法如下：")]),s._v(" "),a("ul",[a("li",[s._v("读入字符串并丢弃无用的前导空格")]),s._v(" "),a("li",[s._v("检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。")]),s._v(" "),a("li",[s._v("读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。")]),s._v(" "),a("li",[s._v('将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。')]),s._v(" "),a("li",[s._v("如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。")]),s._v(" "),a("li",[s._v("返回整数作为最终结果。")])]),s._v(" "),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[s._v("本题中的空白字符只包括空格字符 ' ' 。")]),s._v(" "),a("li",[s._v("除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。")])]),s._v(" "),a("p",[s._v("示例 1：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入：s = "42"\n输出：42\n解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。\n第 1 步："42"（当前没有读入字符，因为没有前导空格）\n         ^\n第 2 步："42"（当前没有读入字符，因为这里不存在 \'-\' 或者 \'+\'）\n         ^\n第 3 步："42"（读入 "42"）\n           ^\n解析得到整数 42 。\n由于 "42" 在范围 [-231, 231 - 1] 内，最终结果为 42 。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("示例 2：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入：s = "   -42"\n输出：-42\n解释：\n第 1 步："   -42"（读入前导空格，但忽视掉）\n            ^\n第 2 步："   -42"（读入 \'-\' 字符，所以结果应该是负数）\n             ^\n第 3 步："   -42"（读入 "42"）\n               ^\n解析得到整数 -42 。\n由于 "-42" 在范围 [-231, 231 - 1] 内，最终结果为 -42 。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("示例 3：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入：s = "4193 with words"\n输出：4193\n解释：\n第 1 步："4193 with words"（当前没有读入字符，因为没有前导空格）\n         ^\n第 2 步："4193 with words"（当前没有读入字符，因为这里不存在 \'-\' 或者 \'+\'）\n         ^\n第 3 步："4193 with words"（读入 "4193"；由于下一个字符不是一个数字，所以读入停止）\n             ^\n解析得到整数 4193 。\n由于 "4193" 在范围 [-231, 231 - 1] 内，最终结果为 4193 。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("示例 4：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入：s = "words and 987"\n输出：0\n解释：\n第 1 步："words and 987"（当前没有读入字符，因为没有前导空格）\n         ^\n第 2 步："words and 987"（当前没有读入字符，因为这里不存在 \'-\' 或者 \'+\'）\n         ^\n第 3 步："words and 987"（由于当前字符 \'w\' 不是一个数字，所以读入停止）\n         ^\n解析得到整数 0 ，因为没有读入任何数字。\n由于 0 在范围 [-231, 231 - 1] 内，最终结果为 0 。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("示例 5：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入：s = "-91283472332"\n输出：-2147483648\n解释：\n第 1 步："-91283472332"（当前没有读入字符，因为没有前导空格）\n         ^\n第 2 步："-91283472332"（读入 \'-\' 字符，所以结果应该是负数）\n          ^\n第 3 步："-91283472332"（读入 "91283472332"）\n                     ^\n解析得到整数 -91283472332 。\n由于 -91283472332 小于范围 [-231, 231 - 1] 的下界，最终结果被截断为 -231 = -2147483648 。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("提示：")]),s._v(" "),a("ul",[a("li",[s._v("0 <= s.length <= 200")]),s._v(" "),a("li",[s._v("s 由英文字母（大写和小写）、数字（0-9）、' '、'+'、'-' 和 '.' 组成")])]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("p",[s._v("核心思路是自动机，根据描述可建立下图和表中的自动机：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://illusion-blog.oss-cn-beijing.aliyuncs.com/img/202111241027821.png",alt:"img"}})]),s._v(" "),a("p",[s._v("我们也可以用下面的表格来表示这个自动机：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",[s._v("''")]),s._v(" "),a("th",[s._v("+/-")]),s._v(" "),a("th",[s._v("number")]),s._v(" "),a("th",[s._v("other")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("start")]),s._v(" "),a("td",[s._v("start")]),s._v(" "),a("td",[s._v("signed")]),s._v(" "),a("td",[s._v("in_number")]),s._v(" "),a("td",[s._v("end")])]),s._v(" "),a("tr",[a("td",[s._v("signed")]),s._v(" "),a("td",[s._v("end")]),s._v(" "),a("td",[s._v("end")]),s._v(" "),a("td",[s._v("in_number")]),s._v(" "),a("td",[s._v("end")])]),s._v(" "),a("tr",[a("td",[s._v("in_number")]),s._v(" "),a("td",[s._v("end")]),s._v(" "),a("td",[s._v("end")]),s._v(" "),a("td",[s._v("in_number")]),s._v(" "),a("td",[s._v("end")])]),s._v(" "),a("tr",[a("td",[s._v("end")]),s._v(" "),a("td",[s._v("end")]),s._v(" "),a("td",[s._v("end")]),s._v(" "),a("td",[s._v("end")]),s._v(" "),a("td",[s._v("end")])])])]),s._v(" "),a("p",[s._v("由此可得代码：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" enum "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" unique"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Enum\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" _testcapi "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" INT_MAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" INT_MIN\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@unique")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("State")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Enum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    Start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    Signed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    InNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    End "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Automaton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Start\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("signed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 竖列分别对应 空格，+/-， 数字, 其他字符")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("table "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Signed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("InNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Signed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("InNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("InNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("InNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("End"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_get_col")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdigit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_get_col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("InNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" INT_MAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("signed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("INT_MIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Signed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("signed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("myAtoi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        automaton "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Automaton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            automaton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" automaton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("signed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" automaton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ans\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("ul",[a("li",[s._v("时间复杂度： "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("O")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("n")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathnormal"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),a("li",[s._v("空间复杂度： "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("O")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("h2",{attrs:{id:"感想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感想"}},[s._v("#")]),s._v(" 感想")]),s._v(" "),a("p",[s._v("最开始的想法是遍历然后循环判断的，不过这样代码就会写得比较复杂，同时容易出现边界条件问题。看了官方的解法才意识到了还有自动机的写法，的确是好用多了。")]),s._v(" "),a("p",[s._v("另外还看到有人用正则解来着，也是种解法，就是感觉不太应该用在算法的答案里。")])])}),[],!1,null,null,null);t.default=e.exports}}]);