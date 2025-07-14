import fetch from 'node-fetch';

const routeHello = (): string => "Hello, World!";

const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return err;
    }

    const names = data.map((wut) => `id: ${wut.id}, name: ${wut.name}`).join("<br>");
        return names;
};

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "Sunny",
        temp: 80
    };
};


export { routeHello, routeAPINames, routeWeather };