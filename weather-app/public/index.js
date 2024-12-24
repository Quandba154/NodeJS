const asynRequest = require("async-request");

const getWeather = async (location) => {
  const token = process.env.TOKEN_API_KEY;
  const url = `https://api.weatherstack.com/current?access_key=${token}&query=${location}`;

  try {
    const response = await asynRequest(url);
    const data = JSON.parse(response.body);

    let weather = {
      isSuccess: true,
      country: data.location.country,
      region: data.location.region,
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
      error: error.message,
    };
  }
};

// getWeather("Tokyo");

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
  console.log("params:", params);

  const location = params.address;
  console.log("location:", location);

  const weather = await getWeather(location);
  console.log("weather: :", weather);

  // render ra UI
  res.render("weather", {
    // lấy hiển thị ra UI
    status: true,
    region: weather.region,
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
