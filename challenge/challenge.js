var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"
text = text.split("$").join(" ");
console.log(text);


var text = "i am a web developer"
console.log(text);
const text1 = text.charAt(0).toUpperCase()+text.substring(1);
console.log(text1)

var fname = prompt ("Please type your name!");
var user = prompt ("Admin or User");
Check = prompt('Geben Sie Ihr Passwort für diese Seite ein', '');
if (Check == 'codefactory') {
  alert('Correct password');
} else {
  alert('Please try again');
}
alert("welcome "+fname+", you have an "+user+" account." );
