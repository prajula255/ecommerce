import { FC } from "react";

interface CartPageProps {
    cartDetails: {
        title: string,
        image: string
    }[];
}

const CartPage: FC<CartPageProps> = ({ cartDetails })=> {
    return (
        <>
            <div>
                <h1>Cart Details</h1>
                {cartDetails.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    <div className="cart-items">
                        {cartDetails.map((item, index) => (
                            <div key={index} className="cart-item">
                                <h2>{item.title}</h2>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100px', height: 'auto' }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        
        </>
    );
};

export default CartPage;












