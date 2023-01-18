import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  
  const [name, setName] = useState("");
  const [nameError, setnameError] = useState(false);
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    var name = e.target.value;
    if (name.length <= 6) {
      // setnameError(true);
      //kkkkkksssss
    }
    setName(name);
  };

  console.log(name);
  return (
    <>
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <Row className="mb-5">
          <Col>
            <img
              src="https://sttruyen.com/res/image/icon.png"
              width={140}
              height={130}
              alt=""
            />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <span
              style={{
                color: "#000",
                fontSize: "25px",
                fontWeight: 700,
              }}
            >
              {" "}
              Đăng Nhập
            </span>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <input
              style={{
                background: "#FFFFFF",
                border: "1px solid #6B6B6B",
                borderRadius: "20px",
                width: "316px",
                height: "38.76px",
                paddingLeft: "20px",
              }}
              placeholder={"Tên Đăng Nhập/Gmail"}
              value={name}
              onChange={(e) => handleName(e)}
              type="email"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <input
              value={password}
              style={{
                background: "#FFFFFF",
                border: "1px solid #6B6B6B",
                borderRadius: "20px",
                width: "316px",
                height: "38.76px",
                paddingLeft: "20px",
              }}
              placeholder={"Mật Khẩu"}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <span
              style={{
                float: "right",
                paddingRight: "55px",
                fontFamily: "'Inter'",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              Quên mật khẩu?
            </span>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Button variant="contained">Đăng nhập</Button>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <span>
              Bạn chưa có tài khoản? <a href="#"> Đăng ký </a>
            </span>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Divider>CENTER</Divider>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Button variant="outlined" startIcon={<GoogleIcon />}>
              Continue with Google
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const styles = {
  container: { TextAlign: "center" },
};
export default LoginPage;
