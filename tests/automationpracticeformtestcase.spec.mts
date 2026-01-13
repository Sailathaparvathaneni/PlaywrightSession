
import { test, expect } from '@playwright/test'
import { AutomationPracticeFormPage } from '../pages/automation.practice.form.page.mts'
import formfillData from '../test Data/automation.practice.form.testdata.json' with { type: 'json'}

test.describe('Automate automation practice form test cases ', () => {

  for(const data of formfillData){
    test(`Submit the Student form ${data.testData}`, async ({ page }) => {
        const fillFormPage = new AutomationPracticeFormPage(page)
        //const data = formfillData

        await fillFormPage.navigate()
        await fillFormPage.enterFirstName(data.firstname)
        await fillFormPage.enterLastName(data.lastname)
        await fillFormPage.enterEmail(data.email)
        await fillFormPage.clickGenderMale()
        await fillFormPage.enterMobileNumber(data.phonenumber)
        await fillFormPage.selectDOB(data.year, data.month, data.date)
        await fillFormPage.selectAllHobbies()
        await fillFormPage.uploadFile(data.filepath)
        await fillFormPage.enterCurrentAddress(data.currentaddress)
        await fillFormPage.selectState(data.state)
        await fillFormPage.selectCity(data.city)
        await fillFormPage.clickSubmit()
    })
  }  
    
})