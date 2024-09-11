import loginPage from "../pageobjects/login.page"
import dashboardPage from "../pageobjects/dashboard.page"

describe('Login Feature', () => {
    beforeEach(async () => {
        await loginPage.open()
    })

    //Negative scenario
    it('Test Case 1 - Login Failed (Login using invalid password)', async () => {
        await loginPage.login('admin@example.com', 'password1')

        //assertion
        await loginPage.validateWrongPassword()
    })

    it ('Test Case 2 - Login Failed (Login using unregistered email)', async () => {
        await loginPage.login('admin1@example.com', 'password')

        //assertion
        await loginPage.validateUregisteredEmail()
    })

    it ('Test Case 3 - Login Failed (Login using unregistered email & passowrd)', async () => {
        await loginPage.login('admin1@example.com', 'password1')

        //assertion
        await loginPage.validateUregisteredEmail()
    })

    it ('Test Case 4 - Login Failed (Invalid email format)', async () => {
        await loginPage.login('admin.com', 'password')
    })

    it ('Test Case 5 - Login Failed (Using numeric on email field)', async () => {
        await loginPage.login('12345', 'password')
    })

    it ('Test Case 6 - Login Failed (Using [space] on email field)', async () => {
        await loginPage.login(' ', 'password')

        //assertion
        await loginPage.validateEmptyEmail()
    })

    it ('Test Case 7 - Login Failed (Using alphanumeric on email field)', async () => {
        await loginPage.login('12345abc', 'password')
    })

    it ('Test Case 8 - Login Failed (Using symbols on email field)', async () => {
        await loginPage.login('()&*^&@%$^*.(*)', 'password')
    })

    it ('Test Case 9 - Login Failed (Email field is empty)', async () => {
        await loginPage.login('', 'password')

        //assertion
        await loginPage.validateEmptyEmail()
    })

    it ('Test Case 10 - Login Failed (Password field is empty)', async () => {
        await loginPage.login('admin@example.com', '')

        //assertion
        await loginPage.validateEmptyPassword()
    })

    it ('Test Case 11 - Login Failed (Email & Password fields are empty)', async () => {
        await loginPage.login('', '')

        //assertion
        await loginPage.validateEmptyEmailAndPassword()
    })

    //Positive Scenario
    it('Test Case 12 - Login Success (Login with valid credentials)', async () => {
        await loginPage.login('admin@example.com', 'password')

        //assertion
        await dashboardPage.validateOnDashboardPage()
    })
})