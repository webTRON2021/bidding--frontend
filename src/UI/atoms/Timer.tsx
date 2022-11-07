import moment from "moment";
import { useEffect, useState } from "react";
const momentDurationFormatSetup=require("moment-duration-format");

interface IProps {
  endDate: Date;
  onTimerEnd: () => void;
}

const Timer = (props: IProps) => {
  let { endDate, onTimerEnd } = props;
  endDate = new Date(endDate);
  const [timeLeft, setTimeLeft] = useState(
    endDate.getTime() - new Date().getTime()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(moment(endDate).diff(moment()));
      if (timeLeft <= 0) {
        clearInterval(interval);
        onTimerEnd();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, endDate, onTimerEnd]);

  return (
    <section className="timer__container">
      <span className="block">{moment.duration(timeLeft).format("h [hrs] m [min] s [sec]")}</span>
    </section>
  );
};

export default Timer;
