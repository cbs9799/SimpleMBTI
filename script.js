function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function hideModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}


function calculateResults() {
    const quiz = document.getElementById("quiz");
    const results = document.getElementById("results");

    const score = {
        E: 0,
        I: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
    };

    // 검증 로직 추가 시작
    let allQuestionsAnswered = true;
    const questions = quiz.querySelectorAll(".question");

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const checkedInputs = question.querySelectorAll("input[type=radio]:checked");

        if (checkedInputs.length === 0) {
            allQuestionsAnswered = false;
            alert(`문항 ${i + 1}에 대해 답변을 선택해주세요.`);
            break;
        }
    }

    if (!allQuestionsAnswered) {
        return;
    }
    // 검증 로직 추가 끝

    for (const input of quiz.querySelectorAll("input[type=radio]:checked")) {
        score[input.value]++;
    }

    const personality = [
        score.E > score.I ? "E" : "I",
        score.N > score.S ? "N" : "S",
        score.T > score.F ? "T" : "F",
        score.J > score.P ? "J" : "P"
    ].join("");

    results.innerHTML = `<h2>당신의 성격 유형은 ${personality}입니다.</h2>`;

    showModal();
}

const modal = document.getElementById("myModal");
const closeButton = document.getElementsByClassName("close")[0];

closeButton.onclick = function () {
    hideModal();
};

window.onclick = function (event) {
    if (event.target == modal) {
        hideModal();
    }
};
