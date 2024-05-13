import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_memo from "./tbl_memo.js";

export default function initModels(sequelize) {
  const tbl_memo = _tbl_memo.init(sequelize, DataTypes);

  return {
    tbl_memo,
  };
}
