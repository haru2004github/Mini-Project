let addTaskInput = document.querySelector('#addTaskInput')
let searchInput = document.querySelector('.searchInput')
let forms = document.querySelectorAll('form');

let addTaskForm = forms[0];
let searchForm = forms[1];
let listItem = document.querySelector('.listItem')
let showList = document.querySelector('.showList')


let lists = localStorage.getItem("lists");

// Check if there are lists in local storage
if (lists) {
    lists = JSON.parse(lists);
} else {
    lists = [];
}






addTaskForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    // input isset or not 
    if(addTaskInput.value.trim() == ""){
        addTaskInput.classList.add('border-red')
        let addAlert = document.querySelector('.addAlert')
        addAlert.classList.remove('hidden')
        addAlert.innerHTML ="You need to fill something..."

    }else{

        if(lists.length == 0){
        lists.push(addTaskInput.value.trim()) // there is no data in list array 

        }else{
        lists.unshift(addTaskInput.value.trim()) // add the data from the front
        }
        // refresh data input value 
        addTaskInput.value ="";

        // store data in localStorage 
        localStorage.setItem("lists", JSON.stringify(lists));

        // refresh my list display 
        showList.innerHTML =""
        // run loop list item again 
        start(lists)
        location.reload()
    }
})


// auto show 
if(lists.length > 0){
    start(lists)
}else{
    showList.innerHTML=`
    <div class="flex justify-center items-center text-red" style="height: 100%;font-size:1.5rem;">
        There is nothing to do!
    </div>
                        `
}

//total display 

if(lists.length > 0){
    let totalDisplay = document.querySelector('.totalDisplay')

     // get data form localStorage 
     lists = localStorage.getItem("lists");
     // Json to array 
     lists = JSON.parse(lists);

    totalDisplay.innerHTML= `Total - ${lists.length}`
}else{
    let totalDisplay = document.querySelector('.totalDisplay')
    totalDisplay.innerHTML= "Total - 0"
}

// show list
function start(lists){


    lists.forEach(function(item) {
        let itemIndex = lists.indexOf(item);
        showList.innerHTML +=
        `
        <div class="listItem flex justify-between gap-x-10 parentNode">          
                <input id="content${itemIndex}" class="content" type="text"  value="${item}" disabled placeholder="Write something!" >
                        
                <div class="flex items-center">
                    <div class="flex gap-x-2 items-center">
                        <label for="content${itemIndex}" id="${itemIndex}" title="${item}" type="button" class="btn editBtn">
                            <i id="${itemIndex}" class="fas fa-edit"></i>
                        </label>
                        <button id="${itemIndex}" title="${item}" type="submit" class="btn updateBtn hidden">
                            <i id="${itemIndex}" class="fas fa-paper-plane"></i>
                        </button>
                        <button id="${itemIndex}" title="${item}" type="button" class="btn deleteBtn">
                            <i id="${itemIndex}" class="fas fa-trash"></i>
                        </button>
                    </div>
                </div> 
            </div>`
    });
}

//edit btn 
let editBtns = document.querySelectorAll('.editBtn')
editBtns.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Find the closest ancestor element with class "parentNode"
        let parentNode = e.target.closest('.parentNode');

        // Find all elements with class "content" within the ancestor element
        let content = parentNode.querySelectorAll('.content');
        content.forEach((c)=>{
            c.removeAttribute('disabled')
        })

        // find the element where the class is editBtn 
        parentNode.querySelectorAll('.editBtn').forEach((btn)=>{
            btn.classList.add('hidden')
        })

        // find the element where the class is updateBtn 
        let updateBtn= parentNode.querySelectorAll('.updateBtn');
        updateBtn.forEach((btn)=>{
            btn.classList.remove('hidden')
        })
    });
});

//updateBtn 
let updateBtn = document.querySelectorAll('.updateBtn');
updateBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        // Find the closest ancestor element with class "parentNode"
        let parentNode = e.target.closest('.parentNode');
        let content = parentNode.querySelectorAll('.content')
        content.forEach((c)=>{
            let updateValue = c.value
            let indexToUpdate = e.target.id

            if(c.value != ""){
                 // get data form localStorage 
             lists = localStorage.getItem("lists");
             // Json to array 
             lists = JSON.parse(lists);
            //  update data 
             lists[indexToUpdate] = updateValue

            //  then restore in localStorage 
             localStorage.setItem("lists", JSON.stringify(lists));

             // refresh my list display 
             showList.innerHTML =""
             // run loop list item again 
             start(lists)
             // then refresh the webpage 
             location.reload()
            }else{
                c.classList.add('border-red')
            }
            
        })
    })
})


// deleteBtn
let deleteBtns = document.querySelectorAll('.deleteBtn')
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', (e) => {
            // get data form localStorage 
            lists = localStorage.getItem("lists");
            // Json to array 
            lists = JSON.parse(lists); 

            // index of element i wanna remove 
            let indexToRemove = e.target.id;

            // remove the index of element in array 
            if (indexToRemove >= 0 && indexToRemove < lists.length) {
                lists.splice(indexToRemove, 1); 
                localStorage.setItem("lists", JSON.stringify(lists));
                // refresh my list display 
                showList.innerHTML =""
                // run loop list item again 
                start(lists)
                // then refresh the webpage 
                location.reload()
            }  
        });
    });



    // for search list 
    searchForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        if(searchInput.value !== ""){
            lists = localStorage.getItem("lists");
            lists = JSON.parse(lists); 

            let searchItems = lists.filter(function (item) {
                return item === searchInput.value.trim();
            });

            // refresh my list display 
            showList.innerHTML =""
            // run loop list item again 
            start(searchItems)
        }else{
            searchInput.classList.add('border-red')
            let searchAlert = document.querySelector('.searchAlert')
            searchAlert.classList.remove('hidden','border-red')
            searchAlert.innerHTML ="Please fill out this field..."
            // refresh my list display 
            showList.innerHTML =""
            // run loop list item again 
            start(lists)
        }


       
    })









