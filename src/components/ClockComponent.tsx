import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { IClockComponentProps } from "../models";
import { useClockComponent } from "../hooks/useClockComponent";

export function ClockComponent({
  offset,
  uniqueKey,
  clockName,
  onDeleteCallback,
}: IClockComponentProps) {
  const { clockEl, value } = useClockComponent(offset);

  return (
    <div className="clock-container" ref={clockEl} id={uniqueKey}>
      <h2>{clockName}</h2>
      <Clock renderNumbers={true} size={200} value={value} />
      <span
        className="clock-remover"
        onClick={() => {
          onDeleteCallback(clockEl);
        }}
      >
        X
      </span>
    </div>
  );
}
