function wrapPromise(promise) {
    let status = "pending";
    let result;

    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    );

    return {
        fetch() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}

function getField(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                "label": "Sales region",
                "required": false,
                "choices": [
                    "Asia",
                    "Australia",
                    "Western Europe",
                    "North America",
                    "Eastern Europe",
                    "Latin America",
                    "Middle East and Africa"
                ],
                "displayAlpha": true,
                "default": "North America",
                "id": id,
            });
        }, 500);
    });
}

function saveField(field) {
    return fetch('http://www.mocky.io/v2/566061f21200008e3aabd919', {
        method: 'POST',
        body: JSON.stringify(field),
    }).then(r => r.json());
}

const api =  {
    getField: id => wrapPromise(getField(id)),
    saveField,
}

export default api;