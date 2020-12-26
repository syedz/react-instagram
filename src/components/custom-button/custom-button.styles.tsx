import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: #0095f6;

    &:hover {
        background-color: #007ccf;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const getButtonStyles = (props: any) => {
    if (props.isGoogleSignIn) {
       return googleSignInStyles; 
    }

    return buttonStyles;
};

export const CustomButtonContainer = styled.button`
    letter-spacing: 0.5px;
    padding: 10px 35px;
    margin-top: 10px;
    font-weight: bolder;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;
    width: 100%;

    ${getButtonStyles}
`;