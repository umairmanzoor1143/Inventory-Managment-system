import { Table, Button, Switch } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, } from "react-router";
import DrawerPage from "../components/drawer";
import { useState } from "react";

const Tables = () => {
  const [editDrawer, setEditDrawer] = useState([]);
  const Dispatch = useDispatch();
  const history = useHistory();
  const myState = useSelector((state) => state);
  const outletStatus = myState.OutletsReduce.outlets || [];
 
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Manager",
      dataIndex: "managerId",
    },
    {
      title: "Active",
      dataIndex: "active",
      valueEnum: {
        true: {
          text: 'Active',
        },
        false: {
          text: 'Inactive',
        },
      },
      defaultSortOrder: "descend",
      
      render: (_, record: BrandItem) => (
        <span>
        <Switch checked={record.active} />
        </span>
      ),
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Action",
    dataIndex: "action",
    valueType: 'option',
    render: (_, record: BrandItem) => (
      <span className="table-operation">
        <a >Edit</a>
      </span>
    ),
  }
    
  ];
 
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <div className='flex'>
        <div>
          <h3>Our Outlets</h3>
        </div>
        <div>
          <Button><Link to='/outlets/createnew'>+ New</Link></Button>
        </div>
      </div>
      <Table
        style={{ margin: "30px" }}
        columns={columns}
        dataSource={outletStatus}
        onChange={onChange}
      />
    </>
  );
};
export default Tables;
