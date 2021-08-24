import { Table, Button } from "antd";
import { Link } from "react-router-dom";
const CetagoriesTable = () => {
  const columns = [
    
    {
        title: "Name",
      dataIndex: "price",
    },{
        title: "Active",
      dataIndex: "active",
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
          <h3>Our Categories</h3>
        </div>
        <div>
          <Button><Link to='/cetagories/createnew'>+ New</Link></Button>
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
export default CetagoriesTable;
