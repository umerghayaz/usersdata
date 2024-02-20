import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Actions/UserAction";
import SearchPage from "../SearchComponent/SearchPage";
import { Link } from "react-router-dom";
import ModalPage from "../ModalComponent/ModalPage";

const ListPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error, messageapi } = useSelector(
    (state) => state.Userreducer
  );
  const [test, setTest] = new useState();

  const [filteredList, setFilteredList] = new useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testbutton = (value) => {
    console.log(value, "test");
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Node_Id",
      dataIndex: "node_id",
    },
    {
      title: "User Name",
      dataIndex: "login",
      render: (login, record) => (
        <a
          onClick={() => {
            testbutton(record.login);
            setIsModalOpen(true);
            setTest(record.login);
          }}
        >
          {login}
        </a>
      ),
    },
    {
      title: "Site_Admin",
      dataIndex: "site_admin",
      render: (site_admin) => (site_admin ? "true" : "false"),
    },
    { title: "Type", dataIndex: "type" },
    { title: "Gravatar_id", dataIndex: "gravatar_id" },

    {
      title: "Image",
      dataIndex: "avatar_url",
      width: 100,
      maxWidth: 100,
      render: (t, r) => (
        <img src={`${r.avatar_url}`} style={{ width: "100%" }} />
      ),
    },
    {
      title: "Profile_Link",
      dataIndex: "html_url",

      render: (t, r) => <a href={`${r.html_url}`}>Profile_Link</a>,
    },
    {
      title: "Events_Link",
      dataIndex: "events_url",

      render: (t, r) => <a href={`${r.events_url}`}>Events_Link</a>,
    },
    {
      title: "Followers_Link",
      dataIndex: "followers_url",

      render: (t, r) => <a href={`${r.followers_url}`}>Followers_Link</a>,
    },
    {
      title: "Following_Link",
      dataIndex: "following_url",

      render: (t, r) => <a href={`${r.following_url}`}>Following_Link</a>,
    },
    {
      title: "Gists_Link",
      dataIndex: "gists_url",

      render: (t, r) => <a href={`${r.gists_url}`}>Gists_Link</a>,
    },
    {
      title: "Organizations_Link",
      dataIndex: "organizations_url",

      render: (t, r) => (
        <a href={`${r.organizations_url}`}>Organizations_Link</a>
      ),
    },
    {
      title: "Received_events_Link",
      dataIndex: "received_events_url",

      render: (t, r) => (
        <a href={`${r.received_events_url}`}>Received_events_Link</a>
      ),
    },
    {
      title: "Repos_Link",
      dataIndex: "repos_url",

      render: (t, r) => <a href={`${r.repos_url}`}>Repos_Link</a>,
    },
    {
      title: "Starred_Link",
      dataIndex: "starred_url",

      render: (t, r) => <a href={`${r.starred_url}`}>Starred_Link</a>,
    },
    {
      title: "Subscriptions_Link",
      dataIndex: "subscriptions_url",

      render: (t, r) => (
        <a href={`${r.subscriptions_url}`}>Subscriptions_Link</a>
      ),
    },
    {
      title: "Profile_Details_Link",
      dataIndex: "url",

      render: (t, r) => <a href={`${r.url}`}>Profile_Details_Link</a>,
    },

    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <Space>
          <Link to={`Item/${record.login}`}>
            <div>
              <EyeOutlined style={{ cursor: "pointer" }} />
            </div>
          </Link>
          {/* <Button danger="danger"  onClick={() => {
                  setIsModalOpen(true);
                  setTest(record.login)
                }} icon={<EyeOutlined />}></Button>
                <Button danger="danger"  onClick={() => {
                  testbutton(record.login)
                  
                }} icon={<EyeOutlined />}></Button> */}
          <ModalPage
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            test={test}
            setTest={setTest}
          />
        </Space>
      ),
    },
  ];
  //   function for getting all users data
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
    setFilteredList(data); // Initialize filtered list with all users on component mount
  }, [data]);
  return (
    <div className="responsive-table-container">
      <h1
        style={{
          textAlign: "center",
          fontSize: "2em",
          color: "#333",
          borderBottom: "2px solid #333",
          paddingBottom: "10px",
        }}
      >
        List Component
      </h1>
      {/* <input id="search-box" onChange={filterBySearch} /> */}
      <SearchPage
        setFilteredList={setFilteredList}
        filteredList={filteredList}
        data={data}
      />
      <Table columns={columns} dataSource={filteredList} bordered />
    </div>
  );
};

export default ListPage;
