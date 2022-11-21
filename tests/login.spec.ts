import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';

test('As a user, I am able to login in the syste.', async({ page }) => {
    // Given I visit Martial App
    const accessThePage = new LoginPage(page);
    await accessThePage.open();
})