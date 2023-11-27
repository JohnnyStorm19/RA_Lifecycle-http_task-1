export interface IFormSubmit {
    (data:IForm[]): void;
}

export interface IForm {
    timezone: string;
    text: string;
    key: string;
}

export interface IClockComponentProps {
    uniqueKey: string;
    offset: string;
    clockName: string;
    onDeleteCallback: (element: React.RefObject<HTMLElement>) => void;
}