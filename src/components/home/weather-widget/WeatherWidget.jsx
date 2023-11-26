import classes from "./WeatherWidget.module.scss";

function WeatherWidget({ icon, city, description, maxTemp, minTemp, day }) {
  const iconUrl = `https://cdn.weatherbit.io/static/img/icons/${icon}.png`;

  return (
    <div className={classes.card}>
      <div className={`${classes.card__side} ${classes["card__side--front"]}`}>
        <div
          className={`${classes.card__picture} ${classes["card__picture--1"]}`}
        >
          <img
            className={classes.card__icon}
            height="50"
            width="50"
            src={iconUrl}
          />{" "}
        </div>
        <h4 className={classes.card__heading}>
          <span
            className={`${classes["card__heading-span"]} ${classes["card__heading-span--day"]} ${classes["card__heading-span--1"]}`}
          >
            {day}
          </span>
          <br />
          <span
            className={`${classes["card__heading-span"]} ${classes["card__heading-span--1"]}`}
          >
            {city}
          </span>
        </h4>
        <div className={classes.card__details}>
          <ul>
            <li>{description}</li>
            <li>Min temperature: {maxTemp}</li>
            <li>Max temperature: {minTemp}</li>
          </ul>
        </div>
      </div>
      <div
        className={`${classes.card__side} ${classes["card__side--back"]} ${classes["card__side--back-1"]}`}
      >
        <div className={classes.card__cta}>
          <div className={classes["card__price-box"]}>
            <p className={classes["card__description"]}>{description}</p>
            <p className={classes["card__max-tem"]}>
              Max temperature: {maxTemp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
