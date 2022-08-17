const questions = [
  {
    question: 'Who is the prime minister of India?',
    answers :[
      {text:'Amit Shah',correct:false},
      {text:'Rajnath Singh',correct:false},
      {text:'Rahul Gandhi',correct:false},
      {text:'Narendra Modi',correct:true},
    ],
  },
  {
    question: 'What are the primary color?',
    answers :[
      {text:'Red,Green,Yellow,Blue',correct:true},
      {text:'Red,Green,Brown,Blue',correct:false},
      {text:'Red,Green,White,Blue',correct:false},
      {text:'Red,Green,Gray,Blue',correct:false},
    ],
  },
  {
    question: 'Who is the president of India?',
    answers :[
      {text:'Draupadi Murmu',correct:true},
      {text:'Parnab Mukharjee',correct:false},
      {text:'Rajnath Singh',correct:false},
      {text:'Partibha Patil',correct:false},
    ],
  },
]


function showquestion(){
  document.getElementById("start").style.display = 'none';
  document.getElementById("quizDiv").style.display = 'block';
  const count = 0;
  document.getElementById('question').innerHTML=questions[count].question;
  for (let i = 0; i < questions[count].answers.length; i++) {
      const htmlRows ='<button class="ans" type="button" value="'+questions[count].answers[i].text+'" status="'+questions[count].answers[i].correct+'">'+questions[count].answers[i].text+'</button>';
      document.getElementById('answerDiv').insertAdjacentHTML("beforeend",htmlRows);
  }
}

function showprequestiion(){
  document.getElementById('answerDiv').innerHTML=""
  document.getElementById('question').innerHTML=""
  var pre = document.getElementById('previous').value;
  var nxt = document.getElementById('next').value;
  if(pre==0){
    document.getElementById('previous').style.display='none';
    document.getElementById('next').style.display='block';
  }
  document.getElementById('previous').value =parseInt(pre)-1;
  document.getElementById('next').value = parseInt(nxt)-1;
  document.getElementById('question').innerHTML=questions[parseInt(pre)-1].question;
  for (let i = 0; i < questions[parseInt(pre)-1].answers.length; i++) {
    const htmlRows ='<button class="ans" type="button" value="'+questions[parseInt(pre)-1].answers[i].text+'" status="'+questions[parseInt(pre)-1].answers[i].correct+'">'+questions[parseInt(pre)-1].answers[i].text+'</button>';
    document.getElementById('answerDiv').insertAdjacentHTML("beforeend",htmlRows);
  }
}

function shownextquestiion(){
  document.getElementById('answerDiv').innerHTML=""
  document.getElementById('question').innerHTML=""
  var pre = document.getElementById('previous').value;
  var nxt = document.getElementById('next').value;
  // alert(parseInt(nxt));
  if(questions.length==(parseInt(nxt)-1)){
    document.getElementById('previous').style.display='block';
    document.getElementById('next').style.display='none';
  }
  document.getElementById('previous').value =parseInt(pre)+1;
  document.getElementById('next').value = parseInt(nxt)+1;
  document.getElementById('question').innerHTML=questions[parseInt(nxt)+1].question;
  for (let i = 0; i < questions[parseInt(nxt)+1].answers.length; i++) {
      const htmlRows ='<button class="ans" type="button" value="'+questions[parseInt(nxt)+1].answers[i].text+'" status="'+questions[parseInt(nxt)+1].answers[i].correct+'">'+questions[parseInt(nxt)+1].answers[i].text+'</button>';
      document.getElementById('answerDiv').insertAdjacentHTML("beforeend",htmlRows);
  }
}


