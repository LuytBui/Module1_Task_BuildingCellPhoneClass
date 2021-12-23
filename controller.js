let allContact = [];

function displayHTML(cellPhone, divID) {
    let result = `    <table class="cellPhone">
                     <tr> 
                     <td colspan="2" ><strong>${cellPhone.name}</strong></td>
                     <td class="alignRight"><span>Number: ${cellPhone.phoneNumber}</span></td>
                     </tr>
                     <tr>
                     <td class="alignRight" colspan="3"><span>Batery: ${cellPhone.batery}%</span></td>
                     </tr>
                     <tr>  <td class="monitor" colspan="3" id="${cellPhone.name}-monitor"><textarea id="" cols="50" rows="10">${cellPhone.monitor}</textarea></td>  </tr>      
                     <tr> 
                     <td>
                     <button id="${cellPhone.name}-power">ON/OFF</button>
                     </td>
                     <td>
                     <button  id="${cellPhone.name}-charge">Charge</button></td>
                     <td>
                     <button id="${cellPhone.name}-message">Message </button>
                     </td></tr>
                     <tr>
                     <td>
                     <button id="${cellPhone.name}-inbox">Inbox</button></td>
                     <td><button  id="${cellPhone.name}-sent">Sent</button>
                     </td></tr></table>`;
    // console.log(result);
    document.getElementById(divID).innerHTML = result;
    document.getElementById(cellPhone.name + '-power').addEventListener('click', function () {
        cellPhone.power();
        displayHTML(cellPhone,divID);
    });
    document.getElementById(cellPhone.name + '-message').addEventListener('click', function () {
        cellPhone.sendMessage();
        displayHTML(cellPhone,divID);
    });
    document.getElementById(cellPhone.name + '-sent').addEventListener('click', function () {
        cellPhone.checkSent();
        displayHTML(cellPhone,divID);
    });
    document.getElementById(cellPhone.name + '-inbox').addEventListener('click', function () {
        cellPhone.checkInbox();
        displayHTML(cellPhone,divID);
    });
    document.getElementById(cellPhone.name + '-charge').addEventListener('click', function () {
        cellPhone.charge();
        displayHTML(cellPhone,divID);
    });
}


// function cellPhonePower(cellPhone) {
//     cellPhone.power();
// }