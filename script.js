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