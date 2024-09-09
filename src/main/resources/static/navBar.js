fetch('/api/current')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => savingData(data))
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

const savingData = (data) => {
    console.log(data);
    let roles = data.authorities;
    let bodyRolesString = '';
    for (let i = 0; i < roles.length; i++) {
        bodyRolesString += roles[i].authority.substring(5);
        bodyRolesString += i < (roles.length - 1) ? ", " : "";
    }
    document.getElementById('data').innerHTML =
        `<tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.surname}</td>
            <td>${data.username}</td>
            <td>${bodyRolesString}</td>
        </tr>`;
}