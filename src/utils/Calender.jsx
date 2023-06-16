import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Col, Row } from "reactstrap";

const Calender = () => {
  // ✅ a change in default state: []
  const [selectedDays, setSelectedDays] = useState([]);
  return (
    <Row className="mt-5">
      <Col className="mb-5 mb-xl-0" xl="8">
        <Calendar
          value={selectedDays}
          onChange={setSelectedDays}
          shouldHighlightWeekends
        />
      </Col>
    </Row>
  );
};

export default Calender;
