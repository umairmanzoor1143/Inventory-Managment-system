import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const CetagoriesTable = () => {
  const Dispatch = useDispatch();
  const history = useHistory();
  const myState = useSelector((state) => state);
  const CetagoriesStatus = myState.CetagorieReduce.Cetagories || [];
  console.log(CetagoriesStatus);
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Active", dataIndex: "active", key: "active" },
    { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => <a>Edit</a>,
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
