// IIFE --> Immediately invoked function expression
 (function(){
    function Start(){
        console.log("App Started");
        //Look into event, when done loading browser, start this function
    }  
    window.addEventListener("load", Start);
 })();