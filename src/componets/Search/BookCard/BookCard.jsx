import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {CardActionArea, Chip} from '@mui/material';
import {NavLink} from "react-router-dom";

export const BookCard = (props) => {
    return (
        <div>

            <Card sx={{ maxWidth: 300, height: 425}}>
                <CardActionArea>
                    <NavLink to={"book/" + props.cardId} style={{ textDecoration: 'none' }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={props.imageURL}
                        />
                        <CardContent>
                            <Typography sx={{height: 50, overflow: "hidden", textOverflow: "ellipsis"}} gutterBottom variant="body1" component="div">
                                {props.bookTitle}
                            </Typography>
                            <Typography sx={{height: 50, overflow: "hidden", textOverflow: "ellipsis"}} variant="body2" color="text.secondary" component="div">
                                {props.bookAuthor}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {props.category !== undefined && <Chip label={props.category} size="small" variant="outlined" color="secondary" />}
                        </CardActions>
                    </NavLink>
                </CardActionArea>
            </Card>

        </div>
    );
};

/*

<Card sx={{ maxWidth: 300, height: 500}}>
    <CardActionArea>
        <CardMedia
            component="img"
            height="300"

            image={props.imageURL}
        />
        <CardContent>
            <Typography sx={{maxHeight: 100, overflow: "hidden", textOverflow: "ellipsis"}} gutterBottom variant="body1" component="div">
                {props.bookTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.bookAuthor}
            </Typography>
        </CardContent>
    </CardActionArea>
</Card>

    display: grid;
    align-content: stretch;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 30px;
 */

export default BookCard;