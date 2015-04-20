var h = require('./index.js');

function gethello()
{

   h.hello.a();  // hello world.
   h.test.test();
   h.hello.showmsg();
   h.hello.setmsg('[test] hello world');
   h.hello.showmsg();
}

gethello();
