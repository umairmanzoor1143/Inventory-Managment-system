import { Table, Button, Switch } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const CetagoriesTable = () => {
  const Dispatch = useDispatch();
  const history = useHistory();
  const myState = useSelector((state) => state);
  const CetagoriesStatus = myState.CetagoriesReduce.Cetagories || [];
  console.log(CetagoriesStatus);
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Active", dataIndex: "active", key: "active",
    render: (_, record: BrandItem) => (
      <span>
      <Switch checked={record.active} />
      </span>
    ),},
    { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record: BrandItem) => (
        <span className="table-operation">
          <a onClick={()=>history.push(`/product-module/cetagory/update/${record.id}`)}>Edit</a>
        </span>
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <div className="flex">
        <div>
          <h3>Our Categories</h3>
        </div>
        <div>
          <Button>
            <Link to="/cetagories/createnew">+ New</Link>
          </Button>
        </div>
      </div>
      <Table
        childrenColumnName="childrens"
        columns={columns}
        style={{ margin: "30px" }}
        key='id'
        rowKey='id'
        expandable={{
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={CetagoriesStatus}
      />
    </>
  );
};
export default CetagoriesTable;
