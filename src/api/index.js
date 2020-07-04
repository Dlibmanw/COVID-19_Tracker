import axios from 'axios' 
// axios is used to make api request

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  // here, we are going to have an async function. We are going to deal with it using async. 
  // async deals with promises the same way '.then' and '.catch' does, but it's easier to read and write.
  // try is going to be executed if the fetch is successful, otherwise we're going to get to the catch block.
  try {
    const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url)
    const modifiedData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate
    }
    return modifiedData ;
  } catch (error) {

  }
}