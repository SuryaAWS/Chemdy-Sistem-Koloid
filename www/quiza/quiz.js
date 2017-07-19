//menginisiasi apps
$(document).ready(function () {
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;

//meload data pertanyaan		 
$.getJSON('quiz.json', function(data) {
for(i=0;i<data.quizlist.length;i++){ 
questionBank[i]=new Array;
questionBank[i][0]=data.quizlist[i].question;
questionBank[i][1]=data.quizlist[i].option1;
questionBank[i][2]=data.quizlist[i].option2;
questionBank[i][3]=data.quizlist[i].option3;
questionBank[i][4]=data.quizlist[i].option4;
questionBank[i][5]=data.quizlist[i].option5;
}
numberOfQuestions=questionBank.length; 
displayQuestion();
})

//menampilkan pertanyaan 
function displayQuestion(){
 var rnd=Math.random()*5;
rnd=Math.ceil(rnd);
 var q1;
 var q2;
 var q3;
 var q4;
 var q5;

if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];q5=questionBank[questionNumber][5];}
if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q4=questionBank[questionNumber][3];q5=questionBank[questionNumber][4];q1=questionBank[questionNumber][5];}
if(rnd==3){q3=questionBank[questionNumber][1];q4=questionBank[questionNumber][2];q5=questionBank[questionNumber][3];q1=questionBank[questionNumber][4];q2=questionBank[questionNumber][5];}
if(rnd==4){q4=questionBank[questionNumber][1];q5=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q2=questionBank[questionNumber][4];q3=questionBank[questionNumber][5];}
if(rnd==5){q5=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];q3=questionBank[questionNumber][4];q4=questionBank[questionNumber][5];}
$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="4" class="option">'+q4+'</div><div id="5" class="option">'+q5+'</div>');

$('.option').click(function(){
if(questionLock==false){questionLock=true;	
//jawaban benar
if(this.id==rnd){
$(stage).append('<div class="feedback1">BENAR</div>');
score++;
}
//jawaban salah	
if(this.id!=rnd){
$(stage).append('<div class="feedback2">SALAH</div>');
}
setTimeout(function(){changeQuestion()},1000);
}})
}

//menampilkan pertanyaan selanjutnya
function changeQuestion(){
questionNumber++;
	
if(stage=="#game1"){stage2="#game1";stage="#game2";}
else{stage2="#game2";stage="#game1";}
	
if(questionNumber<numberOfQuestions){displayQuestion();}
else{displayFinalSlide();}
	
$(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
$(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
}
	
//menampilkan review dan hasil
function displayFinalSlide(){
$(stage).append('<div class="questionText">Kamu telah menyelesaikan Quiz<br><br>Jumlah Pertanyaan: '+numberOfQuestions+'<br>Jawaban Benar: '+score+'</div>');
}
	
});
