export type FormLayoutType = 'single-column' | 'two-column' | 'grid' | 'auto';

export type ButtonLayout =
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
    | 'split';

export interface FormSettings {
    // Layout
    layout: FormLayoutType;
    gridColumns?: number; // Only for grid layout
    spacing: string; // e.g., '8px', 'custom'
    customSpacing?: number; // Only if spacing === 'custom'
    showLabels: boolean;

    // Button configuration
    buttonLayout: ButtonLayout;
    submitButtonText: string;
    cancelButtonText: string;
    submitButtonColor: string; // e.g., '#3b82f6'
    cancelButtonColor: string; // e.g., '#6b7280'
    showCancelButton: boolean;

    // Form meta
    title?: string;
    description?: string;

    // Styling
    formClassName?: string;
    formStyle?: { [key: string]: any };
}