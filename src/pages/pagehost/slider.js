import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";

function Slider() {
  const { t } = useTranslation();

  const names = [
    "",t("reke1"),t("darrel1"),t("nerina1"),t("clair1"),t("moh1"),t("marko1"),"",
  ];
  const images = [
    "",
    "assets/images/slid1.jpg",
    "assets/images/slid2.jpg",
    "assets/images/slid3.jpg",
    "assets/images/slide4.jpg",
    "assets/images/slide5.jpg",
    "assets/images/slide6.jpg",
    " ",
  ];
  const pirce = [
    "",
    "assets/images/slider1 (3).png",
    "assets/images/slider1 (4).png",
    "assets/images/slider1 (2).png",
    "assets/images/slider1 (6).png",
    "assets/images/slider1 (5).png",
    "assets/images/slider1 (1).png",
    " ",
  ];
  const pirceBefore = [
    "",t("reke2"),t("darrel12"),t("nerina2"),t("clair2"),t("moh2"),t("marko2"),"",
  ];

  const [i, setI] = useState(0);
  function handleChange1() {
    if (i < 5) {
      setI((i) => i + 1);
      console.log(i);
    }
  }
  function handleChange2() {
    if (i > 0) {
      setI((i) => i - 1);
      console.log(i);
    }
  }

  return (
    <>

      <Row className=" m-0 p-0">
        <Col lg={12} className="p-0">
          <Row className=" m-0 p-0  flex-nowrap">
            <Row className="p-0 m-5 d-flex align-items-center flex-nowrap ">
            {/* 1 */}
              <Card className="p-0 me-3 border border-0" style={{width:'30%'}}>
                <Card.Img
                  variant="top"
                  src={images[i]}
                  className=" w-100 shadow "
                />
              
              </Card>
              {/* 2 */}
              <Card className="p-0 me-3 border border-0 "style={{width:'30%'}} >
                <Card.Img
                  variant="top"
                  src={images[i + 1]}
                  className="shadow"
                />
                <Card.Body>
                  <Card.Title className=" text-start">
                    {names[i + 1]}
                  </Card.Title>

                  <Card.Img
                    variant="top"
                    src={pirce[i + 1]}
                    className=" w-50  "
                  />
                  <button
                    onClick={handleChange2}
                    className="btn btn-light rounded-5"
                  >
                    <ArrowBackIosNewIcon sx={{ height: 15, width: 15 }} />
                  </button>
                  <button
                    onClick={handleChange1}
                    className="btn btn-light rounded-5"
                  >
                    <ArrowForwardIosIcon sx={{ height: 15, width: 15 }} />
                  </button><br/>

                  <span className="text-start">
                    {pirceBefore[i + 1]}
                  </span>
                </Card.Body>
              
              </Card>
              {/* 3 */}
              <Card className="p-0 me-3 border border-0 " style={{width:'30%'}} >
                <Card.Img
                  variant="top"
                  src={images[i + 2]}
                  className="w-100 shadow"
                />
              </Card>
              <Card className="p-0 me-3 border border-0 "  style={{width:'30%'}}>
                <Card.Img
                  variant="top"
                  src={images[i + 3]}
                  className="w-100 shadow"
                />
              </Card>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Slider;
