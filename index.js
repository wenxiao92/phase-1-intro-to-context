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

function createTimeInEvent(employeeRecord, dateTimeStamp){
    
    // let record = createEmployeeRecord(employeeRecord)
    // console.log(record)
    // record.timeInEvents.type = "TimeIn"
    // record.timeInEvents.date = dateTimeStamp.slice(0,10)
    // record.timeInEvents.time = dateTimeStamp.slice(11,15)
    // console.log(record)

    // employeeRecord.timeInEvents.type = "TimeIn"
    // employeeRecord.timeInEvents.date = dateTimeStamp.slice(0,10)
    // employeeRecord.timeInEvents.time = dateTimeStamp.slice(11,15)
    // console.log(employeeRecord)
    // return employeeRecord
    
    //console.log(employeeRecord)
    let record = Object.assign({},employeeRecord)
    record.timeInEvents.type = "TimeIn"
    record.timeInEvents.date = dateTimeStamp.slice(0,10)
    record.timeInEvents.time = dateTimeStamp.slice(11,15)
    console.log(record)
    return(record)

}