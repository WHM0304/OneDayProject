import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_notice from "./tbl_notice.js";
import _tbl_post from "./tbl_post.js";
import _tbl_user from "./tbl_user.js";

export default function initModels(sequelize) {
  const tbl_notice = _tbl_notice.init(sequelize, DataTypes);
  const tbl_post = _tbl_post.init(sequelize, DataTypes);
  const tbl_user = _tbl_user.init(sequelize, DataTypes);

  tbl_post.belongsTo(tbl_notice, {
    as: "p_n",
    foreignKey: "p_nseq",
  });
  tbl_notice.hasMany(tbl_post, {
    as: "tbl_posts",
    foreignKey: "p_nseq",
  });
  tbl_notice.belongsTo(tbl_user, { as: "n_u", foreignKey: "n_uid" });
  tbl_user.hasMany(tbl_notice, { as: "u_n", foreignKey: "n_uid" });
  tbl_post.belongsTo(tbl_user, { as: "p_u", foreignKey: "p_uid" });
  tbl_user.hasMany(tbl_post, { as: "u_p", foreignKey: "p_uid" });

  return {
    tbl_notice,
    tbl_post,
    tbl_user,
  };
}
