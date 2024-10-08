import { MdStars } from "react-icons/md";
import Marquee from "react-fast-marquee";

const CardTitles = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                marginBottom: "1rem",
            }}
        >
            <div
                style={{
                    width: "85rem",
                    maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
                }}
            >
            <Marquee 
              gradient={false}
              speed={80}
              pauseOnHover={true}
            >
            
            {
                Array(4).fill(0).map((_, index) => (
                 <div
                    key={index}
                    style={{
                        width: "25rem",
                        height: "25rem",
                        margin: "2rem .8rem",
                        borderRadius: "1rem",
                        cursor: "pointer",
                        background: "linear-gradient(-60deg, rgba(25, 26, 29, 0.1), rgba(255, 255, 255, 0.1))",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "1rem",
                    }}
                 >Hola</div>
                ))
            }
            </Marquee>

            </div>
        </div>
      <div style={{ display: "flex", marginBottom: "1rem", gap: "2rem" }}>
        <div
          style={{
            width: "39rem",
            height: "13.125rem",
            borderRadius: "1rem",
            cursor: "pointer",
            background: "linear-gradient(-60deg, rgba(25, 26, 29, 0.1), rgba(255, 255, 255, 0.1))",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "1rem",
          }}
        >
         Mini Projects
        </div>
        <div
          style={{
            width: "39rem",
            height: "13.125rem",
            borderRadius: "1rem",
            cursor: "pointer",
            background: "linear-gradient(-60deg, rgba(25, 26, 29, 0.1), rgba(255, 255, 255, 0.1))",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "1rem",
          }}
        >
          UI/UX Examples
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          width: "50rem",
        }}
      >
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem 1.25rem",
                marginTop: "1rem",
                borderRadius: ".8rem",
                cursor: "pointer",
                background: "rgba(25, 25, 29, 0.8)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <MdStars style={{ fontSize: "1.5rem", color: "#0099ff" }} />
              <h3
                style={{
                  marginLeft: ".4rem",
                  color: "#767676",
                }}
              >
                Lorem ipsum
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardTitles;
