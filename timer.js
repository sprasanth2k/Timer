var minute = parseInt(document.getElementById("minute-input").value)
var second = parseInt(document.getElementById("second-input").value)
var temp,totalSeconds
var alarm = new Audio('alarm.mp3')
alarm.loop = true
var anim=0

var timer = () => {
    if(!anim)
    {
        document.querySelector('.timer-bg').style.animationPlayState = "running"
        anim = 1
    }
    minute = parseInt(minute)
    second = parseInt(second)
    if(second < 10)
    {
        second = "0" + second
    }
    if(minute < 10)
    {
        minute = "0" + minute
    }
    document.querySelector('.remaining-time').innerHTML = minute + " : " + second
    
    minute = parseInt(minute)
    second = parseInt(second)
    if(!second)
    {
        if(!minute)
        {
            alarm.play()
            clearInterval(temp)
            
        }
        else
        {
            second = 59
            minute--
        }
        
    }
    else
    {
        second--
    }
    
}


function validateTime()
{
    document.querySelector('.timer-bg').remove()
    alarm.pause()
    alarm.currentTime = 0

    let parent = document.querySelector('.time')
    let div = document.createElement('div')
    div.className = 'timer-bg'
    parent.append(div)
    clearInterval(temp)
    
    let f=1;
    minute = document.getElementById("minute-input").value;    
    second = document.getElementById("second-input").value;
    let pattern= /^\d+$/
    if(!minute || !pattern.test(minute) || parseInt(minute) > 60)
    {
        f=0;
    }
    if(!second || !pattern.test(second) || parseInt(second) > 60)
    {
        f=0;
    }
    if(f)
    {
        document.querySelector('.pause').style.display = "block"
        document.querySelector('.play').style.display = "none"
        document.querySelector('.start').style.display = "none"
        if(parseInt(second) < 10)
        {
            second = "0" + second
        }
        if(parseInt(minute) < 10)
        {
            minute = "0" + minute
        }

        totalSeconds = parseInt(minute)*60 + parseInt(second)
        temp = setInterval(timer, 1000)
        document.querySelector(".timer-bg").style.animation = "heightAnimate "+totalSeconds+"s linear 1s";
        
    }
    else
    {
        document.querySelector('.remaining-time').innerHTML = "00 : 00"
        alert("Please enter a valid time\nMinimum value 00:00\nMaximum value: 60:60");
    }
}

function play()
{
    temp = setInterval(timer, 1000)
    document.querySelector('.play').style.display = "none"
    document.querySelector('.pause').style.display = "block"
    document.querySelector('.start').style.display = "none"
}

function pause()
{
    anim=0
    if(!minute && !second)
    {
        document.querySelector('.play').style.display = "none"
        document.querySelector('.pause').style.display = "none"
        document.querySelector('.start').style.display = "block"
    }
    else
    {
        document.querySelector('.play').style.display = "block"
        document.querySelector('.pause').style.display = "none"
        document.querySelector('.start').style.display = "none"
        document.querySelector('.timer-bg').style.animationPlayState = "paused"
    }
    clearInterval(temp)
    
    alarm.pause()
    alarm.currentTime = 0

}

function reset()
{
    document.querySelector('.play').style.display = "none"
    document.querySelector('.pause').style.display = "none"
    document.querySelector('.start').style.display = "block"

    document.querySelector('#minute-input').value = ""
    document.querySelector('#second-input').value = ""
    minute = 0
    second = 0
    document.querySelector('.remaining-time').innerHTML = "00 : 00"
    
    document.querySelector('.timer-bg').remove()
    alarm.pause()
    alarm.currentTime = 0

    let parent = document.querySelector('.time')
    let div = document.createElement('div')
    div.className = 'timer-bg'
    parent.append(div)
    clearInterval(temp)
}