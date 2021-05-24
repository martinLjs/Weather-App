const makeRequest = function (url: string, method: any, data?: any) {
    return fetch(url, method);
};
export default makeRequest;

export * from "./rest/getWeekForecast";

export const getWeekWeatherApi = (lat: number, log: number) => {
    const apiKey = '4d91e17443a10cec630cf87303cfd019';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${53.195873}&lon=${50.100193}&units=metric&appid=${apiKey}`;
    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${log}&appid=${apiKey}`;

    return fetch(url)
        .then((res) => res.json());

}
