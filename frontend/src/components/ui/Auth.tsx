import { FcGoogle } from "react-icons/fc";
import { Button } from './Button';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../libs/firebase";

const Auth = () => {

    const provider = new GoogleAuthProvider();

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log("Google credential:", credential);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

    return (
        <Button
            onClick={signIn}
            className="flex items-center justify-center bg-slate-200 hover:bg-slate-300 py-2 rounded-md"
        >
            <FcGoogle className="text-xl" />
        </Button>
    );
};

export default Auth;





// _OAuthCredential {providerId: 'google.com', signInMethod: 'google.com', pendingToken: null, idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjM2UzZTU1ODExMWM3Yz…G6zC51yTl2eTckj_N6_n7PtscL4RvG3vXK2BskCOt7bjufklQ', accessToken: 'ya29.a0AXooCgtd8_sq57DAqi3l6Xfji4ASAb3AyRbMja3WBba…bVaCgYKAcoSARESFQHGX2Mist5QFVMx1f8rwDSJnoNMLw0171'}
// accessToken
// : 
// "ya29.a0AXooCgtd8_sq57DAqi3l6Xfji4ASAb3AyRbMja3WBbaL4UfdOvxiNZA33AiH7nzSqQU2cyhJnwlmMCLVaoiuO_uDnMtPFpAHGaa-662mjAEHrz1Y5L2b0ESsIYXZ9h4Hq3neg4bwvyIIfzXsBHhQIJgbLY0koB7acjbVaCgYKAcoSARESFQHGX2Mist5QFVMx1f8rwDSJnoNMLw0171"
// idToken
// : 
// "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjM2UzZTU1ODExMWM3YzdhNzVjNWI2NTEzNGQyMmY2M2VlMDA2ZDAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjY5ODU2NTExOTgxLXJvYTF1NTlpa3UyZm5iNWU5bGNjcmk0c3JnbTloODVuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjY5ODU2NTExOTgxLXJvYTF1NTlpa3UyZm5iNWU5bGNjcmk0c3JnbTloODVuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5MjgxNzczMzY0NjAyNDI1OTIxIiwiZW1haWwiOiJtb2hpdHRoYWt1cjk5MDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJoMmt4aXpSSnMtSXJlRzJlcVhJLUdRIiwiaWF0IjoxNzE0ODA0MTg4LCJleHAiOjE3MTQ4MDc3ODh9.nR9hCCB8NCOBco9jzn8l6613O7dFhTdjIDYzTgkoRH-raAEjcMjNEdEm59Lz-nnAffVT3aoIJ7Zg00HN7X0pNA26GHUEoXYpmtSCYMGIfaTcixuYO8eR_F4rxDM4c9VzJZPHfKbeKH2PU_bHO7W2A4ngcODoTL2fvRycNUGhvY4P443WcAFW7HsckudAe6DlCwV48V8EUD9JhTTp5SaPftGH8wTJYKVKGY9S1136BafG4zxF7duAet-xy5TWkjtWPrdVUsXNUm5TbhnTwmxQch-FJaH-0Th7VOzO6G6zC51yTl2eTckj_N6_n7PtscL4RvG3vXK2BskCOt7bjufklQ"
// pendingToken
// : 
// null
// providerId
// : 
// "google.com"
// signInMethod
// : 
// "google.com"
// [[Prototype]]
// : 
// AuthCredential