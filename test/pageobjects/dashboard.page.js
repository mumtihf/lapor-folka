import { $ } from '@wdio/globals'
import Page from './page.js';

class DashboardPage extends Page {
    get laporFolkaImage () {
        return $('//*[@id="sidenav-main"]/div[1]/a/img')
    }

    get dashboardTitle () {
        return $('//*[@class="mb-3"]')
    }

    get elementRow1 () {
        return $('/html/body/main/div[1]/div[3]')
    }

    get elementRow2 () {
        return $('/html/body/main/div[1]/div[4]')
    }

    get elementRow3 () {
        return $('/html/body/main/div[1]/div[5]')
    }

    async validateOnDashboardPage() {
        await expect(this.laporFolkaImage).toBeExisting()
        await expect(this.dashboardTitle).toBeExisting()
        await expect(this.elementRow1).toBeExisting()
        await expect(this.elementRow2).toBeExisting()
        await expect(this.elementRow3).toBeExisting()
    }

    open () {
        return super.open('admin/dashboard');
    }
}

export default new DashboardPage();