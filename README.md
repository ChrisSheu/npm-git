## dir_watchdog

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JCT98Z2B5WMM8 "Donate once-off to this project using Paypal")
![npm version](https://img.shields.io/badge/npm-1.4.28-red.svg)
![fs version](https://img.shields.io/badge/fs-0.0.2-lightgray.svg)
![array-difference version](https://img.shields.io/badge/array--difference-0.0.1-yellow.svg)
![readdirp version](https://img.shields.io/badge/readdirp-1.3.0-green.svg)


* This is a directory/folder watchdog tool.

## Overview

* [Getting Started](#getting-started)
  - install
* [Usage](#usage)
* [Result](#result)
* [License](#license)

## Getting Started
   npm install dir_watchdog

## Usage
```
var dw = require('dir_watchdog');
var option = new Object();
option.rootpath = "./myfile";             //default path : "./"
option.timer = 1000;                        //default : 2000 millionseconds detect.
dw.watchdog(option, function(ret, files, dirs)
{
  //catch event msg.
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
```
## Result
* init:
<div> 
<img src="https://github.com/ChrisSheu/npm-git/blob/dir_watchdog/docs/init.PNG?raw=true" align="left|bottom" height="150" width="600">
</div>
* create: ( hello file)
<div> 
<img src="https://github.com/ChrisSheu/npm-git/blob/dir_watchdog/docs/create.PNG?raw=true" align="left|bottom" height="150" width="600">
</div>
* delete: ( hello file)
<div> 
<img src="https://github.com/ChrisSheu/npm-git/blob/dir_watchdog/docs/delete.PNG?raw=true" align="left|bottom" height="150" width="600">
</div>
* change[rename]: ( hello -> hello_rename file)
<div> 
<img src="https://github.com/ChrisSheu/npm-git/blob/dir_watchdog/docs/change_rename.PNG?raw=true" align="left|bottom" height="150" width="600">
</div>
* change[move]:  ( ../myfile/hello_rename → ../myfile/test/hello__rename file)
<div> 
<img src="https://github.com/ChrisSheu/npm-git/blob/dir_watchdog/docs/change_move.PNG?raw=true" align="left|bottom" height="150" width="600">
</div>

## License

* SEE　[![Linence](https://img.shields.io/apm/l/vim-mode.svg)](http://www.opensource.org/licenses/MIT)

