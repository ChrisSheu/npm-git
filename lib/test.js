/*  //this for local var.     //this for require.
 *  exports                   module.exports
 *     |                      |
 *      \                    /
 *       \                  /
 *        {      object     }
 *
 *
 */
//following line, if [exports] would be removed, exports.a & exports.b will error that their parent(exports) is NULL point.
exports = module.exports = {};
exports.test = test;
exports.a = a;
exports.b = b;


function test()
{
    console.log("this is a test")
};

function a()
{
    console.log("this is a")
}


function b()
{
    console.log("this is b")
}
