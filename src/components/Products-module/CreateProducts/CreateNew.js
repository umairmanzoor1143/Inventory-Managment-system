import { Form, Input, Button, Select, Col, Row, Cascader,Divider } from "antd";
import UploadImage from "./UploadImg";
import { Empty, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { brandsAction } from "../../brand-module/Services/Actions/action";
import { ProCetagoriesAction } from "../../Cetagories-module/Services/Actions/action";
import { useEffect } from "react";
import { BRANDS_DATA } from "../../brand-module/Services/constent";
import { CETAGORIES_DATA } from "../../Cetagories-module/Services/constent";
import { useHistory, useParams } from "react-router";
import { PRODUCTS_DATA } from "../Services/constent";
import { ProductUpdateAction } from "../Services/Actions/action";
import { SuppliersAction } from "../../Suppliers/Services/Actions/action";
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
  const [form] = Form.useForm();
  const Dispatch = useDispatch();
  const myparams = useParams()
  const history = useHistory();
  useEffect(() => {
    if(myparams.id){
      Dispatch(ProductUpdateAction(myparams.id));
    }else{
      Dispatch(brandsAction());
      Dispatch(ProCetagoriesAction());
      Dispatch(SuppliersAction());
    }
      return () => {
        if(myparams.id){
          Dispatch({
            type : PRODUCTS_DATA.PRODUCT_RESET_STATE
          });
        }else{
          Dispatch({
            type : BRANDS_DATA.RESET_STATE_BRANS
          });
          Dispatch({
            type : CETAGORIES_DATA.RESET_CETAGORIES_STATE
          });
          form.resetFields();
        }
        
      };
  }, []);


  const myState = useSelector((state) => state);
  console.log(myState);
  const ProductStatus = myState.ProductsReduce.Product || [];
  useEffect(() => {
      // form.setFieldsValue(ProductStatus);
      console.log(ProductStatus);
  }, [ProductStatus]);
  const BrandStatus = myState.BrandsReduce.brands || [];
  const SuppliersStatus = myState.SuppliersReduce.Suppliers || [];
  const options = myState.CetagoriesReduce.Cetagories || [];
  console.log(options);
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
        <Divider orientation="left">Basic Information</Divider>
        <Form
          layout="vertical"
          style={{ margin: "30px", background: "#fff", padding: "30px" }}
          name="nest-messages"
          onFinish={onFinish}
          form={form}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="slug"
            label="Slug"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Row gutter={15}>
            <Col lg={12} md={12} sm={12}>
              <Form.Item
                name="supplier"
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
                name="brand"
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
                name="productType"
                label="Product Type"
              >
                <Select>
                  <Select.Option value="Eboves">Eboves</Select.Option>
                  <Select.Option value="OtherSuppliers">
                    Other Suppliers
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <Form.Item name="Stock" label="Stock Available At">
                <Select>
                  <Select.Option value="Web">Web</Select.Option>
                  <Select.Option value="Store">Store</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name='categorys'
            rules={[{ required: true }]}
            label="Category"
          >
            
            <Cascader options={options} />
            
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="Additional Infromation"
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
            <Button onClick={()=>history.push("/products")}>Cancel</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default CreateNewPage;
