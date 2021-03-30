import {
  MenuContentPage, ProductsListPage, ShopingCartPage, LoginPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage
} from '../page/index'

const menuContentPage = new MenuContentPage()
const productsListPage = new ProductsListPage()
const shopingCartPage = new ShopingCartPage()
const loginPage = new LoginPage()
const addressStepPage = new AddressStepPage()
const shippingStepPage = new ShippingStepPage()
const paymentStepPage = new PaymentStepPage()

describe('Buy a t-shirt', () => {

  it('then the t-shirt should be bought', () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()

    productsListPage.lookProductList()
    productsListPage.goToAddCart()

    shopingCartPage.lookShopingCart()
    shopingCartPage.makePayment()

    loginPage.email()
    loginPage.pass()

    addressStepPage.pressLogin()
    addressStepPage.makePayment()

    shippingStepPage.pressTerm()
    shippingStepPage.makePayment()

    paymentStepPage.pressBankWire()
    paymentStepPage.makePayment()
    paymentStepPage.checkMessage("Your order on My Store is complete.")
  });
});
