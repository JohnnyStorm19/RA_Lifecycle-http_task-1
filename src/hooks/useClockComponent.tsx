import { useEffect, useRef, useState } from "react";
import { getTimeWithOffset } from "../helpers/getTimeWithOffset";

export function useClockComponent(offset: string) {
    const clockEl = useRef(null);
    const [value, setValue] = useState<Date>();

    useEffect(() => {
        const interval = setInterval(() => {
        const specificDate = getTimeWithOffset(offset);
        setValue(specificDate);
        }, 1000);

        return () => {
        clearInterval(interval);
        };
    }, [offset]);

    return {clockEl, value};
}