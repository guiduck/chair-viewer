import useCustomization from "../hooks/useCustomization";

const Configurator = () => {
  const { material, setMaterial } = useCustomization();
  console.log(material);
  return (
    <div className="configurator">
      <section>
        <p className="configuratorTitle">Chair Material</p>
        <div className="sectionValues">
          <div className="item">
            <div
              className={`item ${
                material === "leather" ? "active" : ""
              } itemLabel`}
              onClick={() => setMaterial("leather")}
            >
              Leather
            </div>
          </div>
          <div className="item">
            <div
              className={`item ${
                material === "fabric" ? "active" : ""
              } itemLabel`}
              onClick={() => setMaterial("fabric")}
            >
              Fabric
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="configuratorTitle">Legs Design</p>
        <div className="sectionValues">
          <div className="item">
            <div
              className={`item ${
                material === "leather" ? "active" : ""
              } itemLabel`}
              onClick={() => setMaterial("leather")}
            >
              Modern
            </div>
          </div>
          <div className="item">
            <div
              className={`item ${
                material === "fabric" ? "active" : ""
              } itemLabel`}
              onClick={() => setMaterial("fabric")}
            >
              Classic
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Configurator;
