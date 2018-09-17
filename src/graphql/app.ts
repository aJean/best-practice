document.getElementById('gbtn').addEventListener('click', function () {
    fetch('http://test.baidu.com:4000/graphql', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: "{ getUser(index:2){name, id} }"})
    })
        .then(r => r.json())
        .then(res => console.log('data returned:', res.data));
});