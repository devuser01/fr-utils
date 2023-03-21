import { v4 as uuidv4 } from 'uuid';

export default class Utils {

    static getFiles = (files:any) => {
		const filesArr = files?.split(',');
		const resultFiles:any = [];
		filesArr?.map((item:any)=>{
			const file = {};
			Object.assign(file,{"name":item,"key":uuidv4(),"url":item});
			resultFiles.push(file);
		});
		return resultFiles;
	}

}
