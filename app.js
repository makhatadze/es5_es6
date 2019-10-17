const users = [
    {name: 'john', surname: 'doe'},
    {name: 'jason', surname:'statham'}
];
function getUsers(){
    setTimeout(()=>{
        let output = '';
        users.forEach((user,index)=>{
            output += `<li>${user.name}</li>`;

        });
        document.body.innerHTML = output;
    },1000);
}
// function createUser(user,callback){
//     setTimeout(()=>{
//         users.push(user);
//         callback();
//     },1000);
// }
// getPosts();
// createUser({
//     name: 'vito',
//     surname: 'makhatadze'
// });


function createUser(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(user);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        },1000);
    });
}

// createUser({
//     name: 'vito',
//     surname: 'makhatadze'})
// .then(getUsers)
// .catch(err=>console.log(err));


// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise4 = fetch
(`https://jsonplaceholder.typicode.com/users`).then(
    res=> res.json()
);
Promise.all([promise1,promise2,promise4])
    .then(values=>{
            console.log(values);
    });

////////////    Async await
async function fetchUsers(){
    const res = await fetch
    (`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    console.log(data);

}
fetchUsers();