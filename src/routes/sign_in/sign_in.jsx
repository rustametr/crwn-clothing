
import { sign_in_with_google_popup, create_user_document_from_auth } from '../../utils/firebase/firebase.utils'
import SingUpForm from '../../components/sing-up-form/sing-up-form.component';

const SignIn = () => {
    const log_google_user = async () => {
        const {user} = await sign_in_with_google_popup();
        const user_doc_ref = await create_user_document_from_auth(user);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={log_google_user}>Sign with google popup</button>
            <SingUpForm/>
        </div>
    )
}

export default SignIn;