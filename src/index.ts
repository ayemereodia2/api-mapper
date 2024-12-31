import _ from "lodash";

export function transformKeysToPascalCase(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(transformKeysToPascalCase);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            const pascalKey = _.startCase(_.camelCase(key)).replace(/ /g, '');
            acc[pascalKey] = transformKeysToPascalCase(value);
            return acc;
        }, {} as Record<string, any>);
    }
    return obj; // Return the value directly if it's not an object or array
}
