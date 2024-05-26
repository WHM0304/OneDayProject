import { Model } from "sequelize";
export default class tbl_notice extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        n_seq: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        n_uid: {
          type: DataTypes.STRING(25),
          allowNull: true,
          references: {
            model: "tbl_user",
            key: "u_id",
          },
        },
        n_title: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        n_div: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_notice",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "n_seq" }],
          },
          {
            name: "FK_N_UID",
            using: "BTREE",
            fields: [{ name: "n_uid" }],
          },
        ],
      }
    );
  }
}
