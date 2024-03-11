
console.log("hello hello");

//Javascript Timeout changes h1 title to pink after 3 seconds (goes by millisecond therefore 3000)
setTimeout(function(){
    document.querySelector("#page-title").style.color = 'hotpink';
    console.log("timeout worked!")
}, 3000)
