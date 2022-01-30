
import { AccessDayOutput, AccessDaysOutputData, DaysPerNight } from "../../data/table";
import styles from "./accessDays.module.scss";

  
  interface TableDataProps {
      table: AccessDaysOutputData
  }
  
  const getDayNumber = (
    accessDayRow: DaysPerNight,
    nightNumber: number,
    component: AccessDaysOutputData
  ) => {
    const value =
      accessDayRow[nightNumber] +
      " " +
      (accessDayRow[nightNumber] == 1
        ? component.dayText.singular
        : component.dayText.plural);
  
    return value;
  };
  
  const getPricePerDay = (price: number | undefined) => {
    if (price) {
      return price;
    } else {
      return "";
    }
  };
  
  const drawTableRow = (
    index: number,
    accessDayRow: AccessDayOutput,
    accessDays: number[],
    component: AccessDaysOutputData
  ): JSX.Element => {
    return (
      <tr key={index} className={styles.parkRow}>
        <td className={styles.parkName}>
          <div className={styles.parkNameWrapper}>
            <img alt="parkIcon" src={accessDayRow.parkIcon} className={styles.iconPark} />{" "}
            <span className={styles.name}>{accessDayRow.parkName}</span>
          </div>
        </td>
        {accessDayRow.days
          ? accessDays.map((nightNumber, index) => (
              <td
                key={index}
                className={`${styles.days} ${
                  index == accessDays.length - 1 ? styles.lastCol : ""
                }`}
              >
                {getDayNumber(
                  accessDayRow.days as DaysPerNight,
                  nightNumber,
                  component
                )}
              </td>
            ))
          : null}
        {accessDayRow.price ? (
          <td colSpan={accessDays.length} className={styles.price}>
            {getPricePerDay(accessDayRow.price)} {component.pricePerDay}
          </td>
        ) : null}
      </tr>
    );
  };
  
  const getDays = (days: DaysPerNight): number[] => {
    return Array.from(Object.keys(days)).map((x) => Number.parseInt(x));
  };
  
  export const TableData = ({table}: TableDataProps) => {
    const accessDays = Array.from(
        table.accessDays
        .filter((accessDayRow) => accessDayRow.days)
        .reduce(
          (old, current): Set<number> =>
            current.days
              ? new Set([...Array.from(old), ...getDays(current.days)])
              : old,
          new Set<number>()
        )
    ).sort();
  
    return (
      <section className={styles.root}>
        <div className={styles.wrapper}>
          <h1 className={styles.header}>{table.title}</h1>
          <p className={styles.description}>{table.description}</p>
          <div className={styles.tableVideo}>
            <img
              className={styles.video}
              src={table.videoImage}
              alt="AccessDaysVideoImage"
            />
            <table className={styles.accessDaysTable}>
              <thead>
                <tr>
                  <td></td>
                  {accessDays.map((nightNumber, index) => (
                    <td
                      key={index}
                      className={`${styles.nights} ${
                        index == accessDays.length - 1 ? styles.lastCol : ""
                      }`}
                    >
                      {nightNumber}{" "}
                      {nightNumber == 1
                        ? table.nightText.singular
                        : table.nightText.plural}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.accessDays.map((accessDayRow, index) =>
                  drawTableRow(index, accessDayRow, accessDays, table)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };

  
  export default TableData;
  