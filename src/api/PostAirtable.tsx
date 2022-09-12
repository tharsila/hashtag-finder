const ApiPost = 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas';

const postData = async (postText:string) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer process.env.REACT_APP_API_KEY',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Squad: '06-22',
            Hashtag: postText,
            Data: Date.now(),
          },
        },
      ],
    }),
  };
  fetch(ApiPost, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((erro) => console.log(erro));
};

export { postData };