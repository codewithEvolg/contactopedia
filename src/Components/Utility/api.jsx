const getRandomUser = async () => {
  const url = new URL("https://randomuser.me/api/");
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export default getRandomUser;
