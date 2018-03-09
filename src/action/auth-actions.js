import superagent from 'superagent';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE',
  payload: null,
});

export const signupRequest = user => dispatch => {
  console.log(__API_URL__);
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.text));
      try {
        localStorage.token = res.text;
      } catch(e) {
        throw e;
      }
    });
};

export const signinRequest = user => dispatch => {
  console.log(__API_URL__);
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.text));
      try {
        localStorage.token = res.text;
      } catch (e) {
        throw e;
      }
    });
};