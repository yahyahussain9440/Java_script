let
 text = 
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
;
// Accessing Characters

let
 firstChar = text.charAt(
0
);  
// Returns "A"

let
 secondChar = text[1];  
// Returns "B"

let
 lastChar = text.charAt(text.length - 
1
);  
// Returns "Z"

// Modifying Strings

// Strings are read-only, so direct modification like below will not work

// text[0] = 'a';  // This operation will not change the string

// Character Codes

let
 charCodeA = text.charCodeAt(
0
);  
// Returns 65, the ASCII code for "A"

// Substring Operations

let
 slicedText = text.slice(-
7
, -
1
);  
// Returns "TUVWXY"

let
 subStringText = text.substring(
0
, 
4
);  
// Returns "ABCD"

let
 substrText = text.substr(
5
, 
3
);  
// Returns "FGH"

// Case Conversion

let
 upperCaseText = text.toUpperCase();  
// Returns "ABCDEFGHIJKLMNOPQRSTUVWXYZ" in uppercase

let
 lowerCaseText = text.toLowerCase();  
// Returns "abcdefghijklmnopqrstuvwxyz" in lowercase

// Concatenation

let
 concatenatedText = 
"Hello"
 + 
" "
 + 
"World!"
;  
// Returns "Hello World!"

let
 concatText = "Hello".concat(" ", "World!");  
// Returns "Hello World!"

// Trimming

let
 trimmedText = 
"  Hello  "
.trim();  
// Returns "Hello"

// Replacing

let
 originalText = 
"Please visit Microsoft!"
;
let
 replacedText = originalText.replace(
/MICROSOFT/i
, 
"W3Schools"
);  
// Returns "Please visit W3Schools!"

// Splitting

let
 splitText = 
"apple,banana,orange"
.split(",");  
console.log(splitText);
// Returns ["apple", "banana", "orange"]