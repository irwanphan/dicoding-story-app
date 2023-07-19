import Utils from '../utils/utils';
import Config from '../config/config';
 
const CheckUserAuth = {
    excludeRedirectPage: ['login.html', 'register.html'],
    
    checkLoginState() {
        const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
        const isUserSignedIn = Boolean(userToken);
        const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);
    
        if (isUserSignedIn) {
            if (isUserOnAuthPage) {
                window.location.href = '/';
            } else {
                console.log('User is signed in');
            }
        } else {
            if (!isUserOnAuthPage) {
                window.location.href = '/login.html';
            }
        }

        return {
            isUserSignedIn
        }
    },
    
    _isUserOnAuthPage(pages) {
        const filteredPages = pages.filter((item) => window.location.pathname.endsWith(item));
        return Boolean(filteredPages.length);
    },
};
 
export default CheckUserAuth;