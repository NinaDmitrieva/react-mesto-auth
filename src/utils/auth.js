export const base_Url = 'https://auth.nomoreparties.co';

function requestResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Все сломалось:( ${res.status}`);
};

export const registration = (email, password) => {
    return fetch(`${base_Url}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(requestResponse)
};


export const authorization = (email, password) => {
    return fetch(`${base_Url}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(requestResponse)

};

export const getUserData = (token) => {
    return fetch(`${base_Url}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(requestResponse)
};


