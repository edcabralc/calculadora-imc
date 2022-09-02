import {useState} from "react";
import styles from "./App.module.css";
import {GridItem} from "./components/GridItem";
import {levels, calculateImc, Level} from "../src/helpers/imc";

export const App = () => {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [warning, setWarning] = useState(true);
  const [showInfo, setShowInfo] = useState<Level | null>(null);

  const handleBackButton = () => {
    setShowInfo(null);
    setHeightField(0);
    setWeightField(0);
  };

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setShowInfo(calculateImc(heightField, weightField));
      console.log(calculateImc(heightField, weightField));
      setWarning(false);
    } else {
      console.log(warning);
      setWarning(true);
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <h1>Calcule seu IMC</h1>
        <p className={styles.legend}>
          IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
          Organização Mundial de Saúde para calcular o peso ideal de cada
          pessoa.
        </p>
      </div>
      <div>
        <div className={styles.form}>
          <div className={styles.inputs}>
            <label htmlFor="">Estatura</label>
            <div>
              <input
                type="number"
                placeholder="Estatura em cm"
                value={heightField > 0 ? heightField : ""}
                onChange={(e) => setHeightField(parseFloat(e.target.value))}
                disabled={showInfo ? true : false}
              />
            </div>
          </div>

          <div className={styles.inputs}>
            <label htmlFor="">Peso</label>
            <div>
              <input
                type="number"
                placeholder="Peso em kg"
                value={weightField > 0 ? weightField : ""}
                onChange={(e) => setWeightField(parseFloat(e.target.value))}
                disabled={showInfo ? true : false}
              />
            </div>
          </div>
        </div>
        {warning && (
          <span style={{display: "", fontSize: "12px", color: "red"}}>
            Digite todos os campos
          </span>
        )}
        <button
          className={styles.btn}
          onClick={handleCalculateButton}
          disabled={showInfo ? true : false}
        >
          Calcular
        </button>
      </div>

      <div className={styles.itemsContainer}>
        {!showInfo && (
          <>
            {levels.map((item) => (
              <GridItem item={item} />
            ))}
          </>
        )}
        {showInfo && (
          <div className={styles.itemResult}>
            <GridItem item={showInfo} />

            <div className={styles.btnBack}>
              <button onClick={handleBackButton}>Voltar</button>
            </div>
          </div>
        )}
      </div>

      <p className={styles.developedBy}>
        developed by <a href="http://github.com/edcabralc">@edcabralc</a>
      </p>
    </main>
  );
};

export default App;
