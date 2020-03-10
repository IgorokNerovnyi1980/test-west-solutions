import React, {useState} from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeIsAutorization} from '../redux/actions'
// components
import Button from '../components/Button';
import Input from '../components/Input';

const Wrapper = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Box = styled.div `
    min-width:30%;
    min-height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:${variables.boxShadow};
    @media (max-width:${variables.mediaW_2}) {
        width:95%;
    }
    form{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;
    }
`;

const LoginPage = ({
    isAutorization = false,
    profile = null,
    changeStatusAutorization = () => {}
}) => {
    const inputsValue = {
        login: '',
        password: ''
    }

    const [values, setValues] = useState(inputsValue);

    const handleChangeInputValue = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {login, password} = profile;
        if (values.login === login || values.password === password) 
            changeStatusAutorization(true);

        }
    
    return (
        <Wrapper>
            {
                isAutorization
                    ? <Redirect to='/profile'/>
                    : <Box >
                            <form onSubmit={handleSubmit}>
                                <Input
                                    type='text'
                                    name='login'
                                    value={values.login}
                                    placeholder='enter login'
                                    fnChange={handleChangeInputValue}/>
                                <Input
                                    type='password'
                                    name='password'
                                    value={values.password}
                                    placeholder='enter password'
                                    fnChange={handleChangeInputValue}/>
                                <Button
                                    type='submit'
                                    text='Sign in'
                                    disabled={values.password === '' || values.login === ''}/>
                            </form>
                        </Box>
            }
        </Wrapper>
    )

}

const STP = state => (
    {isAutorization: state.isAutorization, profile: state.profile}
);
const DTP = dispatch => ({
    changeStatusAutorization: (bool) => dispatch(changeIsAutorization(bool))
})

export default connect(STP, DTP,)(LoginPage);