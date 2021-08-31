import { Table, Button,Switch } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Tables = () => {
 
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Product Type",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Sku",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: "Price",
      dataIndex: "price",
    },{
        title: "Active",
      dataIndex: "active",
      sorter: true,
      width: '10%',
      valueEnum: {
        true: {
          text: 'Active',
        },
        false: {
          text: 'Inactive',
        },
      },
    },
    
    {
        title: "Created At",
      dataIndex: "createdAt",
    },
    {
        title: "Action",
      dataIndex: "action",
    }
    
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <div className='flex'>
        <div>
          <h3>Our Products</h3>
        </div>
        <div>
          <Button><Link to='/products/createnew'>+ New</Link></Button>
        </div>
      </div>
      <Table
        style={{ margin: "30px" }}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </>
  );
};
export default Tables;
