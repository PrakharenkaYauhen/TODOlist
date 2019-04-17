
function getRequest(method, url, async, name = null, password = null) {

    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open(method, url, async, name, password);

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
                // console.log(xhr.getResponseHeader('Content-Type'));
                // console.log(xhr.getAllResponseHeaders());
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

export { getRequest };