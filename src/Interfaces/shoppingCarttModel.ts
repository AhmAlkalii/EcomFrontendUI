import cartItemModel from "./cartItemModel";

export default interface shoppingCarttModel {
    id?: number;
    userId?: string;
    cartItems?: cartItemModel[];
    cartTotal?: number;
    stripePaymentIntentId?: any;
    clientSecret?: any;
  }