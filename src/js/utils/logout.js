import Utils from "./utils";
import Config from "../config/config";
import CheckUserAuth from "../auth/check-user-auth"

export const logout = () => {
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    CheckUserAuth.checkLoginState();
}