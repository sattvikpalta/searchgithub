const APIURL = 'https://api.github.com/users/';

const main = document.querySelector('.main');
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

    createUserCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard('No profile with the given username');
    }
  }
}

function createUserCard(user) {
  main.innerHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>

      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;
}

function createErrorCard(msg) {
  main.innerHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div> 
  `;
}

formUser.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = ipSearch.value;

  if (user) {
    getUser(user);
    ipSearch.value = '';
  }
});