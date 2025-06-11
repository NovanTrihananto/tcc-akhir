// models/associations.js
import User from "./UserModel.js";
import barang from "./Barangmodel.js";
import Nota from "./Belibarangmodel.js";


User.hasMany(Nota, { foreignKey: "idUser", constraints:true, as: "user" });
Nota.belongsTo(User, { foreignKey: "idUser", constraints:true, as: "user" });


barang.hasMany(Nota, { foreignKey: "idbarang", constraints:true, as: "barang" });
Nota.belongsTo(barang, { foreignKey: "idbarang", constraints:true, as: "barang" });
