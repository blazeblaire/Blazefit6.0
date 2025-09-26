const base_url = 'http://localhost:3000/';
const workoutPlan = document.querySelector('.workout-plan');
const btns = document.getElementsByClassName('buttons')
const bT = document.querySelectorAll('button')  // grab all the buttons


document.addEventListener('DOMContentLoaded', () => {
    //get workout plans from json
    fetch(`${base_url}plans.json`)
        .then(response => response.json())
        .then(data => {
            const plan = data;
            console.log(plan);

        })
        .catch(error => {
            workoutPlan.textContent = "Couldn't load workouts.";
            console.error(error);
        })

    // loop through each button and add event listener
    bT.forEach(button => {
        button.addEventListener('click', () => {
            // grab and store the mood
            const mood = button.getAttribute("data-mood");
            console.log(mood)
            // function to display workout
            disworkout(mood)
        })

    });

    function disworkout(mood) {
        // clear old content
        workoutPlan.innerHTML = ""
        // title goes here
        const rendPlan = plan[mood];
        const title = document.createElement('h2');
        title.textContent = rendPlan.feedback;
        workoutPlan.appendChild(title);

        //section containing the actual plans
        for (const sectionName in rendPlan.section) {
            const sectionTitle = document.createElement('h3');
            sectionTitle.textContent = sectionName;
            workoutPlan.appendChild(sectionTitle);

            const list = document.createElement('ul');
            plan.section[sectionName].forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
            });

            workoutPlan.appendChild(list);
        }
    }



})


