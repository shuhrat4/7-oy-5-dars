    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import Button from '@mui/material/Button';
    import CardActionArea from '@mui/material/CardActionArea';
    import CardActions from '@mui/material/CardActions';
    import { IMG_URL } from '../hook/useEnv';

    export default function CustomCard({ item }) {
    return (
        <Card
        className='!bg-gradient-to-r from-blue-500 to-blue-700 !text-white'
        sx={{
            maxWidth: 345,
            borderRadius: '12px',
            boxShadow: 3, 
        }}
        >
        <CardActionArea>
            <CardMedia
            className='!h-[400px] w-full object-cover' 
            component="img"
            image={`${IMG_URL}${item.poster_path}`} 
            alt={item.title || 'Film Image'} 
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {item.title}
            </Typography>
            <Typography variant="body2"  color="white" sx={{ marginTop: 1 }}>
                {item.overview || 'No description available.'} 
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button     >
        
            </Button>
        </CardActions>
        </Card>
    );
    }





    