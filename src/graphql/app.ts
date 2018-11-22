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

    const xhr = new XMLHttpRequest();
    const data = new FormData();
    xhr.open('POST', 'http://test.baidu.com:4000/heihei', true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(e) {
        if (this.status == 200) {

        }
    };

    data.append('key', '12312');
    xhr.send(JSON.stringify({"a": "hello"}));
});