import axios from 'axios' 
// axios is used to make api request

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  // here, we are going to have an async function. We are going to deal with it using async. 
  // async deals with promises the same way '.then' and '.catch' does, but it's easier to read and write.
  // try is going to be executed if the fetch is successful, otherwise we're going to get to the catch block.
  let changeableUrl = url; 

  if(country) {
    changeableUrl = `${url}/countries/${country}`
  }
  try {
    const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
    const modifiedData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate
    }
    return modifiedData ;
  } catch (error) {
    console.log(error) 
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
        
    return modifiedData;
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);    
   } catch (error) {
    console.log(error)
  }
}