function checkQuiz() {


    $("#check").on('click', () => {
        let box = document.querySelectorAll('.questionWrap')
        let counter = document.querySelector("#resultCounter").innerHTML;
        counterPoints = counter = "you got " + result + " points";
        let an1 = document.quiz.question1.value;
        let an2 = document.quiz.question2.value;
        let an3 = document.quiz.question3.value;
        let an4 = document.quiz.question4.value;
        let an5 = document.quiz.question5.value;
        let an6 = document.quiz.question6.value;
        let an7 = document.quiz.question7.value;
        let an8 = document.quiz.question8.value;
        let an9 = document.quiz.question9.value;
        let an10 = document.quiz.question10.value;
        let correct = 0;
        const sum = 10;


        if (an1 === "1") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[0].style.backgroundColor = "green"
        } else {
            box[0].style.backgroundColor = "red"

        }
        if (an2 === "1") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[1].style.backgroundColor = "green"
        } else {
            box[1].style.backgroundColor = "red"
        }
        if (an3 === "2") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[2].style.backgroundColor = "green"
        } else {
            box[2].style.backgroundColor = "red"
        }
        if (an4 === "4") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[3].style.backgroundColor = "green"
        } else {
            box[3].style.backgroundColor = "red"
        }
        if (an5 === "2") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[4].style.backgroundColor = "green"
        } else {
            box[4].style.backgroundColor = "red"
        }
        if (an6 === "3") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[5].style.backgroundColor = "green"
        } else {
            box[5].style.backgroundColor = "red"
        }
        if (an7 === "3") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[6].style.backgroundColor = "green"
        } else {
            box[6].style.backgroundColor = "red"
        }
        if (an8 === "4") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[7].style.backgroundColor = "green"
        } else {
            box[7].style.backgroundColor = "red"
        }
        if (an9 === "2") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[8].style.backgroundColor = "green"
        } else {
            box[8].style.backgroundColor = "red"
        }
        if (an10 === "1") {

            correct++;
            let result = correct * sum;

            document.querySelector("#resultCounter").innerHTML =
                "you got " + result + " points out of 100";
            box[9].style.backgroundColor = "green"
        } else {
            box[9].style.backgroundColor = "red"
        }
        if (correct == 0) {


            document.querySelector("#resultCounter").innerHTML =
                "You got no correct answer!"
        }
    })

}

function restartPage() {
    $("#restart").on('click', function () {
        window.location = "./trivia1.html";
    })
}
checkQuiz();
restartPage();