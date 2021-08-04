const APIURL = 'https://api.github.com/users/';

const formUser = document.getElementById('formUser');
const ipSearch = document.getElementById('ipSearch');

// Fetching data using Axios
async function getUser(username) {
  // Method 1: Using .then 
  // axios(APIURL + username)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err));

  // Method 2: Using async and await
  // const res = await axios(APIURL + username);
  // console.log(res.data);

  // Method 2 by destructuring
  // const { data } = await axios(APIURL + username);
  // console.log(data);

  try {
    const {
      data
    } = await axios(APIURL + username);

    console.log(data);
  } catch (error) {
    console.log(error);
  }

}

formUser.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = ipSearch.value;

  if (user) {
    getUser(user);
    ipSearch.value = '';
  }
});