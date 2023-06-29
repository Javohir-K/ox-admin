import { useContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import { UserContext, UserContextProvider } from "./userContext";

function App() {
  // const { userInfo } = useContext(UserContext);

  return (
    <UserContextProvider>
      <div className="app">
        <Routes>
          <Route element={<LoginPage />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;

// curl  -H 'Application-Authorization:Bearer={"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODc4OTUyMjcsImV4cCI6MTY4ODkzMjAyNywicm9sZXMiOlt7fV0sImlkIjoxMTcyMTF9.XBwHJvso8T8Y2TMM-jtQg3qBmnN_3-_mRXSsYBUtgCvj1AU8vhFo9B73p6Yg9-UFCwal4UJz0RJwhpbizOaWtZrWsRds9k5Uw7UpfjygmRvPABIWxkD2kKIsRbD1FxBFo7Q9WxDpgxJObQZkLE2bRaNpLeYXC7YtTfsGmDjK3K6Oy7mQRBU8TDm5L-7xhHBMEiVZ2kGZb6ShcmwwRSWXaYHJjKwhhSR2POiTZAwGB_P6AsNQaI0-PiVzg4tIO3tLkc5wKrITAR6ZzrPAy50cyT4MjRmXFw-26Ru5U4yViQrl63ASWWo8brmVRJwiow2N2Y2HNXMUYW3_CWllCWWWIJ88KzT7RBSD4QF1YNL3T_ifUP6gfJ_nZDZ5caRt6afh_cEyCZiXwKTPob2d9sfOncRKTXm8ajugowc36gtxbnJUUNwEuZTfjJfS4PhEr9Z0rWbLMoxRbSp0kj4hp92XReXB2Wzm8kF83eAK8A8Y4lccOZ7mmpfLCVVhsh5KQT5SX_Riklt7HOVt1axylw_GnZsVJNNZPWlGKUHnXCxgh2Ne4GFKt8csXikOM3qXdyL_olCtbE2EzeqlvsLdIHuLHI4opa95-yKTnY3YGQ4Pns3gSE9hQ31yzwlhFWd0s55XX3jcFsrffKIC2jTJt3CnDf5CCjPLpuaCQ04KnDSKuzY"}' -H 'Content-Type:application/json' -H 'Accept:application/json' --location --request GET 'https://toko.ox-sys.com/variations'
