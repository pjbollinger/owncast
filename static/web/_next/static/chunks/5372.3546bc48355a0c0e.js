"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5372],{95372:function(e,t,r){r.r(t),r.d(t,{haskell:function(){return g}});var n=/[a-z_]/,a=/[A-Z]/,i=/\d/,o=/[0-9A-Fa-f]/,l=/[0-7]/,u=/[a-z_A-Z0-9'\xa1-\uffff]/,s=/[-!#$%&*+.\/<=>?@\\^|~:]/,f=/[(),;[\]`{}]/,c=/[ \t\v\f]/;function d(e,t){if(e.eatWhile(c))return null;var r=e.next();if(f.test(r)){if("{"==r&&e.eat("-")){var h,p="comment";return e.eat("#")&&(p="meta"),t(h=function e(t,r){return 0==r?d:function(n,a){for(var i=r;!n.eol();){var o=n.next();if("{"==o&&n.eat("-"))++i;else if("-"==o&&n.eat("}")&&0==--i)return a(d),t}return a(e(t,i)),t}}(p,1)),h(e,t)}return null}if("'"==r)return(e.eat("\\"),e.next(),e.eat("'"))?"string":"error";if('"'==r)return t(m),m(e,t);if(a.test(r))return(e.eatWhile(u),e.eat("."))?"qualifier":"type";if(n.test(r))return e.eatWhile(u),"variable";if(i.test(r)){if("0"==r){if(e.eat(/[xX]/))return e.eatWhile(o),"integer";if(e.eat(/[oO]/))return e.eatWhile(l),"number"}e.eatWhile(i);var p="number";return e.match(/^\.\d+/)&&(p="number"),e.eat(/[eE]/)&&(p="number",e.eat(/[-+]/),e.eatWhile(i)),p}return"."==r&&e.eat(".")?"keyword":s.test(r)?"-"==r&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(s))?(e.skipToEnd(),"comment"):(e.eatWhile(s),"variable"):"error"}function m(e,t){for(;!e.eol();){var r=e.next();if('"'==r)return t(d),"string";if("\\"==r){if(e.eol()||e.eat(c))return t(h),"string";e.eat("&")||e.next()}}return t(d),"error"}function h(e,t){return e.eat("\\")?(t(m),m(e,t)):(e.next(),t(d),"error")}var p=function(){var e={};function t(t){return function(){for(var r=0;r<arguments.length;r++)e[arguments[r]]=t}}return t("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),t("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),t("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),t("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),t("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3"),e}();let g={name:"haskell",startState:function(){return{f:d}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,function(e){t.f=e}),n=e.current();return p.hasOwnProperty(n)?p[n]:r},languageData:{commentTokens:{line:"--",block:{open:"{-",close:"-}"}}}}}}]);