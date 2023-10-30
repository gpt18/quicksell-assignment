
const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchData = async () => {
    return fetch(API_URL)
    .then(response => response.json())
    .then(data => data);
};

export const getSingleUserData = async (userid) => {
    const data = await fetchData();
    const user = data.users.find(user => user.id === userid);
    return user;
    
};