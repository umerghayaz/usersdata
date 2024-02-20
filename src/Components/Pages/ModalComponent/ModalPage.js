import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../Actions/UserAction";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ModalPage = ({ setIsModalOpen, isModalOpen, setTest, test }) => {
  // function for closing modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const { editdata, data, loading, error } = useSelector(
    (state) => state.Userreducer
  );
  // function for fetching data through name
  useEffect(() => {
    dispatch(getByName(test));
  }, [test, dispatch]);

  return (
    <Modal
      title=" Modal Component"
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
                  padding: "10px",
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
              <td style={{ padding: "10px" }}>Full Name</td>
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
              <td style={{ padding: "10px" }}>Followers</td>
              <td style={{ padding: "10px" }}>{editdata.followers}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>Following</td>
              <td style={{ padding: "10px" }}>{editdata.following}</td>
            </tr>

            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>Location</td>
              <td style={{ padding: "10px" }}>{editdata.location}</td>
            </tr>

            <tr>
              <td style={{ padding: "10px", textAlign: "center" }} colSpan="2">
                <Button onClick={handleCancel} icon={<ArrowLeftOutlined />}>
                  Backdrop{" "}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default ModalPage;
