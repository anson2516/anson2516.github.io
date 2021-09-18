// "use strict"
// let meMo
// load website will show all task
window.addEventListener('load', ()=>{
	showData()
}
)

// global variables
const addBtn = document.querySelector('.add-btn')
const welcomeText = document.querySelector('.welcome-text')
const showAllButton = document.querySelector('.show-all-button')
const displayArea = document.querySelector('.memolist')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupUpdateArea = document.querySelector('.popup-update-area')
const addMemoDeleteBtn = document.getElementById('add-memo-delete-btn')
const footerMenuBtn = document.getElementById('footerBtn1')
const navBar = document.querySelector('.nav')
const navMenu = document.querySelector('.nav-menu')
const navItem6 = document.querySelector('#nav-item6')
const greeTing = document.querySelector('.greeting')
const typeWork = document.querySelector('#nav-item2')
const typeFamily = document.querySelector('#nav-item3')
const typePersonal = document.querySelector('#nav-item4')
const gridFunction1 = document.getElementById('gridFun1')
const gridFunction2 = document.getElementById('gridFun2')//maybe delete
const gridFunction3 = document.getElementById('gridFun3')
const countMemo = document.querySelector('#count-memo')
const calendar = document.querySelector('.calendar')
// const iframe = document.querySelector('iframe')

/*
calendar.addEventListener('click', ()=>{

	displayArea.innerHTML = 
	`<iframe
	src="./calendar.html" 
	title="calendar"
	width="100%"
	height="700px"
	></iframe>`

})
*/

//swatches colorBox
const colorBox1 =document.getElementById('color-Box1')
const colorBox2 =document.getElementById('color-Box2')
const colorBox3 =document.getElementById('color-Box3')
const colorBox4 =document.getElementById('color-Box4')
const colorBox5 =document.getElementById('color-Box5')
const colorBox6 =document.getElementById('color-Box6')
const colorBox7 =document.getElementById('color-Box7')
const colorBox8 =document.getElementById('color-Box8')
const colorBox9 =document.getElementById('color-Box9')

//countmemo



//swatches colorBox evenlistener
let swatchesOnOff = 0;
gridFunction3.addEventListener('click',()=>{
	if(swatchesOnOff =='0'){		
		document.querySelector('.swatches').style.display = 'flex';
		swatchesOnOff  = '1';
	}else{
		document.querySelector('.swatches').style.display = 'none';
		swatchesOnOff  = '0';
	}
})

//change memo display pattern
let displayPattenOnOff = 0;
gridFunction1.addEventListener('click',()=>{	
	let memoArr = document.querySelectorAll('.memo')	
	if(displayPattenOnOff=='0'){		
		for(let memo of memoArr){
		memo.style.width = '35%'
	}
	displayPattenOnOff = '1';
	}else{		
		for(let memo of memoArr){
		memo.style.width = '20%'
	}
	displayPattenOnOff = '0';
	}
})

// eventListener

colorBox1.addEventListener('click',()=>{		
	navBar.style.backgroundColor = '#f00555d9';
	navMenu.style.backgroundColor = '#f00555d9';
	addBtn.style.backgroundColor = '#f00555d9';
	welcomeText.style.color = '#f00555d9';
	greeTing.style.backgroundColor = '#f00555d9'
		
})
colorBox2.addEventListener('click',()=>{
	navBar.style.backgroundColor = '#f46236d1';
	navMenu.style.backgroundColor = '#f46236d1';
	addBtn.style.backgroundColor = '#f46236d1';
	welcomeText.style.color = '#f46236d1';
	greeTing.style.backgroundColor = '#f46236d1'	
})
colorBox3.addEventListener('click',()=>{
	navBar.style.backgroundColor = '#f3d921d9';
	navMenu.style.backgroundColor = '#f3d921d9';
	addBtn.style.backgroundColor = '#f3d921d9';
	welcomeText.style.color = '#f3d921d9';
	greeTing.style.backgroundColor = '#f3d921d9';		
})
colorBox4.addEventListener('click',()=>{
	navBar.style.backgroundColor = '#2ec578c7';
	navMenu.style.backgroundColor = '#2ec578c7';
	addBtn.style.backgroundColor = '#2ec578c7';
	welcomeText.style.color = '#2ec578c7';
	greeTing.style.backgroundColor = '#2ec578c7'	
})
colorBox5.addEventListener('click',()=>{
	navBar.style.backgroundColor = '#00bcd4';
	navMenu.style.backgroundColor = '#00bcd4';
	addBtn.style.backgroundColor = '#00bcd4';
	welcomeText.style.color = '#00bcd4';
	greeTing.style.backgroundColor = '#00bcd4'	
})

colorBox6.addEventListener('click',()=>{
	navBar.style.backgroundColor = '#216cf3d9';
	navMenu.style.backgroundColor = '#216cf3d9';
	addBtn.style.backgroundColor = '#216cf3d9';
	welcomeText.style.color = '#216cf3d9';
	greeTing.style.backgroundColor = '#216cf3d9'	
})
colorBox7.addEventListener('click',()=>{
	navBar.style.backgroundColor = '#673ab7d4';
	navMenu.style.backgroundColor = '#673ab7d4';
	addBtn.style.backgroundColor = '#673ab7d4';
	welcomeText.style.color = '#673ab7d4';
	greeTing.style.backgroundColor = '#673ab7d4'	
})
colorBox8.addEventListener('click',()=>{
	navBar.style.backgroundColor = 'gray';
	navMenu.style.backgroundColor = 'gray';
	addBtn.style.backgroundColor = 'gray';
	welcomeText.style.color = 'gray';
	greeTing.style.backgroundColor = 'gray'	
})
colorBox9.addEventListener('click',()=>{
	navBar.style.backgroundColor = 'black';
	navMenu.style.backgroundColor = 'black';
	addBtn.style.backgroundColor = 'black';
	welcomeText.style.color = 'black';
	greeTing.style.backgroundColor = 'black'	
})







const showToday = document.querySelector('.today-date')


typeWork.addEventListener('click', () => {
	showTypeData('work')
})
typeFamily.addEventListener('click', () => {
	showTypeData('family')
})
typePersonal.addEventListener('click', () => {
	showTypeData('personal')
})

addBtn.addEventListener('click', () => {
	popupWrapper.classList.remove('hidden')
	addBtn.classList.add('hidden')

})

addMemoDeleteBtn.addEventListener('click', () => {
	popupWrapper.classList.add('hidden')
	addBtn.classList.remove('hidden')
})


footerMenuBtn.addEventListener('click', ()=>{
	if(footerMenuBtn.value=='on'){
		navBar.classList.add('show')
		document.getElementById('footerBtn1').value='off'
	}else{
		navBar.classList.remove('show')
		document.getElementById('footerBtn1').value='on'
	}
	
})



// show Date 
const showTodayDate = () =>{
	let now = new Date()
	let dateStr = new Date().toDateString()
	showToday.innerHTML = dateStr
	console.log(now)
	console.log(dateStr)
}
window.addEventListener('load', showTodayDate)


// HTTP methods


let taskID = 1;


// get all data 
async function showData() {
	displayArea.innerHTML = "<br>"
	const response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		for (let i = 0; i < dataArr.length; i++) {
			displayArea.innerHTML +=
				`<div class="memo memo-${dataArr[i].id}" id="${dataArr[i].id}">
    			<div class="memoTopBorder ${(dataArr[i].type)} ${dataArr[i].type}"></div>
    			<div class="memoTopBar">
        		<p id="${dataArr[i].id}" class="memoType blue">${dataArr[i].name}</p> 
        		<svg class="delete-btn" id="${dataArr[i].id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    			</div>    
    			<div class="memoContent description">${dataArr[i].description}</div>
    			<div class="memoContent">${dataArr[i].type}</div>
    			<div class="memoContent duedate">Due Date:${dataArr[i].duedate}</div>
    			<div class="memoMiniFunction">                     
        		
        		<svg  class="update-btn" id="${dataArr[i].id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    			</div>    
				</div>`
		}
		const delButton = document.querySelectorAll('.delete-btn')
		for (let item of delButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				delTask(event.target.id);
			})
			// countMemo.innerHTML = displayArea.childElementCount-1;
		}

		const updateButton = document.querySelectorAll('.update-btn')
		for (let item of updateButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				popupUpdateArea.classList.remove('hidden')
				addBtn.classList.add('hidden')
				editTaskById(event.target.id)
			})
			// countMemo.innerHTML = displayArea.childElementCount-1;
		}
		countMemo.innerHTML = displayArea.childElementCount-1;
	}	
}
showAllButton.addEventListener('click', showData)

// show task by ID
async function showTaskById(id) {
	let tempArr = {}
	let selectedArr = {}
	const url = 'http://localhost:8080/todolist/'
	const response = await fetch(url)
	if (response.ok) {
		tempArr = await response.json()
		for (let item of tempArr) {
			if (item.id === id) {
				selectedArr = { ...item }
			}
		}
	}
	let memo = 'memo-' + selectedArr.id
	let editMemo = document.querySelector(`.${memo}`)
	editMemo.outerHTML = `
    <div class="memo memo-${selectedArr.id}" id="${selectedArr.id}">
    <div class="memoTopBorder ${(selectedArr.type)}"></div>
    <div class="memoTopBar">
    <p id="${selectedArr.id}" class="memoType blue">${selectedArr.name}/ Task-${selectedArr.id}</p> 
    <svg class="delete-btn" id="${selectedArr.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    </div>
    <div class="memoContent description">${selectedArr.description}</div>
    <div class="memoContent ${selectedArr.type}">${selectedArr.type}</div>
    <div class="memoContent duedate">Due Date:${selectedArr.duedate}</div>
    <div class="memoMiniFunction">                     
    
    <svg  class="update-btn" id="${selectedArr.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    </div>    
    </div>`
	document.querySelector('.delete-btn').addEventListener('click', (event) => {
		event.preventDefault();
		delTask(event.target.id);
	})

	document.querySelector('.update-btn').addEventListener('click', (event) => {
		event.preventDefault();
		popupWrapper.classList.remove('hidden')
		editTaskById(event.target.id)
	})
}

// show task by type
async function showTypeData(taskType) {
	displayArea.innerHTML = "<br>"
	const response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		for (let obj of dataArr) {
			if (taskType === obj.type){
				displayArea.innerHTML +=
				`<div class="memo memo-${obj.id}" id="${obj.id}">
    			<div class="memoTopBorder ${(obj.type)} ${obj.type}"></div>
    			<div class="memoTopBar">
        		<p id="${obj.id}" class="memoType blue">${obj.name}</p> 
        		<svg class="delete-btn" id="${obj.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    			</div>    
    			<div class="memoContent description">${obj.description}</div>
    			<div class="memoContent">${obj.type}</div>
    			<div class="memoContent duedate">Due Date:${obj.duedate}</div>
    			<div class="memoMiniFunction">                     
        		<svg  class="update-btn" id="${obj.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    			</div>    
				</div>`
			}
		}
		const delButton = document.querySelectorAll('.delete-btn')
		for (let item of delButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				delTask(event.target.id);
			})
		}

		const updateButton = document.querySelectorAll('.update-btn')
		for (let item of updateButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				popupUpdateArea.classList.remove('hidden')
				addBtn.classList.add('hidden')
				editTaskById(event.target.id)
			})
		}
	}
	countMemo.innerHTML = displayArea.childElementCount-1;
}

// add new task
async function addTask(event) {
	const form = event.target
	let type = form.type.value
	const dataObj = {
		id: taskID,
		name: form.name.value,
		description: form.description.value,
		duedate: form.duedate.value,
		type: form.type.value
	}
	const response = await fetch('http://localhost:8080/todolist',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataObj)
		})
	if (response.ok) {
		console.log('success')
		alert('Task Added!')
		popupWrapper.classList.add('hidden')
		addBtn.classList.remove('hidden')
		showData()
	}
}

document.querySelector('.add-form').addEventListener('submit', event => {
	event.preventDefault();
	addTask(event)
	taskID++
})

// delete task
async function delTask(id) {
	const url = 'http://localhost:8080/todolist/' + id
	const response = await fetch(url, {
		method: 'DELETE'
	})
	if (response.ok) {
		alert(`Task-${id} was deleted`)
		showData()
	}
}

// transform task to form by id
async function editTaskById(id) {
	let tempArr = {}
	let selectedArr = {}
	const url = 'http://localhost:8080/todolist/'
	const response = await fetch(url)
	if (response.ok) {
		tempArr = await response.json()
		for (let item of tempArr) {
			if (item.id === id) {
				selectedArr = { ...item }
			}
		}
	}
	let addClassType = 'type-' + selectedArr.type
	popupUpdateArea.innerHTML =
		`<div class="add-memo">
                <form class="update-form">
                    <form action="http://localhost:8080/" method="PUT"> 
                        <svg  id='popup-memo-close-button' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                       
                        <div>
                            <label for="type">Type</label>        
                            <select id="type" name ="type" required>
                                <option value="family" class="type-family">Family</option>
                                <option value="work" class="type-work">Work</option>
                                <option value="personal" class="type-personal">Personal</option>
                            </select>  <br>
                        </div>
                        <div>
                            <label for="name">Memo Title</label>                                       
                            <input id="name" name="name" type="text" value="${selectedArr.name}" required>  
                            <br>               
                        </div>
                        <div>
                            <label for="duedate">Due Date</label>                                       
                            <input id="duedate" name="duedate" type="date" value="${selectedArr.duedate}" required><br>                
                        </div>                       
                        <input type="text" name="id" value="${selectedArr.id}" required hidden>          
                       <label for="message"></label>
                       <textarea id="description" name="description" rows="8" cols="40" required>${selectedArr.description}</textarea>                
                        <input id="update-btn" type="submit" value="Update">                
                    </form>
                </form>
            </div> `
	document.querySelector(`.${addClassType}`).setAttribute('selected', 'selected')
	document.querySelector('#popup-memo-close-button').addEventListener('click', () => {
		popupUpdateArea.classList.add('hidden')
		addBtn.classList.remove('hidden')
	})
	document.querySelector('#update-btn').addEventListener('click', () => {
		popupUpdateArea.classList.add('hidden')
		addBtn.classList.remove('hidden')
	})
	let updateTarget = document.querySelector(`.update-form`)
	updateTarget.addEventListener('submit', (event) => {
		let targetData = {}
		event.preventDefault();
		targetData.id = event.target.id.value
		targetData.name = event.target.name.value
		targetData.description = event.target.description.value
		targetData.duedate = event.target.duedate.value
		targetData.type = event.target.type.value
		updateTask(targetData)
	})
}

// edit task
async function updateTask(dataObj) {
	let dataId = dataObj.id
	let memo = 'memo-' + dataObj.id
	let editMemo = document.querySelector(`.${memo}`)
	const url = 'http://localhost:8080/todolist/' + dataObj.id
	let response = await fetch(url, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(dataObj)
	})
	if (response.ok) {
		showData()
	}
}





