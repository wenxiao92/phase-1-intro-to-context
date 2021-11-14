// Your code here
function createEmployeeRecord(recordArray){

return {
    firstName: recordArray[0],
    familyName: recordArray[1],
    title: recordArray[2],
    payPerHour: recordArray[3],

    timeInEvents: [],
    timeOutEvents: []
}
}


function createEmployeeRecords(nestedArray){
    //using map method to return as many arrays of objects
    return nestedArray.map(arrays => createEmployeeRecord(arrays))
    
}


function createTimeInEvent(employeeRecord, dateTimeInStamp){
//Create an object and push this oject into timeInEvents
    let obj = {
        type: "TimeIn",
        date: dateTimeInStamp.slice(0,10),
        hour: parseInt(dateTimeInStamp.slice(11,15),10)
    }

    employeeRecord.timeInEvents.push(obj)
    
    //console.log(employeeRecord)
    //return the whole employee record
    return employeeRecord
}


function createTimeOutEvent(employeeRecordOut, dateTimeOutStamp){
    
    //Create an object and push this object into timeOutEvents
        let obj = {
            type: "TimeOut",
            date: dateTimeOutStamp.slice(0,10),
            hour: parseInt(dateTimeOutStamp.slice(11,15),10)
        }
    
        employeeRecordOut.timeOutEvents.push(obj)
    
        //console.log(employeeRecordOut)
        //return the whole employee record
        return employeeRecordOut
}


function hoursWorkedOnDate(employeeRecord, date){
    // let hours = employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour
    // //console.log(hours/100)
    // return hours/100

    // if(employeeRecord.timeInEvents[0].date === date){
    //     return ((employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour))/100
    // }
    
    let timeIn = employeeRecord.timeInEvents.filter(function(ele){
        return ele.date === date;
    })
    
    let timeOut = employeeRecord.timeOutEvents.filter(function(ele){
        return ele.date === date;
    })

    let hoursWorked = timeOut[0].hour - timeIn[0].hour
    //console.log(hoursWorked)
    return hoursWorked/100
}


function wagesEarnedOnDate(employeeRecord, date){
    let hours = hoursWorkedOnDate(employeeRecord, date)
    let payOwed = hours * (employeeRecord.payPerHour)
    //console.log(payOwed)
    return payOwed

    
    // for(let i = 0; employeeRecord.timeInEvents.length; i++){
    //     let obj = employeeRecord.timeInEvents[i]
    //     if(obj.date === date)
    //     return hoursWorkedOnDate(employeeRecord, obj.date) * employeeRecord.payPerHour
    // }
}


function allWagesFor(employeeRecord){
    let total = 0
    for(let i = 0; i< employeeRecord.timeInEvents.length; i++) {
        total += wagesEarnedOnDate(employeeRecord, employeeRecord.timeInEvents[i].date)
        //console.log(total)
    }
    return total

}


function calculatePayroll(employeeRecords){
//console.log(employeeRecords)

    let total = 0
    for(let i = 0; i< employeeRecords.length; i++){
        
        total += allWagesFor(employeeRecords[i])
        //console.log(total)
    }
    return total
}