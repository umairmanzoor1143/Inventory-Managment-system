import { Table, Button, Switch, Spin } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

const Tables = () => {
  const history = useHistory();
  const [loading , setLoading] = useState(true)
  const myState = useSelector((state) => state);
  const SuppliersStatus = myState.SuppliersReduce.Suppliers || [];

  console.log(SuppliersStatus);
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
          <a onClick={()=>history.push(`/precurement/supplier/update/${record.id}`)}>Edit</a>
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
          <Button><Link to='/suppliers/createnew'>+ New</Link></Button>
        </div>
      </div>
      
      <Table
        style={{ margin: "30px" }}
        columns={columns}
        dataSource={SuppliersStatus}
        onChange={onChange}
        key='id'
        rowKey='id'
        
      />
    </>
  );
};
export default Tables;
