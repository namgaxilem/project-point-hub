from playwright.sync_api import Page

def goto_page(page: Page) -> any:
    return page.goto("https://playwright.dev/")
