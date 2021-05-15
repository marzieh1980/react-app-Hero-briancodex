import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjFive} from './Data';

function SignUp() {
    return (
        <>
            <HeroSection {...homeObjFive} /> 
        </>
    )
}

export default SignUp;