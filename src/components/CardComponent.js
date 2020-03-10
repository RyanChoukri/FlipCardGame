import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
class CardComponent extends React.Component {
  render() {
    const {
      handleChange,
      cardInfo: { fliped, content, id, win }
    } = this.props;
    //console.log(fliped, content, id);
    const includeFlipped = fliped
      ? {
          isFlipped: fliped
        }
      : {};
    //console.log(includeFlipped);
    return (
      <div className="card">
        <Flippy
          style={{ display: "block", width: "83px", height: "140px" }}
          flipOnClick={true} // default false
          isFlipped={fliped}
          flipDirection="horizontal" // horizontal or vertical
          ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
        >
          <FrontSide
            onClick={handleChange.bind(null, id)}
            className="cardee"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.46) 4px 6px 10px",
              borderRadius: "5px",
              backgroundColor: "#41669d"
            }}
          >
            <img
              style={{ borderRadius: "5px", width: "83px", height: "140px" }}
              alt="img"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/7b7afb22566939.56314d69855ab.jpg"
            />
          </FrontSide>
          <BackSide
            style={{
              boxShadow: "rgba(0, 0, 0, 0.46) 4px 6px 10px",
              borderRadius: "5px",
              backgroundColor: win ? "#bfad11" : "#175852"
            }}
          >
            {win && (
              <div
                style={{
                  borderRadius: "5px",
                  position: "absolute",
                  backgroundColor: "rgb(255, 239, 0)",
                  width: "83px",
                  height: "140px",
                  opacity: 0.5
                }}
              />
            )}
            <img
              alt="img"
              src={content}
              style={{ borderRadius: "5px", width: "83px", height: "140px" }}
            />
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default CardComponent;

//generate board 4 x 4
//use ref for click
//generate board
//generate board
