import { IForm } from "../models";
import { useState } from "react";

export function useApp() {
    const [submittedValues, setSubmittedValues] = useState([
        { text: "", timezone: "", key: "" }
      ]);
    
      const handleFormSubmit = (data: IForm[]) => {
        setSubmittedValues([...submittedValues, ...data]);
        console.log("submittedValues", submittedValues);
      };
    
      const handleDeleteClock = (element: React.RefObject<HTMLElement>) => {
        console.log(element, "delete clock!", element.current?.id);
        const filtered = submittedValues.filter(
          (clock) => clock?.key != element.current?.id
        );
    
        setSubmittedValues([...filtered]);
        console.log('filtered: ', filtered, 'submittedValues: ', submittedValues);
      };

      return {handleFormSubmit, handleDeleteClock, submittedValues };
}