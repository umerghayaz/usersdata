import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../Actions/UserAction";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ItemPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { editdata, data, loading, error } = useSelector(
    (state) => state.Userreducer
  );
  const { id } = useParams();
  // fetching data through name
  useEffect(() => {
    dispatch(getByName(id));
  }, []);
  // function for going on home page
  const Navigatepage = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2em",
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "10px",
          }}
        >
          Item Component
        </h1>
      </div>

      <div style={{ width: "1000px", margin: "0 auto " }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderSpacing: 0,
          }}
        >
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th
                style={{
                  padding: "10px ",
                  textAlign: "left",
                  borderBottom: "1px solid #ccc",
                }}
              >
                Attribute
              </th>
              <th
                style={{
                  padding: "10px",
                  textAlign: "left",
                  borderBottom: "1px solid #ccc",
                }}
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>Name</td>
              <td style={{ padding: "10px" }}>{editdata.login}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>Picture</td>
              <td style={{ padding: "10px" }}>
                <img
                  src={editdata.avatar_url}
                  alt={editdata.login}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>Github Profile Link</td>
              <td style={{ padding: "10px" }}>
                <a href={editdata.html_url}>Github Profile Link</a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", textAlign: "center" }} colSpan="2">
                <Button onClick={Navigatepage} icon={<ArrowLeftOutlined />}>
                  Backdrop{" "}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemPage;
