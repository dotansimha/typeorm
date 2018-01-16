import {ColumnType} from "../../driver/types/ColumnTypes";
import {ValueTransformer} from "./ValueTransformer";

/**
 * Describes all column's options.
 */
export interface ColumnOptions {

    /**
     * Column type. Must be one of the value from the ColumnTypes class.
     */
    type?: ColumnType;

    /**
     * Column name in the database.
     */
    name?: string;

    /**
     * Entity to extend with this field
     */
    extendEntity?: string;

    /**
     * Column type's length. Used only on some column types.
     * For example type = "string" and length = "100" means that ORM will create a column with type varchar(100).
     */
    length?: string|number;

    /**
     * Indicates if column's value can be set to NULL.
     */
    nullable?: boolean;

    /**
     * Indicates if column value is not updated by "save" operation.
     * It means you'll be able to write this value only when you first time insert the object.
     * Default value is "false".
     */
    readonly?: boolean;

    /**
     * Indicates if column is always selected by QueryBuilder and find operations.
     * Default value is "true".
     */
    select?: boolean;

    /**
     * Default database value.
     */
    default?: any;

    /**
     * Indicates if this column is a primary key.
     * Same can be achieved when @PrimaryColumn decorator is used.
     */
    primary?: boolean;

    /**
     * Specifies if column's value must be unique or not.
     */
    unique?: boolean;

    /**
     * Column comment. Not supported by all database types.
     */
    comment?: string;

    /**
     * The precision for a decimal (exact numeric) column (applies only for decimal column), which is the maximum
     * number of digits that are stored for the values.
     */
    precision?: number;

    /**
     * The scale for a decimal (exact numeric) column (applies only for decimal column), which represents the number
     * of digits to the right of the decimal point and must not be greater than precision.
     */
    scale?: number;

    /**
     * Defines a column character set.
     * Not supported by all database types.
     */
    charset?: string;

    /**
     * Defines a column collation.
     */
    collation?: string;

    /**
     * Array of possible enumerated values.
     */
    enum?: any[]|Object;

    /**
     * Indicates if this column is an array.
     * Can be simply set to true or array length can be specified.
     * Supported only by postgres.
     *
     * @deprecated use array: true instead. Will be removed in 0.2.0
     */
    isArray?: boolean;

    /**
     * Indicates if this column is an array.
     * Can be simply set to true or array length can be specified.
     * Supported only by postgres.
     */
    array?: boolean;

    /**
     * Specifies a value transformer that is to be used to (un)marshal
     * this column when reading or writing to the database.
     */
    transformer?: ValueTransformer;

}
