/* devdependies packages */
var fs   = require('fs');
var diff = require('array-difference');
var readdirp = require('readdirp');

/* module app */
exports = module.exports = {};
exports.dir_watchdog = dir_watchdog;

/* [directory watchdog]
 *
 * rootpath : start path.
 * timer    : excute every [timer] millionsecond.
 * 
 */
function dir_watchdog(option, callback){
    var dictory_cur = new Object();
    var dictory_pre = new Object();
    dictory_cur.direcs = [];
    dictory_cur.files = [];
    dictory_pre.direcs = null;
    dictory_pre.files = null;
    var rootpath = option.rootpath? option.rootpath:false;
    var timer = option.timer? option.timer:false;

    //default option.
    if(!rootpath)
        rootpath = "./";
    else
    {
        if(rootpath !== "./")
            mk_dir_path(rootpath);
    }

    if(!timer)
        timer = 2000;
    console.log("[directory_watchdog] start directory watchdog...[rootpath]:" + rootpath + " [timer]:" + timer);
    //every timer second, detect rootpath(include recursive element.)
    setInterval(get_directory_status, timer, rootpath, dictory_pre, dictory_cur, function( ret, filearray, dirarray){
        callback(ret, filearray, dirarray);
    });
}

function get_directory_status(path, pre, cur, callback){
    readdirp(
        { root: path }
        //this get single file event.
        , function(fileInfo) { 
            //console.log('fileInfo: ', fileInfo); // do something with file entry here
        } 
        // all done, move on or do final step for all file entries here
        , function (err, res) {
            //console.log('Finished, err: ', err, ' res: ', res);
            cur.direcs = extract_list_from_obj(res.directories);
            cur.files = extract_list_from_obj(res.files);

            //First get path status.
            if(pre.direcs == null && pre.files == null){

                if(callback)
                    callback("init", undefined, undefined);
            }
            //second and later, get path status.
            else{
                //create
                if((cur.direcs.length > pre.direcs.length) || (cur.files.length > pre.files.length)){

                    if(callback)
                        callback("create", diff(cur.files,pre.files), diff(cur.direcs,pre.direcs));
                }
                //delete
                else if((cur.direcs.length < pre.direcs.length) || (cur.files.length < pre.files.length)){

                    if(callback)
                        callback("delete", diff(cur.files,pre.files), diff(cur.direcs,pre.direcs));
                }
                else{
                    var filearray = diff(cur.files,pre.files);
                    var dirarray  = diff(cur.direcs,pre.direcs);

                    //if fullname is difference(files or directories), than change event. else: same event.
                    if((filearray.length == 0) && (dirarray.length == 0)){
                        //console.log("[directory_watchdog] nothing");
                        if(callback)
                            callback(false, undefined, undefined);
                    }
                    else{
                        //rename or move
                        if(callback)
                        {
                            var difffiles = new Object();
                            difffiles.cur = [];
                            difffiles.old = [];
                            var diffdirs = new Object();
                            diffdirs.cur = [];
                            diffdirs.old = [];

                            if(filearray.length > 0)
                            {
                                difffiles.cur = filearray.slice(0, (filearray.length/2));
                                difffiles.old = filearray.slice((filearray.length/2), filearray.length);
                            }
                            if(dirarray.length > 0)
                            {
                                diffdirs.cur = dirarray.slice(0, (dirarray.length/2));
                                diffdirs.old = dirarray.slice((dirarray.length/2), dirarray.length);
                            }
                            callback("change", difffiles, diffdirs);
                        }
                    }

                }

            }

            pre.direcs = cur.direcs;
            pre.files = cur.files;
        });
}

//extrac specified list from a obj.
function extract_list_from_obj(obj){
    var tmp = [];
    
    for(var i = 0; i < obj.length; i++){
        tmp.push(obj[i].fullPath);
    }
    
    return tmp;
}

//if mkpath's directory not exist, then mkdir.
function mk_dir_path(mkpath){
    if(!fs.existsSync(mkpath)){
        fs.mkdir(mkpath, function(err){
        if(err){
            console.log(err);
        }
        });
    }
}
