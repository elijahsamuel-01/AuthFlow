import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Sider from "./Sider";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Sider />
        <Holder>
          <Div>
            <Outlet />
          </Div>
        </Holder>
      </Main>
    </div>
  );
};

const Div = styled.div`
  width: calc(100% - 200px);
  //   margin-left: 10px;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
  margin-top: 10px;
`;

const Main = styled.div`
  display: flex;
`;
