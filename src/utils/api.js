
const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

//fetch all data from api
export const fetchData = async () => {
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => data);
};

//fetch only single user data based on userid
export const getSingleUserData = async (userid) => {
    const data = await fetchData();
    const user = data.users.find(user => user.id === userid);
    return user;

};