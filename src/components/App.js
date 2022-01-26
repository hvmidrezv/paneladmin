import { Layout } from "antd";
import { Routes, Route } from 'react-router-dom';

import Footer from "./generic/Footer";
import Header from "./generic/Header";
import Sidebar from "./generic/Sidebar";
import '../assets/css/general.css'
import Dashboard from "./generic/Dashboard";
import List from "./person/List";
import Page404 from "./generic/Page404";
import Full from "./person/Full";
import New from "./person/New";
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header>Header</Header>
        <Layout>
          <Sidebar />
          <Content className="content">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='persons' element={<List />} />
              <Route path='persons/new' element={<New />} />
              <Route path='persons/:id' element={<Full />} />
              <Route path='*' element={< Page404 />} />


            </Routes>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
