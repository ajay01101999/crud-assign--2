import React from 'react';
import { Modal, Input, Select } from 'antd';

const Option = Input;

const ModalComp = ({ editEnable, modal, addData, handleCancel, setName, name, setAge }) =>{
    return (
        <div>
            <Modal
                title={editEnable.enable?'EDIT DATA':'ADD DATA'}
                visible={modal}
                onOk={addData}
                onCancel={handleCancel}
            >
                <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="input"
                style={{ width: "460px", marginBottom: "20px" }}
                placeholder="Enter Name"
                />
                <Select
                className="select"
                defaultValue="Above 18"
                onChange={(e) => setAge(e)}
                >
                <Option value="Above 18">Above 18</Option>
                <Option value="Below 18">Below 18</Option>
                </Select>
                
            </Modal>
        </div>
    )
}

export default ModalComp;