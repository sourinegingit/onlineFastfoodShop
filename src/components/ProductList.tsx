import { Product } from "../cartItem";


const products:Product[]=[
  { id: 1, name: 'پیتزا پپرونی', description: 'پیتزا با سوس پپرونی و پنیر', price: 120000, imageUrl: '../src/assets/burger1.jpg' },
  { id: 2, name: 'برگر مرغ', description: 'برگر مرغ تازه با نان خانگی', price: 90000, imageUrl: '../src/assets/burger3.jpg' },
  { id: 3, name: 'پیتزا مارگاریتا', description: 'پیتزا با گوجه و پنیر', price: 100000, imageUrl: '../src/assets/pizza2.jpg' },
  { id: 4, name: 'پیتزا قارچ', description: 'پیتزا قارچ و پنیر', price: 110000, imageUrl: "../src/assets/pizza1.jpg" },
  { id: 5, name: 'برگر گوشت', description: 'برگر با گوشت تازه', price: 85000, imageUrl: '../src/assets/frenchfries1.jpg' },
  { id: 6, name: 'پاستا', description: 'پاستا با سس پنیر', price: 70000, imageUrl: '../src/assets/pizza3.jpg' },
  { id: 7, name: 'ساندویچ کباب', description: 'ساندویچ با کباب تازه', price: 95000, imageUrl: '../src/assets/frenchfries3.jpg' },
  { id: 8, name: 'شیک شکلاتی', description: 'شیک شکلاتی خوشمزه', price: 50000, imageUrl: '../src/assets/frenchfries2.jpg' },
  { id: 9, name: 'نوشابه', description: 'نوشابه کلاسیک', price: 30000, imageUrl: '../src/assets/burger2.jpg' },

  ]

  type ProductListProps={
    addToCart: (product: Product) => void ;
  }

const ProductList = ({addToCart}:ProductListProps) => {
  return (
    <div className="flex flex-wrap gap-10 p-4 md:flex mx-auto">
      {products.map(product => (
        <div key={product.id} className="w-52 min-h-10  bg-gray-500 flex flex-col items-start p-2 rounded-lg shadow-xl ">
          <img src={product.imageUrl} className="w-64 h-52 object-cover" alt={product.name} />
          <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
          <h6 className="font-semibold text-md text-gray-300 mt-2">{product.description}</h6>
          <div className="flex justify-between w-full items-center mt-3">
            <p className="font-semibold text-2xl">{product.price} تومان</p>
            <button
              onClick={()=>{addToCart(product)}}
              className="font-semibold text-lg bg-orange-500 text-white p-2 rounded-md"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
