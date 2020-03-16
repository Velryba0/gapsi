import { useState, useEffect } from 'react';

const useGetProductsHook = () => {
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNewList = async () => {
			try {
				
				const response = await fetch(
					`https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/products`
				);

				const json = await response.json();
				
				setResult(
					json.data.products.map(product => {
						return product
					})
					);
					
				setLoading(false);
					
			} catch (error) {
				setLoading('null');
			}
		}

        fetchNewList();
	}, []);
	
	return [result, loading];
}

export default useGetProductsHook;