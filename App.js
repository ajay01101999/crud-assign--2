import "./styles.css";
import "antd/dist/antd.css";

import { Table, Button } from "antd";
import React, { useState } from "react";
import ModalComp from './Modal';
import Header from './Header';

export default function App() {
  const dataSource = [
    { id: 1, name: "Ajay Sharma", age: "20", option: ["delete", "edit"] },
    { id: 2, name: "Shiv", age: "22", option: ["delete", "add"] }
  ];

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("Above 18");
  const [data, setData] = useState(dataSource);
  const [editEnable, setEditEnable] = useState({
    enable:false,
  });

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    {
      title: "Option",
      dataIndex: "option",
      render: (option, record) => (
        // option.map((btn) => (
        <div>
          <Button
            style={{ marginRight: "20px" }}
            type="link"
            onClick={() => handleDelete(record.id)}
          >
            {"delete".toUpperCase()}
          </Button>
          <Button onClick={(e) => handleEdit(record)}>edit</Button>
        </div>
      )
      // ))
    }
  ];

  const handleDelete = (id) => {
    var newData = [...data];
    for (var i = 0; i < newData.length; i++) {
      if (newData[i].id === id) {
        newData.splice(i, 1);
      }
    }
    setData(newData);
  };

  const handleEdit = (record) => {
    setModal(true);
    setName(record.name)
    setEditEnable({
      enable:true,
      index:record.id-1
    })
  };

  const addData = () => {
    const obj = {
      id: data.length + 1,
      name,
      age,
      option: ["delete", "edit"]
    };
    if(editEnable.enable){
      var arr = [...data];
      arr[editEnable.index].name=name;
      setData(arr)
      setEditEnable({enable:false})
      setModal(false)
    }else{
      setData((prevState) => [...prevState, { ...obj }]);
      setModal(false)
    }
  };

  // const showModal = () => {
  //   setModal(true);
  // };

  // const handleOk = () => {
  //   setModal(false);
  // };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <Header setModal={setModal} modal={modal} />
      <Table style={{ margin: "20px" }} columns={columns} dataSource={data} />
      <ModalComp editEnable={editEnable} modal={modal} addData={addData} handleCancel={handleCancel} setName={setName} name={name} setAge={setAge} />
    </div>
  );
}