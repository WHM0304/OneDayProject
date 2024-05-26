import { Model } from "sequelize";

export default class tbl_post extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        p_seq: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        p_uid: {
          type: DataTypes.STRING(25),
          allowNull: true,
          references: {
            model: "tbl_user",
            key: "u_id",
          },
        },
        p_nseq: {
          type: DataTypes.BIGINT,
          allowNull: true,
          references: {
            model: "tbl_notice",
            key: "n_seq",
          },
        },
        p_date: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        p_time: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        p_title: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        p_content: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        p_image: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tbl_post",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "p_seq" }],
          },
          {
            name: "FK_P_NSEQ",
            using: "BTREE",
            fields: [{ name: "p_nseq" }],
          },
          {
            name: "FK_P_UID",
            using: "BTREE",
            fields: [{ name: "p_uid" }],
          },
        ],
      }
    );
  }
}
