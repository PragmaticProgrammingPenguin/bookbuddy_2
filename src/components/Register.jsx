/* TODO - add your code to create a functional React component that renders a registration form */
export default function Register(){
    fetch('/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: 'Sam',
          lastname: 'Smith',
          email: 'ssmith@example.com',
          password: 'sam345'
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}