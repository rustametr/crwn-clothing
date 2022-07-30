import { sign_in_with_google_popup, create_user_document_from_auth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const log_google_user = async () => {
        const {user} = await sign_in_with_google_popup();
        console.log(user)
        const user_doc_ref = await create_user_document_from_auth(user);
        console.log(user_doc_ref)
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={log_google_user}>Sign with google</button>
        </div>
    )
}

export default SignIn;