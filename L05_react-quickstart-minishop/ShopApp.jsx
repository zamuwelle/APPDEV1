import { useState } from 'react';

const products = [
	{ id: 1, title: 'Cabbage', price: 1.5, isFruit: false, popular: false },
	{ id: 2, title: 'Garlic', price: 2.0, isFruit: false, popular: true },
	{ id: 3, title: 'Apple', price: 3.25, isFruit: true, popular: true },
	{ id: 4, title: 'Mango', price: 4.0, isFruit: true, popular: false }
];

function ProductCard({ product, onAddToCart }) {
	return (
		<div className="product-card" style={{
			border: '1px solid #ccc',
			borderRadius: '8px',
			padding: '16px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '8px',
			minWidth: '140px'
		}}>
			<h3 style={{ margin: 0 }}>{product.title}</h3>

			<p style={{ margin: 0, color: product.isFruit ? 'magenta' : 'darkgreen', fontWeight: 'bold' }}>
				${product.price.toFixed(2)}
			</p>

			{product.popular && <span>⭐ Popular</span>}

			<button onClick={onAddToCart} style={{ marginTop: 'auto' }}>Add to Cart</button>
		</div>
	);
}

export default function ShopApp() {
	const [count, setCount] = useState(0);

	function handleAddToCart() {
		setCount(count + 1);
	}

	function handleRemoveOne() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	return (
		<div className="shop" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
			<h1>Mini Fruit & Veg Stand</h1>

			<div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
				<p style={{ margin: 0 }}>
					{count === 0 ? 'Cart is empty' : `${count} items in cart`}
				</p>
				{count > 0 && (
					<button onClick={handleRemoveOne}>Remove one</button>
				)}
			</div>

			<div className="product-list" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</div>
	);
}