var list = document.getElementsByClassName("input")
var button = document.getElementById('submit');
var answer = document.getElementById('answer');



button.onclick = (event) => {
    event.preventDefault()
    
    function calculateEpoch(input) {
        // alert("i have input. next alert is input")
        // alert(input)
        day = input.slice(0, 2);
        month = input.slice(3, 5);
        year = input.slice(6, 10);

        var num = Date.parse(`${year}-${day}-${month}`);
        // alert(`num: ${num}`);
        return num;
    };

    var newlist = [];

    // const list = [n1, n2, n3, n4, n5]
    // alert(list[0].value)

    for (date of list) {
        // alert(date.value)
        newlist.push(calculateEpoch(date.value));
    };

    let sum = 0;
    
    for (let i = 0; i < 5; i++) {
        sum += newlist[i];
    }

    const average = sum/5;
    // alert(average)

    var date = new Date(average);
    date = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()} and if you wanna get more specific it's also at ${date.getUTCHours()} hours. Assuming your inputs are at 0000H.`;
    // alert(date)
    document.getElementById('answer').innerHTML = date;
}
