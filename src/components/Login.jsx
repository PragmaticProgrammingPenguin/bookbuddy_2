/* TODO - add your code to create a functional React component that renders a login form */
export default function Login(){
    //log user in
    fetch('/api/users/login', {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            email: 'ssmith@example.com',
            password: 'sam345'
            })
        }).then(response => response.json())
            .then(result => {
            console.log(result);
            })
            .catch(console.error);
    return result;
}