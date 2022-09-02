import styles from "./GridItem.module.css";
import {Level} from "../../helpers/imc";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  item: Level;
};

export const GridItem = ({item}: Props) => {
  return (
    <div className={styles.item} style={{backgroundColor: item.color}}>
      <div className={styles.iconContainer}>
        <img
          src={item.icon === "up" ? upImage : downImage}
          alt={item.icon}
          width={25}
        />
      </div>
      <div className={styles.details}>
        <p>{item.title}</p>
        {item.yourImc && <p>Seu IMC é de {item.yourImc.toFixed(2)} kg/m²</p>}
        <p>
          IMC entre {item.imc[0]} e {item.imc[1]}
        </p>
      </div>
    </div>
  );
};
