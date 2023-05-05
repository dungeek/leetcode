/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

function isValid(s: string): boolean {
     const parentheses = '(){}[]';
     for(let i = 0; i < parentheses.length; i++){
        if(!parentheses.includes(s[i])){
            return false;
        }
     }

     for (let i = 1; i < s.length; i = i+2) {
         if(s[0] === parentheses[i]){
            return false;
         };

         let open = s[i-1];

         let close = s[i];
     }
     return true;
};



function ditMeMay(str: string): boolean {
    const stack = [] as string[];
    const openParentheses = '([{';
    for (const ch of str) {
        if (openParentheses.includes(ch)) {
            stack.push(ch);
        } else {
            const top = stack.pop();
            const invalid = false
                || (ch === ')' && top !== '(')
                || (ch === ']' && top !== '[')
                || (ch === '}' && top !== '{');
            if (invalid) {
                return false;
            }
        }
    }
    return !stack.length;
}