export const helpHttp = () => {
    const customFetch = async (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };

        // const controller = new AbortController();
        // options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers
            ? { ...defaultHeader, ...options.headers }
            : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        //console.log(options);
        // setTimeout(() => controller.abort(), 10000);

        // return fetch(endpoint, options)
        //     .then((res) =>
        //         res.ok
        //             ? res.json()
        //             : Promise.reject({
        //                 err: true,
        //                 status: res.status || "00",
        //                 statusText: res.statusText || "Ocurrió un error",
        //             })
        //     )
        //     .catch((err) => err);

        try {
            let response = await fetch(endpoint, options)
            if (!response.ok) throw { status: response.status, statusText: response.statusText };
            let data = await response.json()
            return data
        } catch (error) {
            let message = error.statusText || "Ocurrio en error al enviar el formulario",
                code = error.status || '00'
            return `Error ${code} : ${message}`
        }


    };

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };

    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    };

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    };

    return {
        get,
        post,
        put,
        del,
    };
};