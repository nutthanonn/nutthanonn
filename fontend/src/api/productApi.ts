import { v4 as uuidv4 } from "uuid";

interface ProductCommentProps {
  productCommentTitle: string;
  productCommentDescription: string;
}

interface productItem {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  productRate: number;
  productComment: string;
  productCommentAll: ProductCommentProps;
}

export const productData: productItem[] = [
  {
    productId: uuidv4(),
    productName: "Tees",
    productPrice: 50.0,
    productImage:
      "https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/Home/productB.jpg",
    productRate: 4,
    productComment: "Apollo Running Short",
    productCommentAll: {
      productCommentTitle: "Good",
      productCommentDescription: "I ware is good Product",
    },
  },
  {
    productId: uuidv4(),
    productName: "Tees",
    productPrice: 50.0,
    productImage:
      "https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/Home/productB.jpg",
    productRate: 4,
    productComment: "Apollo Running Short",
    productCommentAll: {
      productCommentTitle: "Good",
      productCommentDescription: "I ware is good Product",
    },
  },
  {
    productId: uuidv4(),
    productName: "Tees",
    productPrice: 50.0,
    productImage:
      "https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/Home/productB.jpg",
    productRate: 4,
    productComment: "Apollo Running Short",
    productCommentAll: {
      productCommentTitle: "Good",
      productCommentDescription: "I ware is good Product",
    },
  },
  {
    productId: uuidv4(),
    productName: "Tees",
    productPrice: 50.0,
    productImage:
      "https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/Home/productB.jpg",
    productRate: 4,
    productComment: "Apollo Running Short",
    productCommentAll: {
      productCommentTitle: "Good",
      productCommentDescription: "I ware is good Product",
    },
  },
  {
    productId: uuidv4(),
    productName: "Tees",
    productPrice: 50.0,
    productImage:
      "https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/Home/productB.jpg",
    productRate: 4,
    productComment: "Apollo Running Short",
    productCommentAll: {
      productCommentTitle: "Good",
      productCommentDescription: "I ware is good Product",
    },
  },
  {
    productId: uuidv4(),
    productName: "Tees",
    productPrice: 50.0,
    productImage:
      "https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/Home/productB.jpg",
    productRate: 4,
    productComment: "Apollo Running Short",
    productCommentAll: {
      productCommentTitle: "Good",
      productCommentDescription: "I ware is good Product",
    },
  },
];
