
import {Page, Locator} from '@playwright/test'

export class PlaywrightUtils{
    public readonly page: Page

    constructor(page: Page){
       this.page = page
    }

    public async datePicker(dateFieldEle: Locator, yearEle: Locator, yearValue: number, monthEle: Locator, monthValue: string, dateValue: number){
       await dateFieldEle.click()
       await yearEle.selectOption(yearValue.toString())
       await monthEle.selectOption(monthValue)
       const dayXpath = `//div[contains(@class, 'react-datepicker__day') and text()='${dateValue}' and not (contains(@class, 'outside-month'))]`
       await this.page.locator(dayXpath).click()
    }

    public async selectDivDropDown(DropdownEle: Locator, DropdownEleValue: string){
        await DropdownEle.click()
        await this.page.getByText((DropdownEleValue), { exact: true }).click()
    }
}






