const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Andrey',
    password: '123',
  };

  // save to DB (server)

  //input: string(utr)
  //output: promise
  const res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json',
    },
    body: JSON.stringify(user),
    //  body: {"key": "value"},
  }).then(res => {
return res.json();
  }
  ).then (body => {
    console.log(body);
    alert(JSON.stringify(body));
    //input: string
    //output: undefined
  }
  ).catch(err => {

  });
  // then:
  //input: callback resolve and reject
  //output: async code

  // callback:
  //input: result of promise
  //output: promise

  console.log(res);
}

formElem.addEventListener('submit', createUserHandler);
