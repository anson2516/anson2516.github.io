const res = await fetch('http://localhost:8080/todolist',
        {
            method: 'GET'
        })

    // sever 處理要求後，會將相關資料以 json 格式 send返俾你(這個例子，回覆的內容放在 res 內)，你要將資料用 .json() 拆解 json，記得要加 await 
    const dataArr = await res.json()

    // 拆解 json 後，data本身是array，所以用for loop將它分開，再砌成html格式，直接用.innerHTML，放入displayDataArea 內
    for (let i = 0; i < dataArr.length; i++) {
        displayDataArea.innerHTML += `
        <form id='data-detail-form'>
            <div id='data-${i}' class='data-field'>
            <div class='id'>${dataArr[i].id}</div>
            <div class="name">${dataArr[i].name}</div>
            <div class="description">${dataArr[i].description}</div>
            <div class="assigned-to">${dataArr[i].assignedto}</div>
            <div class="due-date">${dataArr[i].duedate}</div>
            <div class="status">${dataArr[i].status}</div>
            <button class="button update" id="${dataArr[i].id}">UPDATE</button>
            <button class="button delete" id="${dataArr[i].id}">DELETE</button>
            </div>
        </form>
        `
    }

    // 加入 update 按扭，並加上 update 的功能 (按扭會 call 用 數據的 id，去執行 updateItem )
    const updateButtons = document.querySelectorAll('.button.update')
    for (let updateButton of updateButtons) {
        updateButton.addEventListener('click', (event) => {
            // 停止 HTML 原本按 button 後，要做 form submission 的動作，取而代之，用 updateButton.id  執行 updateItem
            event.preventDefault();
            updateItem(updateButton.id)
        })
    }

    // 加入 delete 按扭，並加上 delete 的功能 (按扭會 call 用 數據的 id，去執行 deleteItem )
    const deleteButtons = document.querySelectorAll('.button.delete')
    for (let deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            deleteItem(deleteButton.id)
        })
    


}

// 要先設定好function才，可以用。 addEventListener(a, b) -> a 是引發的行動，b是行動被引發後，要執行的function
showButton.addEventListener('click', showData)
