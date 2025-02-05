const url = 'http://localhost:8089/profiles';

export const getProfiles = () => {
  return fetch(url).then(res => res.json());
}

export const saveProfile = (profile) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile)
  });
}