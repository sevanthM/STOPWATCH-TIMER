    let startbtn =document.getElementById("btn-start")
    let display = document.getElementById("display")
    let stopbtn = document.getElementById("btn-stop")

    let timedate = new Date()
    let sec = timedate.getSeconds()

    let count=0
    let minCount=0
    let hourCount=0

    let start = () => {
        x=setInterval(() => {
            count++
            if(count==60){
                minCount++
                count=0
                if(minCount==60)
            {
                hourCount++
                minCount=0
            }
            }
            display.innerText=`${hourCount} : ${minCount} : ${count}`
            
        }, 100);      
    }
    


    let stop = () => {
        clearInterval(x)
    }
    


    let clearAll = () => {
        display.innerText=`${0} : ${0} : ${0}`
        count=0
        minCount=0
        hourCount=0
        clearInterval(x)
    }