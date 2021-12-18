import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const SelectSearchParameters = (props) => {
    return (
        <div>
            <FormControl sx={{ minWidth: 120, marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.selectingSorting[1]}
                    label="Сортировать по"
                    onChange={(e)=> {
                        props.setSelectingSorting(e.target.value);
                        if (props.startIndex > 0){
                            props.resetValue();
                            props.fetchUserById();
                        }
                    }}
                >
                    {props.selectSorting.map((category, index) => {
                        return (
                            <MenuItem value={index}>{category}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120, marginTop: 2, marginLeft: 3 }}>
                <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.selectedCategory[1]}
                    label="Категория"
                    onChange={(e)=>{props.setSelectedCategory(e.target.value)}}
                >
                    {props.selectCategories.map((category, index) => {
                        return (
                            <MenuItem value={index}>{category}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectSearchParameters;