import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_memo extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    m_seq: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    m_author: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    m_date: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    m_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    m_memo: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    m_image: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_memo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "m_seq" },
        ]
      },
    ]
  });
  }
}
