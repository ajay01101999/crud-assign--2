import React from 'react';
import { Typography, Button } from 'antd';

const Header = ({ setModal, modal }) =>{
    return (
        <div>
            <Typography>
                <h1
                style={{
                    margin: "20px",
                    backgroundColor: "lightgray",
                    borderRadius: "8px",
                    padding: "10px",
                    color: "white"
                }}
                >
                Table using Ant design
                </h1>
            </Typography>
            <Button
                type="danger"
                onClick={() => {
                setModal(!modal);
                }}
            >
                Add Task
            </Button>
        </div>
    )
}

export default Header;