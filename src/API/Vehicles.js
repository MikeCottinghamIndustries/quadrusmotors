export const generateTimeout = timeout => new Promise((resolve, reject) => {
    setTimeout(() => reject({
        error: 'request timeout',
        data: `request exceeded timeout ${(timeout / 1000.0).toFixed(1)} seconds).`
    }), timeout);
});

export const checkStatus = (response) => {
    if (response.status < 200 || response.status >= 400) {
        return Promise.reject(response.json());
    }
    return response.json();
};

export function getVehicles() {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return Promise.race([
        fetch('/data/vehicles.json', init)
            .then(checkStatus, e => e),
        generateTimeout(15000),
    ]);
}