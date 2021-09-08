import { Table, Button ,Switch} from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { brandsAction } from "../Services/Actions/action";
import axios from "axios";
import { BRANDS_DATA } from "../Services/constent";
import { useEffect, useState } from "react";

const BrandTables = () => {
  
  const [toggle , settoggle] = useState(false)
  const Dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    Dispatch(brandsAction());
    return () => {
      Dispatch({
        type : BRANDS_DATA.RESET_STATE_BRANS
      });
    }
  }, []);
  const myState = useSelector((state) => state);
  const BrandStatus = myState.BrandsReduce.brands || [];
  console.log(BrandStatus);
  const ActiveToggle = (e) => {
    settoggle(e.Active)
    console.log(e);
    const data = {active : e.Active}
    axios.put(`http://localhost:4040/brands/toggle-active/${e.id}`)
  }
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
        <Switch checked={record.active} onChange={(e)=>{ActiveToggle( {Active : e, id :record.id })}}/>
        </span>
      ),
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
