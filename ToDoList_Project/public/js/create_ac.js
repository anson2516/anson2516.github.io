//輸入驗證 Form Validation
const creatForm = document.querySelector('.creatAc-form');

creatForm.addEventListener('submit',(e)=>{
	e.preventDefault()
	console.log(typeof creatForm.userNameInput.value)
	console.log(typeof creatForm.inputpassword.value[0])
	console.log(creatForm.inputpassword.value)
	const newArr = creatForm.userNameInput.value;	
	// checkInput(creatForm.userNameInput)
	
})

 
function checkInput() {
	let userName = document.getElementById("userNameInput")
	let password = document.getElementById("inputpassword")
	let errorBox1 = document.querySelector(".errorMessage1")
	let errorBox2 = document.querySelector(".errorMessage2")
	if (userName.value.length > 20 || userName.value.length < 6) {
		errorMessage1.innerHTML = "請輸入6-20位字元"
	}
	if (password.value.length > 20 || password.value.length < 6) {
		errorMessage2.innerHTML = "請輸入6-20位字元"
	}
	
}





//method

async function addTask(event) {
    const form = event.target	
    // let type = form.name.value.toUpperCase()
	const dataObj = {	
		// id: taskID,	
		username: form.username.value,
		password: form.password.value		
	}
	
	const response = await fetch('http://localhost:8080/user/register', 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataObj)
	})
	if(response.ok){
		console.log('success')
        alert('haha') 
        window.location.replace("http://localhost:8080/index.html")       
    }	
}

document.querySelector('.creatAc-form').addEventListener('submit', event => {
	event.preventDefault();
	addTask(event)
	// taskID++
})

