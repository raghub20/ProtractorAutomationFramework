import { JsonUtil } from './../util/json-util';
import { RegistrationResource } from './../resources/registration-resource';
import { ObjectRepository } from './../util/object-repository';
import { ExcelUtil } from './../util/excel-util';
import { RegistrationPage } from './../pages/registration-page';
import { browser } from 'protractor';
import { WorkBook, WorkSheet, readFile, utils } from 'xlsx';
describe('Registration page test suite', async() => {
    const registrationPage = new RegistrationPage();
    it('Verify by passing empty values in mandatory fields test case', async () => {
        readTestData();
        /* browser.manage().timeouts().implicitlyWait(10000);
        await browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register');
        try {
            await registrationPage.enterFirstName('abc');
            await registrationPage.enterLastName('xyz');
            await registrationPage.enterUsername('abcxyz');
            await registrationPage.enterPassword('Pass1234');
            await registrationPage.clickOnRegisterButton();
        } catch(error) {
            fail(error);
        }
        browser.sleep(10000); */
    });
});


async function readTestData() {
    let excelUtil = new ExcelUtil('./e2e/protractor/regression-suite/TestData.xlsx');
    let excelDataInJsonArray = excelUtil.getJsonFromSheet('Sheet1');
    let mappingJson = await JsonUtil.convertJsonFileToJsonObject('./e2e/protractor/mappings/registration-mapping.json');
    let targetedObj = ObjectRepository.getResourceObject(mappingJson['objectToCreate']);
    let data: Object[] = new Array();
    let targetedObjProperties:string[] = ObjectRepository.getPropertiesOfObject(targetedObj);
    for(let row of excelDataInJsonArray) {
        let targetedObj = ObjectRepository.getResourceObject(mappingJson['objectToCreate']);
        let excelJsonKeys = JsonUtil.getKeysFromJson(row);
        for(let excelKey of excelJsonKeys) {
            let varName = JsonUtil.getKeyFromValue(mappingJson, excelKey);
            if(targetedObjProperties.indexOf(varName) >= 0 ) {
                Reflect.set(targetedObj, varName, row[excelKey]);
            }
        }
        console.log(targetedObj);
        data.push(targetedObj);
    }
}