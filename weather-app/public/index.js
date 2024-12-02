const asynRequest = require("async-request");

const getWeather = async (location) => {
  const token = "a23e6b1e8f7f00b0113ed7ef4edd9d1b";
  const url = `https://api.weatherstack.com/current?access_key=${token}&query=${location}`;

  try {
    const res = await asynRequest(url);
    const data = JSON.parse(res.body);
    const weather = {
      isSuccess: true,
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      latitude: data.location.lat,
      lon: data.location.lon,
      temperature: data.current.temperature,
      wind_speed: data.current.wind_speed,
      precip: data.current.precip,
      cloudcover: data.current.cloudcover,
    };
    console.log(weather);
    return weather;
  } catch (error) {
    console.log(error);
    return {
      isSuccess: false,
      error,
    };
  }
};

// dựng Server
const express = require("express");
const app = express();
const port = 4000;

// static - files;
const path = require("path");
const pathPublic = path.join(__dirname, "../public");
app.use(express.static(pathPublic));

console.log("pathPublic:", pathPublic);

// SỬ DỤNG PARAM QUERY GỌI ĐÚNG DATA TRUY XUẤT TỪ FORM
app.get("/", async (req, res) => {
  const params = req.query;
  const location = params.address;
  const weather = await getWeather(location);
  console.log("weather:", weather);
  // render ra UI

  res.render("weather", {
    // lấy hiển thị ra UI
    status: true,
    region: weather.region || weather.name,
    country: weather.country,
    temperature: weather.temperature,
    wind_speed: weather.wind_speed,
    precip: weather.precip,
    cloudcover: weather.cloudcover,
  });
});

app.set("view engine", "hbs");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
