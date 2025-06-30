export type FormFieldType =
    | 'text'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'password'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'switch'
    | 'date'
    | 'file';

export interface FormFieldOption {
    label: string;
    value: string;
}

export interface FormFieldValidation {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    customValidator?: string; // function name or expression
    errorMessages?: {
        required?: string;
        minLength?: string;
        maxLength?: string;
        pattern?: string;
        min?: string;
        max?: string;
        custom?: string;
    };
}

export interface FormFieldConditionRule {
    field: string;
    operator: '==' | '!=' | '>' | '>=' | '<' | '<=' | 'in' | 'not-in';
    value: any;
}

export interface FormFieldCondition {
    type: 'visibility' | 'enable' | 'value';
    logic: 'AND' | 'OR';
    rules: FormFieldConditionRule[];
}

export interface FormField {
    // Core identity
    id: string;
    name: string;
    label: string;
    type: FormFieldType;

    // UI/UX and Styling
    placeholder?: string;
    hint?: string;
    prefix?: string;
    suffix?: string;
    icon?: string;
    class?: string; // Input element classes
    containerClassName?: string; // Wrapper/container classes
    labelClassName?: string; // Label classes
    style?: { [key: string]: any };
    width?: string | number;
    height?: string | number;
    layout?: 'vertical' | 'horizontal' | 'inline';

    // Behavior
    autofocus?: boolean;
    autocomplete?: string;
    debounce?: number;
    readonly?: boolean;
    disabled?: boolean;
    multiple?: boolean;

    // Options (for select, radio, checkbox)
    options?: FormFieldOption[];
    optionSource?: string; // API endpoint or function name

    // Date/Time
    minDate?: string;
    maxDate?: string;
    dateFormat?: string;

    // Validation
    required?: boolean;
    validation?: FormFieldValidation;

    // Advanced
    watch?: string[];
    calculatedValue?: string;
    testId?: string;
    order?: number;
    rowId?: string;

    // Conditional logic
    condition?: FormFieldCondition;
    isVisible?: boolean;
    lazySelectData?: boolean
}