// http://localhost:8080/user/register

// async function getResult(){
//     const res = await fetch('http://localhost:8080/user/register')
//     .then((res)=>{
//         console.log('success')
//     })
//     const data = await res.json()
//     console.log(data)
//     return data; 
// }

// getResult()


const loginBtn = document.getElementById('login-form')

loginBtn.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('yo')
    const form = event.target	
    console.log(form)
    // let type = form.name.value.toUpperCase()
    const dataObj = {	
        // id: taskID,	
        username: form.username.value,
        password: form.password.value		
    }
    console.log(dataObj)
    login(dataObj)
})



async function login(obj) {    
	const response = await fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(obj)
})	
	if (response.ok) {
        console.log('success')
		window.location.replace("http://localhost:8080/index.html")
		
	}
}

// showData()










// fetch('http://localhost:8080/user/login')
// .then(res => res.json()
// )
// .then((data)=>{
//     console.log(data)
// })
// .catch(err=> console.log('fale! '+err))


// fetch('http://localhost:8080/creatAc.html')
// .then((res)=>{
//     console.log('成功了 - ' +res)
//     console.log(res)

//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('fale! '+err)
// })