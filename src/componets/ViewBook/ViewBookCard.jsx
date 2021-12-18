import React from 'react';
import {Navigate, useParams} from "react-router-dom";
import style from './ViewBookCard.module.css'
import Button from "@mui/material/Button";


const ViewBookCard = (props) => {
    let {bookId} = useParams();
    if (props.valueBook.length === 0) {
        return <Navigate  to={"/"}/>
    }
    return (
        <div>
            <div className={style.view__book__container}>
                <div className={style.book__image}>
                    <img src={props.valueBook[bookId].volumeInfo.imageLinks && props.valueBook[bookId].volumeInfo.imageLinks.thumbnail}/>
                    <div>
                        {props.valueBook[bookId].saleInfo.saleability !== "NOT_FOR_SALE" &&
                        <Button sx={{display: "block",maxWidth: "100%", marginTop: 1}} href={props.valueBook[bookId].saleInfo.buyLink}
                                 target={"_blank"}
                                 variant="contained"
                                 color={"warning"}
                                 size="medium">
                            Приобрести
                        </Button>
                        }
                        {props.valueBook[bookId].volumeInfo.previewLink &&
                        <Button sx={{display: "block",maxWidth: "100%", marginTop: 1}} href={props.valueBook[bookId].volumeInfo.previewLink}
                                 target={"_blank"}
                                 variant="contained"
                                 color={"inherit"}
                                 size="medium">
                            Бесплатный фрагмент
                        </Button>
                        }
                    </div>

                </div>
                <div className={style.book__info}>
                    <span className={style.book__categories}>{props.valueBook[bookId].volumeInfo.categories && props.valueBook[bookId].volumeInfo.categories.join(" / ")}</span>
                    <h1>{props.valueBook[bookId].volumeInfo.title}</h1>

                    <p className={style.book__author}>{props.valueBook[bookId].volumeInfo.authors && props.valueBook[bookId].volumeInfo.authors.join(", ")}</p>

                    <div className={style.book__description}>
                        <p>{props.valueBook[bookId].volumeInfo.description}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ViewBookCard;