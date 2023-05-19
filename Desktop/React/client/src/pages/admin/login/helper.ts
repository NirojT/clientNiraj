import { IToasterData } from "../../../global/itoaster";
import { ILoginData, ILoginDataError } from "./interface";

export class LoginClass {
    validate = (data: ILoginData) => {
        let errors = {} as ILoginDataError;
        if (data.username === '') errors.username = 'username is required';
        if (data.password === '') errors.password = 'password is required';
        return errors;
    }
    signIn = (
        data: ILoginData,
        setDataError: any,
        signUp: any,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setData: any,
    ) => {
        const errors = this.validate(data);
        setLoading(true);
        if (Object.keys(errors).length > 0) {
            setLoading(false);
            setDataError(errors);
            setToasterData({
                message: 'Please fill all the fields',
                severity: 'warning',
                open: true
            })
        }
        else {
            signUp(data)
                .then((res: boolean) => {
                    setLoading(false);
                    if (res) {
                        setToasterData({
                            message: 'Login successful',
                            severity: 'success',
                            open: true
                        })
                        setData({
                            username: '',
                            password: ''
                        })
                        setDataError({} as ILoginDataError);
                        window.location.replace('/');
                    }
                    else {
                        setToasterData({
                            message: 'Login failed',
                            severity: 'error',
                            open: true
                        })
                    }
                })
                .catch((err: any) => {
                    setLoading(false);
                    setToasterData({
                        message: 'Login failed',
                        severity: 'error',
                        open: true
                    })
                })
        }
    }
}

