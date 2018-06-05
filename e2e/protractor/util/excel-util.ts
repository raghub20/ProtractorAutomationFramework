import { RegistrationResource } from './../resources/registration-resource';
import { WorkSheet, utils, WorkBook, readFile } from 'xlsx';


export class ExcelUtil {

    private workBook: WorkBook;
    constructor(path: string) {
        if(path != undefined && path.length > 0) {
            this.workBook = readFile(path);
        }
    }
    public async getKeys(jsonObj): Promise<string[]> {
        let keys:string[] = new Array();
        if (jsonObj != undefined) {
            keys = Object.keys(jsonObj);
        } else {
            return await Promise.reject('json object is undefined');
        }
        return await Promise.resolve(keys);
    }


    public getJsonFromSheet(sheetName: string) {
        if(sheetName != undefined) {
            let sheet: WorkSheet = this.workBook.Sheets[sheetName];
            return utils.sheet_to_json(sheet);
        }
    } 
}