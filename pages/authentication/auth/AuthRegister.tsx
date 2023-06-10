
import { Box, Typography, Button } from '@mui/material';
import Link  from 'next/link';

import CustomTextField from '../../../src/components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

interface registerType {
    handleFunc: (e: any) => void;
    submitFunc: () => void;
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
  }

const AuthRegister = ({ handleFunc, submitFunc, title, subtitle, subtext }: registerType) => {
    return(
        <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
            <Stack mb={3}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='username' mb="5px">User Name</Typography>
                <CustomTextField handleChange={handleFunc} name="username" id="username" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                <CustomTextField handleChange={handleFunc} name="email" id="email" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <CustomTextField handleChange={handleFunc} name="password" id="password" variant="outlined" fullWidth />
            </Stack>
            <Button onClick={submitFunc} color="primary" variant="contained" size="large" fullWidth >
                Sign Up
            </Button>
        </Box>
        {subtitle}
    </>
    )
};

export default AuthRegister;
