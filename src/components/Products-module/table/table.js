import { Table, Button,Switch ,NestedTable} from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector ,useDispatch } from "react-redux";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ProductsVariationAction } from "../Services/Actions/action";
const Tables = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const myState = useSelector((state) => state);
  const ProductsStatus = myState.ProductsReduce.Products || [];

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Product Type",
      dataIndex: "productType",
      key: "productType",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Sku",
      dataIndex: "sku",
      key: "sku",
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: "Price",
      dataIndex: "price",
      key: "price"
     ,
    },{
        title: "Active",
      dataIndex: "active",
      key: "active",
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
      render: (_, record: BrandItem) => (
        <span>
        <Switch checked={record.active} />
        </span>
      ),
    },
    
    {
        title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
        title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record: BrandItem) => (
        <span className="table-operation">
          <a onClick={()=>history.push(`/product-module/product/update/${record.id}`)}>Edit</a>
        </span>
      ),
    }
    
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
 const expandable = {
  render: (_, record) => (
    dispatch(ProductsVariationAction(record.id))
  )
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
        dataSource={ProductsStatus}
        onChange={onChange}
        key='id'
        rowKey='id'
        expandable={expandable}
      />
    </>
  );
};
export default Tables;
