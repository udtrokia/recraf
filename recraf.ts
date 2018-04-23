// refile

let refile: any = (target: string[] | string, dir: string, files: string[]) => {
	let _dirs: any = [];
	let _files: any = [];
	target? target: target = process.cwd();
	files? _files = files: _files;
	
	if(typeof target === "string") {
		if(/^[^\.]*\.\w*/.test(target)){return target;} else {
			(_dirs = require("fs").readdirSync(target)) && refile(_dirs, target, _files);
		}
	}else{
		target.map((i:string)=>{
			!(/^node_modules$|^\./.test(i))
			&& refile(dir + "/" + i, i, _files)
			&& _files.push(refile(dir + "/" + i, i, _files));
		})
	}
	return files === undefined? _files: false;
}

//list
let list: any = (regExp: string): string[] | false => refile().map(
	(file: string): string | false => {
		return new RegExp(regExp).test(file) && file
	});

module.exports = refile;
module.exports.list = list;
