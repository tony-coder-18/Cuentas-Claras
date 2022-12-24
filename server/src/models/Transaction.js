import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    transactionName: {
        type: DataTypes.STRING
    },
    ammount: {
        type: DataTypes.FLOAT
    },
    transactionDate: {
        type: DataTypes.DATEONLY
    },
    isIncome: {
        type: DataTypes.BOOLEAN
    },
});