const makeRequest = function (url, method, data, params, header) {
    return fetch(url, method);
};
export default makeRequest;

// export * from "./rest/weather";
