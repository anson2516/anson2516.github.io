"use strict"
var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var weekdayShort = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
];

var taskTopBarColors = [
    'silver',
    'gray',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua',
];
/*
var allTasks = async () => {
    let dataArr
    const response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		dataArr = await response.json()
        console.log(dataArr)
        return dataArr
    } else{
        console.log('not ok')
    }
    // allTasks = dataArr
    // console.log(allTasks)
    console.log(allTasks)
    return allTasks
}
*/

/*
var allTasks() = [
    { taskId: 1, taskTitle: 'task 1', taskDesc: 'task 1 description', date: new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 2, taskTitle: 'task 2', taskDesc: 'task 2 description', date: new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 3, taskTitle: 'task 3', taskDesc: 'task 3 description', date: new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 4, taskTitle: 'task 4', taskDesc: 'task 4 description', date: new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 5, taskTitle: 'task 5', taskDesc: 'task 5 description', date: new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 6, taskTitle: 'task 6', taskDesc: 'task 6 description', date: new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 7, taskTitle: 'task 7', taskDesc: 'task 7 description', date: new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 8, taskTitle: 'task 8', taskDesc: 'task 8 description', date: new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 9, taskTitle: 'task 9', taskDesc: 'task 9 description', date: new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 10, taskTitle: 'task 10', taskDesc: 'task 10 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 11, taskTitle: 'task 11', taskDesc: 'task 11 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 12, taskTitle: 'task 12', taskDesc: 'task 12 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 13, taskTitle: 'task 13', taskDesc: 'task 13 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 14, taskTitle: 'task 14', taskDesc: 'task 14 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 15, taskTitle: 'task 15', taskDesc: 'task 15 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 16, taskTitle: 'task 16', taskDesc: 'task 16 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 17, taskTitle: 'task 17', taskDesc: 'task 17 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 18, taskTitle: 'task 18', taskDesc: 'task 18 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 19, taskTitle: 'task 19', taskDesc: 'task 19 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 20, taskTitle: 'task 20', taskDesc: 'task 20 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 21, taskTitle: 'task 21', taskDesc: 'task 21 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 22, taskTitle: 'task 22', taskDesc: 'task 22 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 23, taskTitle: 'task 23', taskDesc: 'task 23 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 24, taskTitle: 'task 24', taskDesc: 'task 24 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 25, taskTitle: 'task 25', taskDesc: 'task 25 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 26, taskTitle: 'task 26', taskDesc: 'task 26 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 27, taskTitle: 'task 27', taskDesc: 'task 27 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 28, taskTitle: 'task 28', taskDesc: 'task 28 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 29, taskTitle: 'task 29', taskDesc: 'task 29 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false },
    { taskId: 30, taskTitle: 'task 30', taskDesc: 'task 30 description', date: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)), completed: false }
]
*/
var monthDirection = 0;
var calendarYear;
var calendarMonth;
var selectedDate = new Date();

function init() {
    var now = new Date();
    calendarYear = now.getFullYear();
    calendarMonth = now.getMonth();
}

init();

function updateCalendarYearMonth(date) {
    calendarYear = date.getFullYear();
    calendarMonth = date.getMonth();
}

function getNextMonth() {
    monthDirection++;
    var current;
    var now = new Date();
    if (now.getMonth() == 11) {
        current = new Date(now.getFullYear() + monthDirection, 0, 1);
    } else {
        current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
    }

    updateCalendarYearMonth(current);
    initCalender(getMonth(current));
}

function getPrevMonth() {
    monthDirection--;
    var current;
    var now = new Date();
    if (now.getMonth() == 11) {
        current = new Date(now.getFullYear() + monthDirection, 0, 1);
    } else {
        current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
    }
    updateCalendarYearMonth(current);
    initCalender(getMonth(current));
}
Date.prototype.isSameDateAs = function(pDate) {
    return (
        this.getFullYear() === pDate.getFullYear() &&
        this.getMonth() === pDate.getMonth() &&
        this.getDate() === pDate.getDate()
    );
};

function getMonth(currentDay) {
    var now = new Date();
    var currentMonth = month[currentDay.getMonth()];
    var monthArr = [];
    for (let i = 1 - currentDay.getDate(); i < 31; i++) {
        var tomorrow = new Date(currentDay);
        tomorrow.setDate(currentDay.getDate() + i);
        if (currentMonth !== month[tomorrow.getMonth()]) {
            break;
        } else {
            monthArr.push({
                date: {
                    weekday: weekday[tomorrow.getDay()],
                    weekday_short: weekdayShort[tomorrow.getDay()],
                    day: tomorrow.getDate(),
                    month: month[tomorrow.getMonth()],
                    year: tomorrow.getFullYear(),
                    current_day: now.isSameDateAs(tomorrow) ? true : false,
                    date_info: tomorrow
                }
            });
        }
    }
    return monthArr;
}

function clearCalender() {
    console.log('clearCalender');
    $("table tbody tr").each(function() {
        $(this).find("td").removeClass("active selectable currentDay between hover").html("");
    });
    $("td").each(function() {
        $(this).unbind('mouseenter').unbind('mouseleave');
    });
    $("td").each(function() {
        $(this).unbind('click');
    });
    clickCounter = 0;
}

function initCalender(monthData) {
    var row = 0;
    var classToAdd = "";
    var currentDay = "";
    var today = new Date();

    clearCalender();
    $.each(monthData,
        function(i, value) {
            var weekday = value.date.weekday_short;
            var day = value.date.day;
            var column = 0;
            var index = i + 1;

            $(".sideb .header .month").html(value.date.month);
            $(".sideb .header .year").html(value.date.year);
            if (value.date.current_day) {
                currentDay = "currentDay";
                classToAdd = "selectable";
                $(".right-wrapper .header span").html(value.date.weekday);
                $(".right-wrapper .day").html(value.date.day);
                $(".right-wrapper .month").html(value.date.month);
            }
            if (today.getTime() < value.date.date_info.getTime()) {
                classToAdd = "selectable";

            }
            $("tr.weedays th").each(function() {
                var row = $(this);
                if (row.data("weekday") === weekday) {
                    column = row.data("column");
                    return;
                }
            });
            $($($($("tr.days").get(row)).find("td").get(column)).addClass(classToAdd + " " + currentDay).html(day));
            currentDay = "";
            if (column == 6) {
                row++;
            }
        });
    $("td.selectable").click(function() {
        // dateClickHandler($(this));
    });
}
initCalender(getMonth(new Date()));

var clickCounter = 0;
$(".fa-angle-double-right").click(function() {
    $(".right-wrapper").toggleClass("is-active");
    $(this).toggleClass("is-active");
});
/*
function dateClickHandler(elem) {
    var day1 = parseInt($(elem).html());
    selectedDate = new Date(calendarYear, calendarMonth, day1);
    var tasks = getTaskByDate(selectedDate)
    displayTasks(tasks)
}

function displayTasks(tasks) {
    var divToDoHeader = $("#divToDoHeader");
    divToDoHeader.empty();
    divToDoHeader.append(selectedDate.toDateString());

    var divToDoList = $("#divToDoList");
    divToDoList.empty();
    if (tasks.length > 0) {
        tasks.forEach(task => {
            divToDoList.append(getTaskHtml(task));
        });
    } else {
        divToDoList.append("No record.");
    }
}

function getTaskHtml(task) {
    var borderColor = taskTopBarColors[task.taskId % 10];
    return `
        <div class="to-do-list-item">
            <div class="to-do-list-item-border" style="background-color:${borderColor}"></div>
            <div class="to-do-list-item-header">            
                <div><p class="to-do-list-item-header-task-type blue">${task.taskTitle}</p></div>                
                <div onclick="deleteTask(${task.taskId})"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg></div>                
            </div>

            <div class="to-do-list-item-content">
                ${task.taskDesc}
            </div>
            <div class="to-do-list-item-mini-function">
                <div onclick="makeTaskCompleted(${task.taskId})">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
                </div>
                <div onclick="editTask(${task.taskId})">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
                </div>                       
            </div>

        </div>
    `;
}
*/
$(".fa-angle-left").click(function() {
    getPrevMonth();
    // $(".main").addClass("is-rotated-left");
    // setTimeout(function() {
    //     $(".main").removeClass("is-rotated-left");
    // }, 195);
});

$(".fa-angle-right").click(function() {
    getNextMonth();
    // $(".main").addClass("is-rotated-right");
    // setTimeout(function() {
    //     $(".main").removeClass("is-rotated-right");
    // }, 195);
});
/*
function getTaskByDate(selectedDate) {
    var endDate = (new Date(selectedDate)).setDate(selectedDate.getDate() + 1);
    var dateTasks = allTasks.filter(task => task.date >= selectedDate && task.date < endDate);
    return dateTasks;
}

function deleteTask(deletedTaskId) {
    allTasks = allTasks.filter(task => task.taskId != deletedTaskId);
    let selectedDateTasks = getTaskByDate(selectedDate);
    displayTasks(selectedDateTasks);
}
*/



/*-----------------------addBtn--------------
const addBtn = document.querySelector('.add-btn')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupUpdateArea = document.querySelector('.popup-update-area')
const addMemoDeleteBtn = document.getElementById('add-memo-delete-btn')

addBtn.addEventListener('click', () => {
	popupWrapper.classList.remove('hidden')
	addBtn.classList.add('hidden')

})

addMemoDeleteBtn.addEventListener('click', () => {
	popupWrapper.classList.add('hidden')
	addBtn.classList.remove('hidden')
})
---*/