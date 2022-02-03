
import { AccessDayOutput, AccessDaysOutputData, DaysPerNight } from "../../data/table";
import { StyledDescription, StyledTable, StyledTableData, StyledTableFirstColumn, StyledTableFirstRow, StyledTableSecondColumn, StyledTableThirdColumn, StyledTableTitleRow, StyledTableVideo, StyledTitle, StyledVideo } from "./StyledTableData";

  
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
      <StyledTableFirstRow key={index}>
        <StyledTableFirstColumn> 
            <img alt="icon" src={accessDayRow.icon} className="icon" />{" "}
            <span className="name">{accessDayRow.name}</span>
        </StyledTableFirstColumn>
        {accessDayRow.days
          ? accessDays.map((nightNumber, index) => (
              <StyledTableSecondColumn
                key={index}
                className={`${
                  index == accessDays.length - 1 ? "lastCol" : ""
                }`}
              >
                {getDayNumber(
                  accessDayRow.days as DaysPerNight,
                  nightNumber,
                  component
                )}
              </StyledTableSecondColumn>
            ))
          : null}
        {accessDayRow.price ? (
          <StyledTableThirdColumn colSpan={accessDays.length}>
            {getPricePerDay(accessDayRow.price)} {component.pricePerDay}
          </StyledTableThirdColumn>
        ) : null}
      </StyledTableFirstRow>
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
      <StyledTableData>
        <div className="wrapper">
          <StyledTitle>{table.title}</StyledTitle>
          <StyledDescription>{table.description}</StyledDescription>
          <StyledTableVideo>
            <StyledVideo
              src={table.videoImage}
              alt="TableDataVideoImage"
            />
            <StyledTable>
              <thead>
                <tr>
                  <td></td>
                  {accessDays.map((nightNumber, index) => (
                    <StyledTableTitleRow
                      key={index}
                      className={`${
                        index === accessDays.length - 1 ? "lastCol" : ""
                      }`}
                    >
                      {nightNumber}{" "}
                      {nightNumber === 1
                        ? table.nightText.singular
                        : table.nightText.plural}
                    </StyledTableTitleRow>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.accessDays.map((accessDayRow, index) =>
                  drawTableRow(index, accessDayRow, accessDays, table)
                )}
              </tbody>
            </StyledTable>
          </StyledTableVideo>
        </div>
      </StyledTableData>
    );
  };

  
  export default TableData;
  