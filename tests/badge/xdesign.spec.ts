import { expect, test } from '@playwright/test'

test.describe('badge组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // click时截图
    const badge = demo.getByText('我的待办2')
    await badge.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('click.png')
  })

  test('主题样式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#type')
    const demo = page.locator('#type .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('type.png')

    // click时截图
    const badge = demo.getByText('默认类型2')
    await badge.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('type-click.png')
  })

  test('小圆点--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#is-dot')
    const demo = page.locator('#is-dot .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('is-dot.png')

    // hover时截图
    const badge = demo.getByRole('button')
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('is-dot-hover.png')
  })

  test('最大值--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#max')
    const demo = page.locator('#max .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('max.png')

    // click时截图
    const badge = demo.getByText('我的待办99+')
    await badge.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('max-click.png')
  })

  test('跳转链接--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#link')
    const demo = page.locator('#link .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('link.png')

    // hover时截图
    const badge = demo.getByText('当前标签打开2')
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('link-hover.png')
  })

  test('自定义类名--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#badge-class')
    const demo = page.locator('#badge-class .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('class.png')

    // hover时截图
    const badge = demo.getByText('我的待办2')
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('class-hover.png')
  })

  test('自定义文本--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#slot-default')
    const demo = page.locator('#slot-default .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default.png')

    // hover时截图
    const badge = demo.getByText('自定义默认插槽2')
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('default-hover.png')
  })

  test('自定义内容--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#slot-content')
    const demo = page.locator('#slot-content .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('content.png')

    // hover时截图
    const badge = demo.getByText('自定义内容插槽 自定义')
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('content-hover.png')
  })

  test('动态隐藏--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#dynamic-hidden')
    const demo = page.locator('#dynamic-hidden .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-hidden.png')

    // hover时截图
    const badge = demo.getByText('我的待办2')
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-hidden-hover.png')
  })

  test('标记的位置--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('badge#offset')
    const demo = page.locator('#offset .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('offset.png')

    // hover时截图
    const badge = demo.locator('div').filter({ hasText: /^99$/ }).first()
    await badge.hover()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('offset-hover.png')
  })
})
