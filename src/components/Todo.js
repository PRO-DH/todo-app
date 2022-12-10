import React from 'react';

//https://mui.com/material-ui/getting-started/learn/
import {ListItem, ListItemText, 
    InputBase, Checkbox, 
    ListItemSecondaryAction, IconButton} from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';


const Todo = ({ item }) => {

    // console.log(item);

    const {id, title, done} = item;

    // 삭제 이벤트 핸들러
    const removeHandler = e =>{
        console.log('삭제 버튼 클릭!');
        ItemList(itemList => itemList.concat(item));
    };

    // Todo 에게 보낼 삭제 함수
    const remove = target =>{
        console.log(target);
    }


        const filteredItemList
        = itemList.filter(item => {
            return target.id !== item.id;
        });
};

    return (
        <ListItem>
            <Checkbox checked={done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={id}
                    name={id}
                    value={title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            {/* 삭제 버튼 */}
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" >
                    <DeleteOutline/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );


export default Todo;