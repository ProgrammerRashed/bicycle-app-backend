export interface TOrderData {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity: number;
  totalPrice: number;
  user: {
    name: string;
    email: string;
  };
  paymentStatus: string;
  paymentId: string;
  createdAt: Date;
}
