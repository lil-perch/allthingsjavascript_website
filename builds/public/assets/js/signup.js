var SIGNUP = SIGNUP || {};

SIGNUP.showSignUpPopup = function(event) {
    require(["mojo/signup-forms/Loader"], function(L) {
        L.start({
            "baseUrl": "mc.us14.list-manage.com",
            "uuid": "1f81364a0b90da8b492083129",
            "lid": "fb005a5a91"
        });
    });
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    event.preventDefault();
};

SIGNUP.notifyLinks = document.querySelectorAll('#notifyLink');

for (var i = 0; i < SIGNUP.notifyLinks.length; i++) {  
    if (SIGNUP.notifyLinks[i].nodeType === 1) {
        if (SIGNUP.notifyLinks[i].addEventListener) {
            SIGNUP.notifyLinks[i].addEventListener('click', SIGNUP.showSignUpPopup, false);
            SIGNUP.notifyLinks[i].addEventListener('touchstart', SIGNUP.showSignUpPopup, false);
        } else if (SIGNUP.notifyLinks[i].attachEvent) {
            SIGNUP.notifyLinks[i].attachEvent('onclick', SIGNUP.showSignUpPopup);
        }
    }
}
