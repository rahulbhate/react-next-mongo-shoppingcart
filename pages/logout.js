import AuthHelperMethods from '../utils/AuthHelperMethods';
function Logout(){
    const Auth = new AuthHelperMethods();
    return (
        <div>
            <div>
                { Auth.logout() }
            </div>
        </div>
    );
}

export default Logout;
