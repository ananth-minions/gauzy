import * as loginPage from '../support/Base/pages/Login.po';
import { LoginPageData } from '../support/Base/pagedata/LoginPageData';
import * as editUserPage from '../support/Base/pages/EditUser.po';
import * as addUserPage from '../support/Base/pages/AddUser.po';
import * as faker from 'faker';
import { EditUserPageData } from '../support/Base/pagedata/EditUserPageData';
import { AddUserPageData } from '../support/Base/pagedata/AddUserPageData';
import * as dashboradPage from '../support/Base/pages/Dashboard.po';

let firstName = ' ';
let lastName = ' ';
let username = ' ';
let password = ' ';
let email = ' ';
let imgUrl = ' ';

describe('Edit user test', () => {
	before(() => {
		firstName = faker.name.firstName();
		lastName = faker.name.lastName();
		username = faker.internet.userName();
		email = faker.internet.email();
		password = faker.internet.password();
		imgUrl = faker.image.avatar();

		cy.visit('/');
		loginPage.verifyTitle();
		loginPage.verifyLoginText();
		loginPage.clearEmailField();
		loginPage.enterEmail(LoginPageData.email);
		loginPage.clearPasswordField();
		loginPage.enterPassword(LoginPageData.password);
		loginPage.clickLoginButton();
		dashboradPage.verifyCreateButton();
	});
	it('Should be able to add new user', () => {
		cy.visit('/#/pages/users');
		addUserPage.addUserButtonVisible();
		addUserPage.clickAddUserButton();
		addUserPage.firstNameInputVisible();
		addUserPage.enterFirstNameData(firstName);
		addUserPage.lastNameInputVisible();
		addUserPage.enterLastNameData(lastName);
		addUserPage.usernameInputVisible();
		addUserPage.enterUsernameData(username);
		addUserPage.emailInputVisible();
		addUserPage.enterEmailData(email);
		addUserPage.selectUserRoleVisible();
		addUserPage.selectUserRoleData(AddUserPageData.role);
		addUserPage.passwordInputVisible();
		addUserPage.enterPasswordInputData(password);
		addUserPage.imageInputVisible();
		addUserPage.enterImageDataUrl(imgUrl);
		addUserPage.confirmAddButtonVisible();
		addUserPage.clickConfirmAddButton();
	});
	it('Should be able to edit user', () => {
		editUserPage.gridButtonVisible();
		editUserPage.clickGridButton();
		editUserPage.tableRowVisible();
		editUserPage.selectLastTableRow();
		editUserPage.editButtonVisible();
		editUserPage.clickEditButton();
		editUserPage.orgTabButtonVisible();
		editUserPage.clickOrgTabButton(1);
		editUserPage.addOrgButtonVisible();
		editUserPage.clickAddOrgButton();
		editUserPage.selectOrgDropdownVisible();
		editUserPage.clickSelectOrgDropdown();
		editUserPage.clickSelectOrgDropdownOption();
		editUserPage.saveSelectedOrgButtonVisible();
		editUserPage.clickSaveselectedOrgButton();
		editUserPage.removeOrgButtonVisible();
		editUserPage.clickRemoveOrgButton();
		editUserPage.confirmRemoveBtnVisible();
		editUserPage.clickConfirmRemoveButton();
		editUserPage.clickOrgTabButton(0);
		editUserPage.firstNameInputVisible();
		editUserPage.lastNameInputVisible();
		editUserPage.passwordInputVisible();
		editUserPage.repeatPasswordInputVisible();
		editUserPage.emailInputVisible();
		editUserPage.tagsMultyselectVisible();
		editUserPage.selectRoleVisible();
		editUserPage.languageSelectVisible();
		editUserPage.saveBtnExists();
		editUserPage.enterFirstNameData(firstName);
		editUserPage.enterLastNameData(lastName);
		editUserPage.enterPasswordData(password);
		editUserPage.enterRepeatPasswordData(password);
		editUserPage.enterEmailData(email);
		// editUserPage.clickTagsMultyselect();
		// editUserPage.selectTagsFromDropdown(0);
		// editUserPage.selectTagsFromDropdown(1);
		editUserPage.clickKeyboardButtonByKeyCode(9);
		editUserPage.chooseRoleSelectData(EditUserPageData.role);
		editUserPage.chooseLanguage(EditUserPageData.preferredLanguage);
		editUserPage.saveBtnClick();
	});
});
