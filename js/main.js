var ip = document.getElementById('user_input'); 
var matchListContacts = document.getElementById('matchlistcontacts'); 
var matchListCalendar = document.getElementById('matchlistcalendar');
var matchListSlack = document.getElementById('matchlistslack');
var matchListDropBox = document.getElementById('matchlistdropbox');
var matchListTweet = document.getElementById('matchlisttweet'); 
var Empty = document.getElementById('empty'); 
var NoString = document.getElementById('nostring');

var Contact = './data/contacts.json';
var Calender = './data/calendar.json';
var Slack = './data/slack.json';
var Tweet = './data/tweet.json';
var DropBox = './data/dropbox.json';


function showIP(){
    Promise.all([
        fetch('./data/contacts.json'),
        fetch('./data/calendar.json'),
        fetch('./data/slack.json'),
        fetch('./data/dropbox.json'),
        fetch('./data/tweet.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then((data) => {
        
        const inputValue = document.getElementById('user_input').value;
        //objArray = [];
        
        finalContactsArray =[];
        contactsArray= []
        contactsArray.push(data[0])

        finalCalendarArray =[];
        calendarArray= []
        calendarArray.push(data[1])

        finalSlackArray =[];
        slackArray= []
        slackArray.push(data[2])

        finalDropBoxArray =[];
        dropboxArray= []
        dropboxArray.push(data[3])

        finalTweetArray =[];
        tweetArray= []
        tweetArray.push(data[4])

        
    if(ip.value.length === 0){
        var nostring = "Enter a Query to Search"
        NoString.innerHTML = nostring
    }

    // ******* For Contacts ************

        contactsArray[0].forEach(obj1 => {
            Object.entries(obj1).forEach(([key, value]) => {
                if(key == "matching_terms" && value.includes(inputValue)) { 
                    objArray1 =  obj1;
                    finalContactsArray.push(obj1);
                }  
            })
            return finalContactsArray; 
        }) 
        if(finalContactsArray.length===0) {
            var e = "No Contact Information found related to this search!"
            Empty.innerHTML = e  
        }
           
        outputHtmlContacts(finalContactsArray);
        finalContactsArray =[]


    // ********** For Calendar ************

        calendarArray[0].forEach(obj2 => {
        Object.entries(obj2).forEach(([key, value]) => {
            if(key == "matching_terms" && value.includes(inputValue)) { 
                objArray2 =  obj2;
                finalCalendarArray.push(obj2);
            }
       })
        return finalCalendarArray;     
    }) 
    if(finalCalendarArray.length===0) {
        var e = "No Calendar Information found related to this search!"
        Empty.innerHTML = e  
    }
    
    outputHtmlCalendar(finalCalendarArray);
    finalCalendarArray = []

    // ******** For Slack ************

    slackArray[0].forEach(obj3 => {
    Object.entries(obj3).forEach(([key, value]) => {
        if(key == "matching_terms" && value.includes(inputValue)) { 
            objArray3 =  obj3;
            finalSlackArray.push(obj3);
        }
    })

   return finalSlackArray;     
}) 
if(finalSlackArray.length===0) {
    var e = "No Slack Information found related to this search!"
    Empty.innerHTML = e  
}


outputHtmlSlack(finalSlackArray);
finalSlackArray=[]

// ******* For DropBox ************

dropboxArray[0].forEach(obj4 => {
    Object.entries(obj4).forEach(([key, value]) => {
        if(key == "matching_terms" && value.includes(inputValue)) { 
            objArray4 =  obj4;
            finalDropBoxArray.push(obj4);
        }
    })
    return finalDropBoxArray;     
}) 

if(finalDropBoxArray.length===0) {
    var e = "No Dropbox Information found related to this search!"
    Empty.innerHTML = e  
}

outputHtmlDropBox(finalDropBoxArray);
finalDropBoxArray = []

// ******* For Tweet ************

tweetArray[0].forEach(obj5 => {
    Object.entries(obj5).forEach(([key, value]) => {
        if(key == "matching_terms" && value.includes(inputValue)) { 
            objArray5 =  obj5;
            finalTweetArray.push(obj5);
        }
    })
    return finalTweetArray;     
}) 

if(finalTweetArray.length===0) {
    var e = "No Information found related to this search!"
    Empty.innerHTML = e  
}

outputHtmlTweet(finalTweetArray);
finalTweetArray = []
});
}

