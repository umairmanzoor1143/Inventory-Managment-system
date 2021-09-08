import { Layout } from "antd";
import { Menu, Typography } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import {
  UserOutlined,
  GithubOutlined,
  CopyrightTwoTone,
} from "@ant-design/icons";
import CreateProductPage from "./Products-module/CreateProducts/CreateProductPage";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import CreateNewPage from './Products-module/CreateProducts/CreateNew.js'
import CreateBrandPage from './brand-module/CreateBrand/CreateBrandPage'
import CreateNewBrand from './brand-module/CreateBrand/CreateNewBrand'
import OutletsPage from './Outlets-module/OutletsPage/OutletsPage'
import CreateNewOutlets from './Outlets-module/OutletsPage/CreateNewOutlets'
import AttributesPage from './Attributes-module/AttributesPage/AttributesPage'
import CreateNewAttribute from './Attributes-module/AttributesPage/CreateNewAttributes'
import CetagoriesPage from "./Cetagories-module/CetagoriesPage/CetagoriesPage";
import CreateNewCetagories from './Cetagories-module/CetagoriesPage/CreateNewCetagories'
import CreateNewSuppliers from './Suppliers/SuppliersPage/CreateNewSuppliers'
import SuppliersPage from './Suppliers/SuppliersPage/SuppliersPage'
const HomePage = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const { Text } = Typography;
  const SmFont = {
    fontSize: "smaller",
  };
  const FlexEnd = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 1px 4px rgb(0 21 41 / 8%)",
  };
  const AvatarStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
    width: "85px",
    justifyContent: "space-between",
  };
  return (
    <>
      <Layout>
        <Sider width="250px" style={{ minHeight: "100vh" }}>
          <Menu
            style={{
              width: 250,
              height: "100%",
              paddingTop: "50px",
              boxShadow: "2px 0 6px rgb(0 21 41 / 30%)",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item style={SmFont} key="1">
              Option 1
            </Menu.Item>
            <SubMenu
              style={SmFont}
              key="sub1"
              icon={<AppstoreOutlined />}
              title="Products"
            >
              <Menu.Item style={SmFont} key="2" >
                <Link to='/products'>
                Products
                </Link>
              </Menu.Item>
              <Menu.Item style={SmFont} key="3">
                <Link to='/brand'>
                Brands
                </Link>
              </Menu.Item>
              <Menu.Item style={SmFont} key="4">
              <Link to='/outlets'>
                Outlets
                </Link>
              </Menu.Item>
              <Menu.Item style={SmFont} key="5">
              <Link to='/cetagories'>
                Cetagories
                </Link>
              </Menu.Item>
              <Menu.Item style={SmFont} key="6">
              <Link to='/attributes'>
                Attributes
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              style={SmFont}
              key="sub2"
              icon={<SettingOutlined />}
              title="Precurement"
            >
              <Menu.Item style={SmFont} key="7">
                <Link to='/suppliers'>
                Suppliers
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item style={SmFont} key="8">
              Stock Control
            </Menu.Item>
            <Menu.Item style={SmFont} key="9">
              Orders Processing
            </Menu.Item>
            <Menu.Item style={SmFont} key="10">
              Sreach Table
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={FlexEnd}>
            <div style={AvatarStyle}>
              <Avatar icon={<UserOutlined />} />
              <Text type="secondary">eboves</Text>
            </div>
          </Header>
          <Content>
            <Switch>
              <Route path="/products" exact>
                <CreateProductPage />
              </Route>
              <Route path="/products/createnew" exact>
                <CreateNewPage />
              </Route>
              <Route path="/brand" exact>
                <CreateBrandPage />
              </Route>
              <Route path="/brand-module/createbrand">
                <CreateNewBrand />
              </Route>
              <Route path="/outlets" exact>
                <OutletsPage />
              </Route>
              <Route path="/outlets/createnew">
                <CreateNewOutlets />
              </Route>
              <Route path="/attributes" exact>
                <AttributesPage />
              </Route>
              <Route path="/attribute/createnew">
                <CreateNewAttribute />
              </Route>
              <Route path="/cetagories" exact>
                <CetagoriesPage />
              </Route>
              <Route path="/cetagories/createnew">
                <CreateNewCetagories />
              </Route>    
              <Route path="/product-module/cetagory/update/:id" exact>
                <CreateNewCetagories />
              </Route> 
              <Route path='/product-module/brands/update/:id' exact>
                <CreateNewBrand />
              </Route>
              <Route path='/suppliers' exact>
                <SuppliersPage />
              </Route>
              <Route path='/suppliers/createnew' exact>
                <CreateNewSuppliers />
              </Route>
              <Route path='/precurement/supplier/update/:id' exact>
                <CreateNewSuppliers />
              </Route>
              <Route path='/product-module/product/update/:id' exact>
                <CreateNewPage />
              </Route>
            </Switch>
          </Content>
          <Footer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "50px",
                justifyContent: "space-around",
              }}
            >
              <GithubOutlined />
              <Text style={SmFont} type="secondary">
                Copyright <CopyrightTwoTone /> 2020 Zidoary
              </Text>
            </div>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default HomePage;
