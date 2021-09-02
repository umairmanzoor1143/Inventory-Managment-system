import { Table, Button, Switch, Spin } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


const Tables = () => {
  const [loading , setLoading] = useState(true)
  const myState = useSelector((state) => state);
  const AttributesStatus = myState.AttributesReduce.Attributes || [];

  console.log(AttributesStatus);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      
    },{
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (_, record: BrandItem) => (
        <span>
        <Switch checked={record.active} />
        </span>
      ),

    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record: BrandItem) => (
        <span className="table-operation">
          <a>Edit</a>
        </span>
      ),
    },
    
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
    
    

      <div className='flex'>
        <div>
          <h3>Our Attributes</h3>
        </div>
        <div>
          <Button><Link to='/attribute/createnew'>+ New</Link></Button>
        </div>
      </div>
      
      <Table
        style={{ margin: "30px" }}
        columns={columns}
        dataSource={AttributesStatus}
        onChange={onChange}
        key='id'
        rowKey='id'
        
      />
    </>
  );
};
export default Tables;
