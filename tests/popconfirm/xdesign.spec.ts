import { expect, test } from '@playwright/test'

test.describe('popconfirm组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API基本用法通过 title 设置标题内容，' }).nth(3)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const pop = demo.getByRole('button', { name: '悬浮我提示' })
    await pop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })

  test('触发方式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#trigger')
    const demo = page.locator('#trigger .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API触发方式通过 trigger' }).nth(3)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('trigger.png')

    // hover时截图
    const hoverPop = demo.getByRole('button', { name: '鼠标悬停显示' })
    await hoverPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('trigger-hover.png')
    page.getByRole('button', { name: '确定' }).click()

    // click时截图
    const clickPop = demo.getByRole('button', { name: '点击显示' })
    await clickPop.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('trigger-click.png')
    page.getByRole('button', { name: '确定' }).click()
  })

  test('图标类型--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#type')
    const demo = page.locator('#type .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API图标类型通过 type' }).nth(3)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('type.png')

    // hover时截图
    const info = demo.getByRole('button', { name: 'info' })
    const error = demo.getByRole('button', { name: 'error' })
    const warning = demo.getByRole('button', { name: 'warning' })
    const success = demo.getByRole('button', { name: 'success' })
    const hoverPop = demo.getByRole('button', { name: '自定义' })
    
    await info.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('info-hover.png')
    page.getByRole('button', { name: '确定' }).click()
    await page.waitForTimeout(200)

    await error.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('error-hover.png')
    page.getByRole('button', { name: '确定' }).click()
    await page.waitForTimeout(200)

    await warning.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('warning-hover.png')
    page.getByRole('button', { name: '确定' }).click()
    await page.waitForTimeout(200)

    await success.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('success-hover.png')
    page.getByRole('button', { name: '确定' }).click()
    await page.waitForTimeout(200)

    await hoverPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('hoverPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()

  })

  test('位置--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#placement')
    const demo = page.locator('#placement .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API提示框显示位置通过 placement' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('placement.png')

    // hover时截图
    const topPop = demo.getByRole('button', { name: '显示在下方' })
    const rightPop = demo.getByRole('button', { name: '显示在右边' })

    await topPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('topPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()
    await page.waitForTimeout(200)
    
    await rightPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('rightPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })

  test('类名--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#custom-class')
    const demo = page.locator('#custom-class .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API自定义类名通过 custom-class' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-class.png')

    // hover时截图
    const classPop = demo.getByRole('button', { name: '悬浮我提示' })
    await classPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('classPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })

  test('插槽--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#slot-footer')
    const demo = page.locator('#slot-footer .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API底部插槽通过 footer' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('slot-footer.png')

    // hover时截图
    const slotPop = demo.getByRole('button', { name: '悬浮我提示' })
    await slotPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('slotPop-hover.png')
    page.getByRole('button', { name: '自定义关闭按钮' }).click()
  })

  test('宽度--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#width')
    const demo = page.locator('#width .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API宽度通过 width 设置提示框宽度。悬浮我提示' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('width.png')

    // hover时截图
    const widthPop = demo.getByRole('button', { name: '悬浮我提示' })
    await widthPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('widthPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })

  test('隐藏取消--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#cancel-button')
    const demo = page.locator('#cancel-button .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API隐藏取消按钮通过 cancel-button' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('cancel-button.png')

    // hover时截图
    const cancelPop = demo.getByRole('button', { name: '悬浮我提示' })
    await cancelPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('cancelPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })

  test('事件--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('popconfirm#event')
    const demo = page.locator('#event .pc-demo')
    const popDemo = page.locator('#doc-layout div').filter({ hasText: '示例API事件当气泡确认框显示时触发 show' }).nth(2)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('event.png')

    // hover时截图
    const eventPop = demo.getByRole('button', { name: '悬浮我提示' })
    await eventPop.hover()
    await expect(popDemo).toBeInViewport()
    await expect(popDemo).toHaveScreenshot('eventPop-hover.png')
    page.getByRole('button', { name: '确定' }).click()
  })
})
