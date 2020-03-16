import { useState, useEffect } from 'react';

const useGetUsersHook = () => {
	const [user, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNewList = async () => {
			try {
				
				const response = await fetch(
                    `https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/visitors`,
                    {
                        method: 'POST'
                    }
				);

                const json = await response.json();
				
				setUsers(
					json.data
				);
					
				setLoading(false);
					
			} catch (error) {
				setLoading('null');
			}
		}

        fetchNewList();
	}, []);
	
	return [user, loading];
}

export default useGetUsersHook;