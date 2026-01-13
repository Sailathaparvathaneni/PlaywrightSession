import { Page, Locator } from '@playwright/test'
import { PlaywrightUtils } from '../pages/utils.mts'

export class DroppablePage extends PlaywrightUtils{

    private readonly pageUrl = 'https://demoqa.com/droppable'
    private readonly dragMeEle
    private readonly dropHereEle

    constructor(page: Page){
        super(page)
        this.dragMeEle = page.getByText('Drag me', { exact: true })
        this.dropHereEle = page.locator('(//div[@id=\'droppable\'])[1]')
    }

    public async navigateTO(){
        await this.page.goto(this.pageUrl, { waitUntil: 'domcontentloaded'})
    }

    public async dragDragMeEleToDropHereEle(){
        await this.dragMeEle.dragTo(this.dropHereEle)
    }
}