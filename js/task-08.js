const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit (submit) {
    submit.preventDefault();

    const {elements: { email, password }
  } = submit.currentTarget;

    if (email.value === '' || password.value === '') {
    return alert('Будьласка заповніть всі поля!');
  }

  const result = {
    Email: email.value,
    Password: password.value,
  };

  console.log(result);

    submit.currentTarget.reset();
}