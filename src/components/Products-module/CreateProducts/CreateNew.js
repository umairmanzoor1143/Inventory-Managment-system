import { Form, Input, Button, Select, Col, Row,Cascader } from "antd";
import UploadImage from "./UploadImg";
import { Empty, Card } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { brandAction, suppliersAction } from "../../../Services/Actions/action";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const CreateNewPage = () => {
  const myState = useSelector((state) => state);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(brandAction());
    Dispatch(suppliersAction());
  }, []);
  const BrandStatus = myState.BrandsReduce.Brands || [];
  const SuppliersStatus = myState.suppliersReduce.suppliers || [];

  console.log(myState);

  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Card
        title="Create New"
        bordered={false}
        style={{ width: "90%", margin: 50, textAlign: "left" }}
      >
        <Form
          layout="vertical"
          style={{ margin: "30px", background: "#fff", padding: "30px" }}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Slug"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Row gutter={15}>
            <Col lg={12} md={12} sm={12}>
              <Form.Item
                name={["Supplier", "Supplier"]}
                label="Supplier"
                rules={[{ required: true }]}
              >
                <Select>
                  {SuppliersStatus.map((item) => (
                    <>
                      <Select.Option value={item.name}>
                        {item.name}
                      </Select.Option>
                    </>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <Form.Item
                name={["Brand", "Brand"]}
                label="Brand"
                rules={[{ required: true }]}
              >
                <Select>
                  {BrandStatus.map((item) => (
                    <>
                      <Select.Option value={item.name}>
                        {item.name}
                      </Select.Option>
                    </>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col lg={12} md={12} sm={12}>
              <Form.Item
                name={["ProductType", "ProductType"]}
                label="Product Type"
              >
                <Select>
                  {/* <Select.Option value="Eboves">Eboves</Select.Option>
                  <Select.Option value="OtherSuppliers">Other Suppliers</Select.Option> */}
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <Form.Item
                name={["Stock", "Stock"]}
                label="Stock Available At"
              >
                <Select>
                  <Select.Option value="Web">Web</Select.Option>
                  <Select.Option value="Store">Store</Select.Option>

                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name={["user", "age"]}
            rules={[{ required: true }]}
            label="Category"
          >
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={["user", "Description"]} label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name={["user", "Additional Infromation"]}
            label="Additional Infromation"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <UploadImage />
          </Form.Item>
          <Form.Item>
            <Empty />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ marginRight: 20 }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <Button>Cancel</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default CreateNewPage;
