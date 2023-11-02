const ctx = document.getElementById('realTimeChart').getContext('2d');

//-----Get Chart Data--------YSS-------
const getData = {
    labels: [],
    datasets:[
        {
            label: 'Real Time Data Analysis',
            data: [],
            borderWidth: 2,
            backgroundColor: "gold",
            borderColor:"coral",
            fill: true,
        },
    ],
}

const chartData = {
    type: 'line',
    data: getData,
    options:{
        responsive: true,
        scales:{
            x: {
                type: 'linear',
                position: 'bottom',
                grid:{
                    display: false
                },
            },
            y: {
                min: 0,
                max: 100,
                grid:{
                    display: false
                },
            },
        },
    },
}

const RandomChart = new Chart(ctx,chartData)

//Generate Random Data::-----YSS-----------

function realTimeChart(){
    const RandomData = Math.floor(Math.random() * 100);
    
    RandomChart.data.labels.push(RandomChart.data.labels.length);
    RandomChart.data.datasets[0].data.push(RandomData)

    // console.log(RandomChart.data.labels)

    RandomChart.update();
}
setInterval(realTimeChart, 2000);

//Chart.js ::-------YSS-----------

RandomChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Realtime Data: ${context.parsed.y}`;
        },
    },
};

function Animation(){
    anime({
        targets: RandomChart.data.datasets[0].data,
        translateY: '300px',
        delay: 300,
        duration: 300,   
        easing: 'easeInOutSine', 
        loop: true,
        direction: 'alternate',
        update: function (anim) {
            RandomChart.update();
            console.log("Updated")
        },
    });
}
Animation()

//Mode Change::
const Toggle = document.getElementById('mode-change');

Toggle.addEventListener('click',()=>{
    Toggle.classList.toggle('fa-moon');

    if(Toggle.classList.toggle('fa-sun')){
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        document.body.style.transition = '2s';
    }else{
        document.body.style.background = 'grey';
        document.body.style.color = 'white';
        document.body.style.transition = '2s';
        // document.realTimeChart.style.color = 'white'
    }
})