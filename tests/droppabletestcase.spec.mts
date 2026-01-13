import { test, expect } from '@playwright/test'
import { DroppablePage } from '../pages/droppable.page.mts'

test.describe("Verify the dragdrop functionality in demoQA", () => {

    test("Drag Me to Drop Here test case", async({page}) => {
        const ap = new DroppablePage(page)

        await ap.navigateTO()
        await ap.dragDragMeEleToDropHereEle()
    })
})