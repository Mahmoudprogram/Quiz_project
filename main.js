//getting all required elements 
let playerState = 0;
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    playerState = e.target.value;
})

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const countinue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .timer_text");
const ma = document.querySelector(".ma");
const co = document.querySelector(".controls");
console.log(ma);
start_btn.onclick =()=>{
    info_box.classList.add("activeInfo");// Show the info box
    
    co.classList.add("b");// hide the in
}

// if exit  button clicted
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");// hide the info box
 
    
}

// if continue  button clicted
countinue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");// hide the info box
    quiz_box.classList.add("activeQuiz");// Show the quiz box
    showQuestion(0);
     queCounter(1);
     startTimer(timeValue);
      startLine(0);
}
let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 10;
let widthValue = 0;
let userScore = 0;

const next_btn   = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

quit_quiz .onclick = () => {
    window.location.reload();
}
// If Next button Clicked 
next_btn.onclick = ()=>{
    if(que_count < questios[playerState].length -1){
        que_count++;
        que_numb++;
       
    showQuestion(que_count);
    queCounter( que_numb );
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
        
        
        
    startLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Question Completed");
        showResultBox();
    }
}


// getting question und options from array 
function showQuestion(index){
  
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questios[playerState][index].numb +'- '+ questios[playerState][index].question +'</span>';
    let arr=[];
    arr =ge4Numbers();
    let option_tag = [
                    '<div class="option"><span>'+ questios[playerState][index].options[0]+'</span></div>'
                    ,'<div class="option"><span>'+ questios[playerState][index].options[1]+'</span></div>'
                    ,'<div class="option"><span>'+ questios[playerState][index].options[2]+'</span></div>'
                    ,'<div class="option"><span>'+ questios[playerState][index].options[3]+'</span></div>'
    ];

   
           
    que_text.innerHTML = que_tag;
    let arr1= [];
    arr1= ge4Numbers();
    let arr2 = [];
     for (let i = 0; i <= 3; i++) {
        arr2.push(option_tag[arr1[i]-1]);
        
     }
     let str = arr2.toString();
      let str2= str.replace(',','');
      let str3= str2.replace(',','');
      let str4= str3.replace(',','');
      let str5= str4.replace(',','');
      option_list.innerHTML=str5;
     

    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++ ){
        option[i].setAttribute("onclick","optionSelected(this)");
    }

}

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    
    let userAns = answer.textContent;
    let correctAns = questios[playerState][que_count].answer;
    let allOption = option_list.children.length;
   
    console.log(correctAns);
    if(userAns == correctAns){
        console.log(userScore +=1);
        answer.classList.add("correct");
        console.log("Answer is Correct");
    }else{
        answer.classList.add("incorrect");
      
        // If answer is incorrect then automtically selected the correct answer
        for(let i = 0; i < allOption; i++ ){
            if( option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct");
            }
        }
    }

    //Once user Selected disabled all options
    for (let i = 0; i < allOption; i++) {
        option_list.children[i].classList.add("disabled");
        
    }
    next_btn.style.display = "block";
}
function showResultBox(){
    info_box.classList.remove("activeInfo");// hide the info box
    quiz_box.classList.remove("activeQuiz");// Show the quiz box
    result_box.classList.add("activeResult");// Show the Result box
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 50)
    {
        let scorTag = '<span>and nice,you got <p>'+ userScore +'</p> out of <p>'+questios.length +'</p></span>';
        scoreText.innerHTML = scorTag;
    }
    else if(userScore > 25)
    {
        let scorTag = '<span>and bad,you got <p>'+ userScore +'</p> out of <p>'+questios.length +'</p></span>';
        scoreText.innerHTML = scorTag;
    }
    else
    {
        let scorTag = '<span>and sorry,you got <p>'+ userScore +'</p> out of <p>'+questios.length +'</p></span>';
        scoreText.innerHTML = scorTag;
    }
}
function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questios[playerState][que_count].answer;
            let allOption = option_list.children.length;

            for(let i = 0; i < allOption; i++ ){
                if( option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class","option correct");
                }
            }
            for (let i = 0; i < allOption; i++) {
                option_list.children[i].classList.add("disabled");
                
            }
            next_btn.style.display = "block";
        }
    }
}
function startLine(time){
    counterLine = setInterval(timer,29);
    function timer(){
        time +=1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

function queCounter(index){
    const button_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag =  ' <span><p>'+ index +'</p>of<p>'+ questios[playerState].length +'</p>Question</span>';
    button_ques_counter.innerHTML = totalQuesCountTag;
}


function ge4Numbers() {
    var numbers = [];
    while(numbers.length < 4) {
    var newNr = (parseInt(Math.random() *4))+1;
    if (numbers.indexOf(newNr) == -1)
    {
        numbers.push(newNr);
       
    }
     
    }
    return numbers;
}
// loop through all dropdown elements






