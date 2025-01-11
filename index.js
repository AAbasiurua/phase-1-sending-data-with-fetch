function submitData(username, useremail) {
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            name : username,
            email : useremail
        })
    })
    .then(res  => res.json())
    .then(object => document.body.append(object.id))
    .catch(function (error) {
        alert('Oh No!');
        document.body.append(error.message);
    })
};
