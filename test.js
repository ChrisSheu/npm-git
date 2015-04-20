var dw = require('./index.js');

var option = new Object();
option.rootpath = "./myfile";   //default path : ./
option.timer = 1000;                        //default : 2000 millionseconds detect.

dw.watchdog(option, function(ret, files, dirs)
{
  switch(ret)
  {
      case "init":
        showlog(ret, files, dirs);
        break;
      case "create":
        showlog(ret, files, dirs);
        break;
      case "delete":
        showlog(ret, files, dirs);
        break;
      case "change":
        showlog(ret, files, dirs);
        break;
      default:
        break;
  }
});

function showlog(ret, files, dirs)
{
    console.log(ret);
    console.log("=====files=====");
    console.log(files);
    console.log("=====directories=====");
    console.log(dirs);
}
