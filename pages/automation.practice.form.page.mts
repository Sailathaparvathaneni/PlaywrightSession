
import { Locator, Page } from '@playwright/test'
import { PlaywrightUtils } from './utils.mts'

export class AutomationPracticeFormPage extends PlaywrightUtils{
    private readonly fNameEle
    private readonly lNameEle
    private readonly eMailEle
    private readonly genderMaleEle
    private readonly MobileNumberEle
    private readonly DOBEle
    private readonly yearEle
    private readonly monthEle
    //private readonly dateEle
    private readonly subjectEle
    //private readonly subjectvalueEle
    private readonly allHobbiesEles
    private readonly chooseBtnEle
    private readonly currentaddressEle
    private readonly stateEle
    private readonly cityEle
    private readonly submitEle
    private readonly pageName = 'https://demoqa.com/automation-practice-form'

    constructor(page: Page){
         super(page)
         this.fNameEle = page.getByPlaceholder('First Name')
         this.lNameEle = page.getByPlaceholder('Last Name')
         this.eMailEle = page.getByPlaceholder('name@example.com')
         this.genderMaleEle = page.locator('//label[@for =\'gender-radio-1\']')
         this.MobileNumberEle = page.getByPlaceholder('Mobile Number')
         this.DOBEle = page.locator('//input[@id = \'dateOfBirthInput\']')
         this.yearEle = page.locator('//select[contains(@class, \'__year-select\')]')
         this.monthEle = page.locator('//select[contains(@class,\'__month-select\')]')
         this.subjectEle = page.locator('//div[contains(@class, \'subjects-auto-complete__value-container\')]')
         this.allHobbiesEles = page.locator('//label[contains(@for, \'hobbies-checkbox-\')]')
         this.chooseBtnEle = page.locator('//label[@for = \'uploadPicture\']')
         this.currentaddressEle = page.getByPlaceholder('Current Address')
         this.stateEle = page.getByText('Select State')
         this.cityEle = page.getByText('Select City')
         this.submitEle = page.getByRole('button', {name: 'Submit'})

    }

    public async navigate(){
        await this.page.goto(this.pageName, { waitUntil: 'domcontentloaded'})
    }
    
    public async enterFirstName(fristNameValue: string){
        await this.fNameEle.fill(fristNameValue)
    }

    public async enterLastName(lastNameValue: string){
        await this.lNameEle.fill(lastNameValue)
    }

    public async enterEmail(emailValue: string){
        await this.eMailEle.fill(emailValue)
    }

    public async clickGenderMale(){
        await this.genderMaleEle.click()
    }

    public async enterMobileNumber(mobileNumberValue: string){
        await this.MobileNumberEle.fill(mobileNumberValue)
    }

    public async clickDOB(){
        await this.DOBEle.click()
    }

    public async selectAllHobbies(){
        const allHobbiesEles = this.allHobbiesEles.all()
        for(const hobbyEle of await allHobbiesEles){
            await hobbyEle.click()
        }
    }

    public async uploadFile(uploadFile: string){
        await this.chooseBtnEle.setInputFiles(uploadFile)
    }

    public async enterCurrentAddress(addressValue: string){
        await this.currentaddressEle.fill(addressValue)
    }

    public async selectState(stateValue: string){
        await this.selectDivDropDown(this.stateEle, stateValue)
    }
    
    public async selectCity(cityValue: string){
        await this.selectDivDropDown(this.cityEle, cityValue)
    }

    public async clickSubmit(){
        await this.submitEle.click()

    }

    public async selectDOB(yearValue: number, monthValue: string, dateValue: number){
        await this.datePicker(this.DOBEle, this.yearEle, yearValue, this.monthEle, monthValue, dateValue)
    }
}