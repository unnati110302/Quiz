document.addEventListener("DOMContentLoaded", function(){

    const contain = document.getElementById("container");
    const question = document.getElementById("q");
    const option1 = document.getElementById("opt1");
    const l1 = document.getElementById("label1");
    const option2 = document.getElementById("opt2");
    const l2 = document.getElementById("label2");
    const option3 = document.getElementById("opt3");
    const l3 = document.getElementById("label3");
    const option4 = document.getElementById("opt4");
    const l4 = document.getElementById("label4");
    const prompt = document.getElementById("prompt");
    const next = document.getElementById("next");
    const save = document.getElementById("save");

    var marks = 0;
    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    const heading = document.createElement('h1');

    const ques_arr = {
        'The only muscle that never tires is?' : option2.value,
        'A substance capable of developing and maintaining masculine characteristics in reproductive tissues' : option1.value,
        'What is main cause for cancer?' : option4.value,
        'Which one of the following is a pillar of mental health?': option4.value,
        'Which eating disorder is characterized by an abnormally low body weight?' : option3.value,
        'Mammary glands are present in:' : option3.value,
        'How many bones are there in human body?' : option1.value,
        'The parts of the body that are made of dead cells are?' : option2.value,
        'Sphygmomanometer is used to measure' : option1.value,
        'Which of the following is not a part of the female reproductive system in human beings?' : option4.value,
    }

    const ans = ['androgen', 'inhibine', 'estrogen', 'dopamine','smoking','obesity', 'low blood pressure', 'both options 1 and 2','physical health','cognitive health', 'social health', 'All of the above', 'Schizophrenia', 'dysthymia', 'anorexia', 'binge eating', 'men', 'women', 'both', 'none', '206', '89', '193', '308', 'eyes', 'hair', 'fingers', 'lips', 'blood pressure', 'heart rate', 'pulse rate','body fat', 'Ovary', 'Uterus', 'Fallopian tube', 'vas deferens'];

    const anskey = ['heart', 'androgen', 'both options 1 and 2', 'All of the above', 'anorexia', 'both', '206',  'hair', 'blood pressure', 'vas deferens'];
    var m = 0;

    const q = Object.keys(ques_arr);
    var i = 1;
    var j = 0;
    var z = true;

    next.addEventListener("click", function(){
        z = true;
        m++;
        
        var radioButtons = document.querySelectorAll('input[name="options"]');
        radioButtons.forEach(function(radioButton) {
            radioButton.checked = false;
        });

        prompt.innerHTML ="";
        if(i<q.length){
            question.innerHTML = q[i];
            l1.textContent = ans[j];
            l2.textContent = ans[j + 1];
            l3.textContent = ans[j + 2];
            l4.textContent = ans[j + 3];
        }
        if(i==(q.length-1)){
            next.remove();
            document.getElementById('btn').appendChild(submit);
        }
        j += 4;
        i++; 
    });

    var key = 0;
    save.addEventListener("click", function(){
        const radioButton = document.querySelectorAll('input[name="options"]');
        let selectedButton = null;
        for(var k = 0; k<radioButton.length; k++){
            if(radioButton[k].checked){
                selectedButton = radioButton[k].value;
                break;
            }
        }
        if(selectedButton==null){
            prompt.innerHTML = "please select your answer";
        }
        else{
            if(selectedButton==ques_arr[q[key]] && z == true){
                prompt.innerHTML = "Correct Answer";
                prompt.style.color = 'green';
                z = false;
                key++;
                marks++;
            }
            else if(z==true){
                prompt.innerHTML = "Wrong answer, correct answer is " + anskey[m];
                prompt.style.color = 'red';
                z = false;
                key++;
            }
            else{
                prompt.innerHTML = "You have already answered this question";
            }
        }
    });

    submit.addEventListener("click", function(){
        heading.textContent = "Your score is " + marks + "/" + q.length;
        contain.innerHTML = "";
        contain.appendChild(heading);
    })

});