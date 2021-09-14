const makeRequest = function (url: string, method: any, data?: any) {
  return fetch(url, method)
}
export default makeRequest
const apiKey = '4d91e17443a10cec630cf87303cfd019'

export const requestWeekForecast = (lat: number, lon: number) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  return fetch(url)
    .then((res) => res.json())
}

export const requestDayForecast = (lat: number, lon: number, date: number) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&units=metric&appid=${apiKey}`
  return fetch(url)
    .then((res) => res.json())
}
