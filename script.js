
function delay(num) {
    return new Promise(resolve => setTimeout(resolve, num));
}

// async - used before any function to make it an asynchronous function. It allows the use of the await keyword inside the function.    
// await - used before a Promise to pause the execution of the function until the Promise is resolved or rejected. It can only be used inside an async function.
// await is a method that pauses the execution of an async function until a Promise is resolved or rejected. It can only be used inside an async function.



function getId(){
   let idn = document.getElementById("idn");
   let ids = idn.value;
   getData(ids);
}

async function getData(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await res.json();

    console.log(data);

    // Also display it inside the table
    let table = document.getElementById("table-body");
    let row = `
        <tr>
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.userId}</td>
            <td>${data.completed}</td>
        </tr>
    `;
    table.innerHTML += row;

    // // Optional: Show in 'datas' div for confirmation (you can remove this if not needed)
    // document.getElementById("datas").innerHTML += `<h1><strong>ID:</strong> ${data.id}</h1>`;
    // document.getElementById("datas").innerHTML += `<h2><strong>Title:</strong> ${data.title}</h2>`;
    // document.getElementById("datas").innerHTML += `<h3><strong>userId:</strong> ${data.userId}</h3>`;
    // document.getElementById("datas").innerHTML += `<h3><strong>Completed:</strong> ${data.completed}</h3>`;
}

// now we need to display the data in the table and set a range for the data 
// we will use the fetch API to get the data from the API and then display it in the table

async function getDataRange() {
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    document.getElementById("table-body").innerHTML = ""; // Clear old data
    for (let i = start; i <= end; i++) {
        await getData(i);
    }
}

// now what do we need to do in order to run this 
// we need to call the getDataRange function when the button is clicked
document.getElementById("getDataBtn").addEventListener("click", getDataRange);