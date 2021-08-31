import { Table, Button ,Switch} from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const BrandTables = () => {
  const Dispatch = useDispatch();
  const history = useHistory();
  const myState = useSelector((state) => state);
  const BrandStatus = myState.BrandsReduce.brands || [];
  console.log(BrandStatus);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Active",
      dataIndex: "active",
      width: '10%',
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
      sorter: (a, b) => a.name.length - b.name.length,
      },
    
    {
        title: "Feature",
      dataIndex: "feature",
      render: (_, record: BrandItem) => (
        <span>
        <Switch checked={record.featured} />
        </span>
      ),
    },
    {
        title: "Created At",
      dataIndex: "createdAt",
      
    },
    {
        title: "Action",
      dataIndex: "action",
      valueType: 'option',
      render: (_, record: BrandItem) => (
        <span className="table-operation">
          <a onClick={()=>history.push(`/product-module/brands/update/${record.id}`)}>Edit</a>
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
          <h3>Our Brands</h3>
        </div>
        <div>
          <Button><Link to='/brand-module/createbrand'>+ New</Link></Button>
        </div>
      </div>
      <Table
        style={{ margin: "30px" }}
        columns={columns}
        dataSource={BrandStatus}
        onChange={onChange}
      />
    </>
  );
};
export default BrandTables;
