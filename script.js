function displGreetTime() {
    const curDateTime = new Date().toLocaleString(); 

    const greetMsage = `
        <div class="message greeting jamie">
            <div class="sender">Jamie</div>
            <div class="text">Hello! Nice to meet you.</div>
            <div class="time">${curDateTime}</div>
        </div>
    `;

    $('#messages').append(greetMsage);

    scrolBott();
}

function sendInp() {
    const userInp = $('#message').val();
    if (userInp.trim() === '') return;

    const curDateTime = new Date().toLocaleString(); 

    const message = `
        <div class="message user">
            <div class="sender">You</div>
            <div class="text">${userInp}</div>
            <div class="time">${curDateTime}</div>
        </div>
    `;

    $('#messages').append(message);

    handleResp(userInp);

    scrolBott();
    
    $('#message').val('');
}

function handleResp(userInp) {
    const jamieResp = getResp(userInp);
    const curDateTime = new Date().toLocaleString(); 

    const respMsage = `
        <div class="message jamie">
            <div class="sender">Jamie</div>
            <div class="text">${jamieResp}</div>
            <div class="time">${curDateTime}</div>
        </div>
    `;

    $('#messages').append(respMsage);
    
    scrolBott();
}

function getResp(userInp) {
    const lowerCaseInp = userInp.toLowerCase();

    if (lowerCaseInp.includes('jamie')) {
        return 'Can I help you?';
    } else if (userInp.endsWith('!')) {
        if (lowerCaseInp.includes('?')) {
            return 'Please give me some time to resolve the issue.';
        } else {
            return 'Please remain calm.';
        }
    } else if (lowerCaseInp.endsWith('?')) {
        return 'Yes';
    } else {
        return 'Sorry, I don’t understand.';
    }
}

function scrolBott(){
    var msagecontnr = document.getElementById("messages");
    msagecontnr.scrollTop = msagecontnr.scrollHeight;
}

$(document).ready(function() {
    displGreetTime();
});