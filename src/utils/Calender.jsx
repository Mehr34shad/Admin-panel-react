import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Col} from "reactstrap";

const Calender = () => {
  // ✅ a change in default state: []
  const [selectedDays, setSelectedDays] = useState([]);
  return (
      <Col className="mb-5 mb-xl-0" xl="8">
        <Calendar
          value={selectedDays}
          onChange={setSelectedDays}
          shouldHighlightWeekends
        />
      </Col>
  );
};

export default Calender;
