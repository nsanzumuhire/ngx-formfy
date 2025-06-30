import { FormSettings } from "./form-settings";
import { FormField } from "./models";

// organizeFieldsIntoRows
export function organizeFieldsIntoRows(fields: FormField[]): FormField[][] {
    const rows: { [rowId: string]: FormField[] } = {};
    fields.forEach(field => {
        const rowId = field.rowId || 'default';
        if (!rows[rowId]) rows[rowId] = [];
        rows[rowId].push(field);
    });
    // Sort fields in each row by order
    return Object.values(rows).map(rowFields =>
        rowFields.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    );
}

// getSpacingValue
export function getSpacingValue(config: FormSettings): string {
    if (config.spacing === 'custom') {
        return `${config.customSpacing ?? 8}px`;
    }
    return config.spacing;
}

// getFieldClassName
export function getFieldClassName(field: FormField, config: FormSettings): string {
    const baseClasses = ['w-full'];
    if (field.type === 'textarea') baseClasses.push('resize-none');
    if (config.layout === 'auto') baseClasses.push('flex-1');
    return [field.class, ...baseClasses].filter(Boolean).join(' ');
}

// getFieldStyle
export function getFieldStyle(field: FormField, config: FormSettings): { [key: string]: any } {
    const style: { [key: string]: any } = { ...(field.style || {}) };
    if (config.layout === 'auto' && field.width) {
        style["width"] = typeof field.width === 'number' ? `${field.width}%` : field.width;
    }
    if (field.height && field.type === 'textarea') {
        style["height"] = typeof field.height === 'number' ? `${field.height}px` : field.height;
    }
    return style;
}

// getFormContainerClassName
export function getFormContainerClassName(config: FormSettings): string {
    const classes = ['space-y-4'];
    switch (config.layout) {
        case 'grid':
            classes.push('grid', `grid-cols-${config.gridColumns ?? 2}`, 'gap-4');
            break;
        case 'two-column':
            classes.push('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4');
            break;
        case 'auto':
            classes.push('space-y-4');
            break;
        default:
            classes.push('space-y-4');
    }
    return classes.join(' ');
}

// getFormContainerStyle
export function getFormContainerStyle(config: FormSettings): { [key: string]: any } {
    const style: { [key: string]: any } = {};
    if (config.spacing === 'custom' && config.customSpacing) {
        style["gap"] = `${config.customSpacing}px`;
    }
    return style;
}