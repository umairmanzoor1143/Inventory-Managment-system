
import {
  Form,
  Input,

  Select,
  
  Col,
  Row,
} from 'antd';

 const SevenInputs = () => {
    return (
        <>
        <Form  style={{width:'100%'}}>
          <Row gutter={15}>
            <Col lg={8} md={8} sm={8}>
            <Form.Item  label="Name">
              <Input />
            </Form.Item>
            </Col>
            <Col lg={8} md={8} sm={8}>
            <Form.Item label="Active">
              <Select >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            </Col>
            <Col lg={8} md={8} sm={8}>
            <Form.Item label="Create At">
              <Select >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            </Col>
            </Row>
        </Form>

        </>
      );
    

  };
  export const TwoInputs = () => {
    return (
        <>
          
          <Form  style={{width:'100%'}}>
          <Row gutter={24}>
            <Col lg={12} md={12} sm={12}>
            <Form.Item  label="Name">
              <Input />
            </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12}>
            <Form.Item label="Active">
              <Select >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            </Col>
            </Row>
        </Form>
          
        </>
      );
    

  };
 export default SevenInputs;