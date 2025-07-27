function getCurrentDay(){

    let now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    const day = days[now.getDay()];

    document.querySelector('.currentDay').innerHTML = day;
}


function getCurrentDate(){

    let now = new Date();
    
    // document.querySelector('.currentDate').innerHTML= now.toLocaleString();

    return now.toLocaleDateString();
}

let currentDate = getCurrentDate();

document.querySelector('.currentDate').innerHTML = currentDate ; 

getCurrentDay();


document.querySelector('.button-CreateABlog').addEventListener('click', function(){
    const element = document.createElement('input');
    element.className = 'input';
    const button = document.createElement('button');
    
    button.className = 'submitButton'
    button.textContent = 'Submit Blog'
    
    document.body.appendChild(element);
    document.body.appendChild(button);

    document.querySelector('.submitButton').addEventListener('click', function(){

        
        if(document.querySelector('.input').value === ''){
            alert("The blog is empty");
        }
        else{
                const button1 = document.createElement('button');
                button1.className = '.deleteButton'
                button1.textContent = 'Delete Blog'
                const blogs = document.createElement('h1');
                blogs.textContent = document.querySelector('.input').value;
                document.body.appendChild(blogs);
                blogs.appendChild(button1);

                document.querySelector('.input').value = '';

                button1.addEventListener('click', function(){
                    console.log("The delete is clicked");
                    blogs.remove();
                })
                // document.querySelector('.deleteButton').addEventListener('click', function(){
                //     console.log("The delete is clicked");
                // });                
        }                
    });    
});

