var token;
try {
    var regex = /'Bearer[\s]+([A-z0-9\-]*)'/g;
    token = regex.exec(document.getElementsByTagName('HEAD')[0].innerHTML)[1];
} catch(e) {}

if (!token) {
    alert('You have to be logged in ;-)');
} else {
    alert(token);
}