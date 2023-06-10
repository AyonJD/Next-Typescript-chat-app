import { Typography } from '@mui/material';
import Card from '../shared/CardShape';
import { useContext } from 'react';
import { ApiContext } from '../../../Context/ApiContext';

const Message = () => {
    const { data } = useContext(ApiContext);
    
    return (
        <Card title="Users chat" >
            <Typography variant="h4">Messages here</Typography>
        </Card>
    );
};

export default Message;
