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

    productsListPage.LookProductList()
    productsListPage.goToAddCart()

    shopingCartPage.LookShopingCart()
    shopingCartPage.goToCartNavigation()

    loginPage.Email()
    loginPage.Pass()

    // Debes completar la prueba ...
    addressStepPage.PressLogin()
    addressStepPage.MakePayment()

    shippingStepPage.PressTerm()
    shippingStepPage.MakePayment()

    paymentStepPage.PressBankWire()
    paymentStepPage.MakePayment()
    paymentStepPage.CheckMessage()
  });
});
