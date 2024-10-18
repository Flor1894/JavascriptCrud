
const API_URL = "https://jsonplaceholder.typicode.com/users";

// get users
export const getUsers =  async () => {
    const response = await fetch(API_URL);

    return await response.json();
};


//delete users
export const deleteUsers = async (id) => {
    const responser = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",    
    });

    return await responser.json();
};


//edit users -> si no estoy editando estoy addUser
export const updateUser = async (user) => {
    const url = user.id ? `${API_URL}/${user.id}`: API_URL;
    const method  = user.id ? "PUT" : "POST"; 

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return await response.json();
};

//una condicion que me diga si estoy editando o no