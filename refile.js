// refile
var refile = (target, dir, files) => {
	var [_dirs, _files] = [[],[]];
	target? target: target = process.cwd();
	files?_files = files: _files;
	
	if(typeof target === "string"){
		if(/^[^\.]*\.\w*/.test(target)){return target;} else {
			(_dirs = require("fs").readdirSync(target)) && refile(_dirs, target, _files);
		}
	}else{
		target.map((i)=>{
			!(/^node_modules$|^\./.test(i))
			&& refile(dir + "/" + i, i, _files)
			&& _files.push(refile(dir + "/" + i, i, _files));
		})
	}
	return files === undefined? _files: false;
};

//list
var list = regExp => refile().map((file) => {return new RegExp(regExp).test(file) && file});

module.exports = refile;
module.exports.list = list;
