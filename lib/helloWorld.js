exports = module.exports = {};
/* function define */
exports.a = a;
exports.showmsg = showmsg;
exports.setmsg = setmsg;

/* global*/
var gmsg = "Not set";

function showmsg(){
    console.log(gmsg); 
};

function setmsg(str){
    gmsg = str;
    console.log("your set msg to :" + str);
};

function a()
{
    console.log("hello world");
}
