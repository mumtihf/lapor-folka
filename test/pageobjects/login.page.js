import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get emailField() {
        return $('//*[@name="email"]')
    }

    get passwordField() {
        return $('//*[@name="password"]')
    }

    get loginBtn() {
        return $('//*[@class="btn bg-gradient-info w-100 mt-4 mb-0"]')
    }

    get dangerTxtZone() {
        return $('//*[@class="text text-danger"]')
    }

    get wrongPasswordTxt() {
        return $('//*[contains(text(),"Login Gagal! Kata sandi salah.")]')
    }

    get unregisteredEmailTxt() {
        return $('//*[contains(text(),"Login Gagal! Akun tidak ada.")]')
    }

    get emptyEmailTxt() {
        return $('//*[contains(text(),"Email harus diisi.")]')
    }

    get emptyPasswordTxt() {
        return $('//*[contains(text(),"Kata Sandi harus diisi.")]')
    }

    get signInTechnicalTestTxt() {
        return $('//*[contains(text(),"Sign In - Technical Test")]')
    }

    async inputEmailField(email) {
        await this.emailField.setValue(email)
    }

    async inputPasswordField(password) {
        await this.passwordField.setValue(password)
    }

    async clickLoginBtn() {
        await this.loginBtn.click()
    }

    async login(email, password) {
        await this.inputEmailField(email)
        await this.inputPasswordField(password)
        await this.clickLoginBtn()
    }

    async validateOnLoginPage() {
        await expect(this.signInTechnicalTestTxt).toBeExisting()
    }

    async validateWrongPassword() {
        await expect(this.dangerTxtZone).toBeExisting()
        await expect(this.wrongPasswordTxt).toBeExisting()
    }

    async validateUregisteredEmail() {
        await expect(this.dangerTxtZone).toBeExisting()
        await expect(this.unregisteredEmailTxt).toBeExisting()
    }

    async validateEmptyEmail() {
        await expect(this.dangerTxtZone).toBeExisting()
        await expect(this.emptyEmailTxt).toBeExisting()
    }

    async validateEmptyPassword() {
        await expect(this.dangerTxtZone).toBeExisting()
        await expect(this.emptyPasswordTxt).toBeExisting()
    }

    async validateEmptyEmailAndPassword() {
        await expect(this.dangerTxtZone).toBeExisting()
        await expect(this.emptyEmailTxt).toBeExisting()
        await expect(this.emptyPasswordTxt).toBeExisting()
    }

    open () {
        return super.open('');
    }
}

export default new LoginPage();
