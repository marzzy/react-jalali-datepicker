import React, { useState, useEffect } from "react";
// import { RangePicker } from "react-jalali-datepicker";
import { RangePicker } from "../Datepicker";

// TODO:
//  - onClear Range Picker => resset the selectedDateRange and Call `onChangeRange`
//  - DayNames persian days
//  - prune setted sequence of days to exclude

const DatePickerPreview = () => {
  const [isJalaali, setIsJalaali] = useState(true);
  const [excludeSequenceOfDays, setExcludeSequenceOfDays] = useState([]);
  const [isExclutionEnabled, setIsExclutionEnabled] = useState(true);
  const [isExcludedMode, setIsExcludedMode] = useState(false);

  useEffect(() => {
    console.log(JSON.stringify(excludeSequenceOfDays, null, 2));
  }, [excludeSequenceOfDays]);

  const handleExclude = () => {
    if (excludeSequenceOfDays.includes("Monday")) setExcludeSequenceOfDays([]);
    else setExcludeSequenceOfDays(["Monday"]);
  };

  return (
    <article className="routes container box">
      <header>
        <h1>Date Picker Preview</h1>
      </header>

      <button onClick={() => setIsJalaali((state) => !state)}>change</button>
      <button onClick={handleExclude}>Set Monday</button>

      <button
        onClick={() => {
          window.dispatchEvent(new CustomEvent("clearRangePicker"));
        }}
      >
        Clear datepicker
      </button>

      <div>
        {/* <input
          type="checkbox"
          checked={isExcludedMode}
          disabled={isExclutionEnabled}
          onChange={() => {
            window.dispatchEvent(
              new CustomEvent("toggleExcludeModeStatus", {
                detail: { isExcludedMode: !isExcludedMode },
              })
            );
          }}
        /> */}
        <button
          disabled={isExclutionEnabled}
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("toggleExcludeModeStatus", {
                detail: { isExcludedMode: !isExcludedMode },
              })
            );
          }}
        >
          {isExcludedMode ? "disable " : "enable "} exclude mode
        </button>
        {/* <span>EXCLUDE MODE STATUS</span> */}
      </div>

      <section>
        <RangePicker
          numberOfMonths={1}
          isJalaali={isJalaali}
          shouldDisableBeforeToday={false}
          appendExcludeWeekDays={excludeSequenceOfDays}
          // exclude mode realtes states
          onExcludeStatusChange={({ isExclutionEnabled, isExcludedMode }) => {
            setIsExclutionEnabled(isExclutionEnabled);
            setIsExcludedMode(isExcludedMode);
          }}
          // handlers
          // onExclude={(days) => console.log("EXCLUDE_DAYS: ", { days })}
          // onChangeRange={({ startDate, stopDate }) =>
          //   console.log("ON_CHANGE_RANGE: ", { startDate, stopDate })
          // }
        />
      </section>
    </article>
  );
};

export default DatePickerPreview;
